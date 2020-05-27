import React, { useEffect, useState } from "react";
import { Grid, Checkbox, Button, Icon } from "semantic-ui-react";
import axios from "axios";

//? import css
import "./BloodAnnonce.css";

//? import components
import SidebarDons from "../../components/SidebarDons/SidebarDons.jsx";
import BloodCard from "../../components/BloodCard/BloodCard.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

//? redux settings
import { get_blood } from "../../actions/bloodActions.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const BloodAnnonce = (props) => {
  const [typeBlood, setTypeBlood] = useState("A");
  const [isPositive, setIsPositive] = useState(false);
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const handleType = (e, { value }) => {
    setTypeBlood(value);
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
    let url = "https://sihaclik.com/api/public/donnation/blood/all/all/0/10";
    axios
      .create({
        headers: {
          get: {
            "Content-Type": "application/json",
          },
        },
      })
      .request({
        url,
        method: "get",
      })
      .then((res) => {
        props.get_blood(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <div className="blood_annonce ">
      <SidebarDons
        commune={commune}
        wilaya={wilaya}
        handleChange={handleChange}
        isBlood
        handlePositive={handlePositive}
        handleType={handleType}
        isPositive={isPositive}
        typeBlood={typeBlood}
      />
      <div className="table_blood">
        <div className="blood_filter">
          <div className="_checkbox type_content">
            <Checkbox radio label="A - Z Filter" />
            <Checkbox radio label="Par Distance" />
          </div>
          <Button>
            <Icon name="plus" color="white" />
            Ajouter annonce
          </Button>
        </div>
        <div className="grid_center">
          <Grid columns={3}>
            {props.data_blood.map((elm) => (
              <Grid.Column>
                <BloodCard data={elm} />
              </Grid.Column>
            ))}
          </Grid>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

BloodAnnonce.propTypes = {
  data_blood: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  data_blood: state.blood.data_blood,
});

export default connect(mapStateToProps, { get_blood })(
  withRouter(BloodAnnonce)
);
