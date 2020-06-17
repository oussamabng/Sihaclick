import React, { useState, useEffect } from "react";
import { Grid, Checkbox, Input, Accordion, Form, Segment } from "semantic-ui-react";

//? import css
import "./MedicamentAnnonce.css";

//? import components
import SidebarDons from "../../components/SidebarDons/SidebarDons.jsx";
import CardDon from "../../components/CardDon/CardDon.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Axios from "axios";

import { ReactComponent as Filter } from "../../assets/filter.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

//? redux settings
import { get_drugs } from "../../actions/drugsActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { selectLanguage } from "../../actions/languageAction";

const MedicamentAnnonce = (props) => {
  const { livre } = props
  const { filter } = props.selectedLanguage.medicament;
  const { isFrench } = props.selectedLanguage;
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const [name, setName] = useState("");
  const [activeIndex, setactiveIndex] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [DistanceFilter, setDistanceFilter] = useState(false)
  const [wilayaNumb, set_wilaya_numb] = useState("all")
  const [isLoading, setIsLoading] = useState(false)
  const [AZfilter, setAZfilter] = useState(false)

  const handleClick = () => {
    setactiveIndex((prevState) => !prevState);
  };
  const AZhandle = () => {
    setAZfilter(prevState => !prevState)
  }
  const handleDistanceFilter = () => {
    setDistanceFilter(prevState => !prevState)
    //TODO lel coords
  }
  const handleChange = (e, { value, name }) => {
    switch (name) {
      case "wilaya":
        setWilaya(value);
        break;
      case "commune":
        setCommune(value);
        break;
      case "name":
        setName(value);
        break;
      default:
        break;
    }
  };
  const handleFilter = () => {
    setIsClicked(true)
  }
  useEffect(() => {
    setIsLoading(true)
    const instance = Axios.create({
      baseURL: "https://sihaclik.com/api/",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //TODO add sort and filter b wilaya w commune w name
    var url = livre ? "books" : "drugs"
    let base = name.length > 0 ? `public/donnation/${url}/${name}/${wilayaNumb}/all/0/10` : `public/donnation/${url}/${wilayaNumb}/all/0/10`
    instance
      .get(
        base
      )
      .then((res) => {
        if (!AZfilter) {
          props.get_drugs(res.data);
        }
        else {
          console.log({ hey: res.data.sort(dynamicSort("name")) })
        }
        if (isClicked) setIsClicked(false)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [DistanceFilter, isClicked, wilayaNumb, AZfilter]);
  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result = (a.matter_donnation[property] < b.matter_donnation[property]) ? -1 : (a.matter_donnation[property] > b.matter_donnation[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }
  return (
    <div className="blood_annonce medicament_annonce ">
      <SidebarDons
        isBlood={false}
        commune={commune}
        handleChange={handleChange}
        name={name}
        wilaya={wilaya}
        setIsClicked={setIsClicked}
        isClicked={isClicked}
        set_wilaya_numb={set_wilaya_numb}
      />
      <div className={isFrench ? "table_blood" : "table_blood right"}>
        <Input action={{ icon: "search" }} placeholder={filter.search} />
        <div className="blood_filter">
          <div className="_checkbox type_content blue">
            <Checkbox
              radio
              label={isFrench ? "A - Z Filter" : "تصفية من الألف إلى الياء"}
              className="this"
              checked={AZfilter}
              onClick={AZhandle}
            />
            <Checkbox
              radio
              label={isFrench ? "Par Distance" : "عن طريق المسافة"}
              checked={DistanceFilter}
              onClick={handleDistanceFilter}
            />
          </div>
        </div>

        <Accordion
          className={isFrench ? "accordion_dons " : "accordion_dons right"}
        >
          <Accordion.Title onClick={handleClick}>
            <div className="blood_filter_mobile">
              <div>
                <Filter />
                <p>{filter.btn}</p>
                <Arrow className={activeIndex ? "arrow active" : "arrow"} />
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex}>
            <Form>
              <Form.Input
                label={filter.nom}
                name="name"
                value={name}
                onChange={handleChange}
              />

              <Form.Input
                label={filter.wilaya}
                name="wilaya"
                value={wilaya}
                onChange={handleChange}
              />
              <Form.Input
                label={filter.commune}
                name="commune"
                value={commune}
                onChange={handleChange}
              />
              <Form.Button
                onClick={handleFilter}
                className={"filter_btn"}
              >
                {filter.action}
              </Form.Button>
            </Form>
          </Accordion.Content>
        </Accordion>
        <Segment style={{
          minHeight: "400px"
        }} loading={isLoading} className="grid_center">
          <Grid columns={4}>
            {props.data_drugs &&
              props.data_drugs.map((elm, index) => (
                <Grid.Column key={index}>
                  <CardDon activeItem="Médicament" data={elm} />
                </Grid.Column>
              ))}
          </Grid>
        </Segment>
        <Pagination isFrench={isFrench} />
      </div>
    </div>
  );
};

MedicamentAnnonce.propTypes = {
  data_drugs: PropTypes.array.isRequired,
  selectedLanguage: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data_drugs: state.drugs.data_drugs,
  selectedLanguage: state.language,
});
export default connect(mapStateToProps, { get_drugs })(
  withRouter(MedicamentAnnonce)
);
