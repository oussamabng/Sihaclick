import React, { useEffect, useState } from "react";
import {
  Grid,
  Checkbox,
  Button,
  Dropdown,
  Form,
  Icon,
  Segment,
} from "semantic-ui-react";
import axios from "axios";

//? import css
import "./BloodAnnonce.css";

import { ReactComponent as Arrow } from "../../assets/arrow.svg";

//? import components
import SidebarDons from "../../components/SidebarDons/SidebarDons.jsx";
import BloodCard from "../../components/BloodCard/BloodCard.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

//? redux settings
import { get_blood, sort_blood_distance } from "../../actions/bloodActions.js";
import { open } from "../../actions/authActions.js";
import { logout } from "../../actions/authActions.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import ModalBloodAdd from "../ModalBloodAdd/ModalBloodAdd";

const BloodAnnonce = (props) => {
  const { isFrench } = props.selectedLanguage;
  const { filter } = props.selectedLanguage.medicament;
  const [wilayaNumb, set_wilaya_numb] = useState('all')
  const [min, setMin] = useState(0);
  const [max, setMax] = useState();


  const friendOptions = [
    {
      key: 1,
      text: "A",
      value: "A",
    },
    {
      key: 2,
      text: "B",
      value: "B",
    },
    {
      key: 3,
      text: "AB",
      value: "AB",
    },
    {
      key: 4,
      text: "O",
      value: "O",
    },
  ];
  const [typeBlood, setTypeBlood] = useState("O");
  const [isPositive, setIsPositive] = useState(true);
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [alphabet, setAlpha] = useState(false);
  const [distance, setDistance] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [AZfilter, setAZfilter] = useState(false)
  const [current, setCurrent] = useState(1)
  const handleModal = () => {
    setOpenModal((prevState) => !prevState);
  };
  const AZhandle = () => {
    setAZfilter(prevState => !prevState)
    setIsClicked(true)
  }
  const handleType = (e, { value }) => {
    setTypeBlood(value);
  };
  const handleSort = (e, { name }) => {
    switch (name) {
      case "az":
        setAlpha((prevState) => !prevState);
        break;
      case "distance":
        props.isLogin ? setDistance((prevState) => !prevState) : props.open();
        break;
      default:
        break;
    }
  };
  const handlePositive = () => {
    setIsPositive((prevState) => !prevState);
  };
  const handleChange = (e, { value, name }) => {
    switch (name) {
      case "wilaya":
        setWilaya(value);
        break;
      case "commune":
        setCommune(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isClicked) {
      setIsLoading(true);
      const instance1 = axios.create({
        baseURL: "https://sihaclik.com/api/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const instance = axios.create({
        baseURL: "https://sihaclik.com/api/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
      });
      instance1
        .get("public/wilaya/")
        .then((res) => {
          setIsLoading(false);
          //? code of the wilaya
          let code =
            wilaya.length > 0
              ? res.data.filter((elm) =>
                elm.nom.toLowerCase().includes(wilaya.toLowerCase())
              )[0].code
              : "all";
          var codeCommune;
          res.data.map((elm) => {
            let communesX = elm.communes;
            let com = communesX.filter((elm) =>
              elm.nom.toLowerCase().includes(commune.toLowerCase())
            );
            if (com.length > 0) codeCommune = com[0];
            return true;
            //? get code of commune and wilaya
          });
          instance
            .get(
              `public/donnation/blood/["${typeBlood}${
              isPositive ? "+" : "-"
              }"]/blood/all/${
              wilaya.length > 0
                ? code
                : commune.length > 0
                  ? codeCommune.wilaya_id
                  : "all"
              }/${commune.length > 0 ? codeCommune.id : "all"}/0/12`
            )
            .then((res) => {
              if (AZfilter) {
                props.get_blood(res.data.sort(dynamicSort("name")))
                if (res.data.sort(dynamicSort("name")).length >= 12) {
                  setMax(Math.ceil(res.data.sort(dynamicSort("name")).length / 12))

                } else { setMax(1) }

              } else {
                props.get_blood(res.data);
                if (res.data.length >= 12) {
                  setMax(Math.ceil(res.data.length / 12))
                } else { setMax(1); }
              }
              setIsClicked(false);
              setIsLoading(false);
              console.log(res)
            })
            .catch((err) => {
              console.log(err.response);
              setIsClicked(false);
            });
        })
        .catch((err) => {
          console.log(err);
          setIsClicked(false);
        });
    }

  }, [isClicked, commune, isPositive, props, AZfilter, typeBlood, wilaya]);

  useEffect(() => {
    const instance = axios.create({
      baseURL: "https://sihaclik.com/api/",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
    instance
      .get(
        "public/donnation/blood/all/all/0/12"
      )
      .then((res) => {
        if (AZfilter) {
          props.get_blood(res.data.sort(dynamicSort("name")))
          if (res.data.sort(dynamicSort("name")).length >= 12) {
            setMax(Math.ceil(res.data.sort(dynamicSort("name")).length / 12))
          } else { setMax(1) }
        } else {
          props.get_blood(res.data);
          if (res.data.length >= 12) {
            setMax(Math.ceil(res.data.length / 12))
          } else { setMax(1) }
        }
        setIsClicked(false);
        setIsLoading(false);
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response);
        setIsClicked(false);
      });
  }, [])

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result = (a.user[property] < b.user[property]) ? -1 : (a.user[property] > b.user[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }
  useEffect(() => {
    if (distance) {
      props.sort_blood_distance(props.data_blood);
    }
  }, [distance, props]);
  return (
    <Segment loading={isLoading} className="blood_annonce sidebar_dons">
      <ModalBloodAdd openModal={openModal} setOpenModal={setOpenModal} />
      <div className="filter_mobile_blood">
        <div className="content_sidebar">
          <div
            style={{
              position: "relative",
            }}
          >
            <p>Groupe sanguin</p>
            <Dropdown
              value={typeBlood}
              onChange={handleType}
              openOnFocus
              selection
              icon={null}
              options={friendOptions}
              style={{
                display: "relative",
              }}
            ></Dropdown>
            <Arrow className="tesdeg" />
          </div>
          <div className="type_content">
            <Checkbox
              radio
              label="Positive +"
              checked={isPositive}
              onChange={handlePositive}
            />
            <Checkbox
              radio
              label="Négative -"
              checked={!isPositive}
              onChange={handlePositive}
            />
          </div>

          <Form>
            <Form.Input
              style={{
                textAlign: isFrench ? "left" : "right",
              }}
              label={filter.wilaya}
              name="wilaya"
              value={wilaya}
              onChange={handleChange}
            />
            <Form.Input
              style={{
                textAlign: isFrench ? "left" : "right",
              }}
              label={filter.commune}
              name="commune"
              value={commune}
              onChange={handleChange}
            />
            <Form.Button
              onClick={() => setIsClicked(true)}
              className="filter_btn blood"
            >
              {isFrench ? "Filter" : filter.action}
            </Form.Button>
          </Form>
        </div>
      </div>
      <SidebarDons
        commune={commune}
        wilaya={wilaya}
        handleChange={handleChange}
        isBlood
        handlePositive={handlePositive}
        handleType={handleType}
        isPositive={isPositive}
        typeBlood={typeBlood}
        setIsClicked={setIsClicked}
        set_wilaya_numb={set_wilaya_numb}
      />
      <div className="table_blood">
        <div className="blood_filter">
          <div className="_checkbox type_content">
            <Checkbox
              radio
              label="A - Z Filter"
              checked={AZfilter}
              onClick={AZhandle}
              name="az"
            />
            <Checkbox
              radio
              label="Par Distance"
              value={distance}
              checked={distance}
              onClick={handleSort}
              name="distance"
            />
          </div>
          <Button onClick={handleModal}>
            <Icon name="plus" color="white" />
            Ajouter annonce
          </Button>
        </div>
        <div className="grid_center">
          <Grid columns={3}>
            {props.data_blood && props.data_blood.map((elm, index) => (
              <Grid.Column key={index}>
                <BloodCard data={elm} />
              </Grid.Column>
            ))}
          </Grid>
        </div>
        <Pagination max={max} setMax={setMax} setMin={setMin} min={min} current={current} setCurrent={setCurrent} />
      </div>
    </Segment>
  );
};

BloodAnnonce.propTypes = {
  data_blood: PropTypes.array.isRequired,
  sort_blood_distance: PropTypes.func.isRequired,
  get_blood: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  selectedLanguage: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  c: state.blood.data_blood,
  isOpen: state.auth.isOpen,
  isLogin: state.auth.isLogin,
  token: state.auth.token,
  selectedLanguage: state.language,
});

export default connect(mapStateToProps, {
  get_blood,
  sort_blood_distance,
  logout,
  open,
})(withRouter(BloodAnnonce));
