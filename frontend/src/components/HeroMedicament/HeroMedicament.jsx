import React from "react";

//? import css
import "./HeroMedicament.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { selectLanguage } from "../../actions/languageAction";
import { languages } from "../../languages";

const HeroMedicament = (props) => {
  const { isFrench } = props.selectedLanguage;
  const { hero } = props.selectedLanguage.medicament;
  return (
    <div className="hero_medicament">
      <div className="circle_left"></div>
      <div className="circle_btn"></div>
      <div className="overlay">
        {" "}
        <div className={isFrench ? "info" : "info right"}>
          <h1>{hero.h1}</h1>
          <p>{hero.p}</p>
        </div>
      </div>
    </div>
  );
};

HeroMedicament.prototype = {
  selectedLanguage: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.language,
  };
};
export default connect(mapStateToProps, { selectLanguage })(
  withRouter(HeroMedicament)
);
