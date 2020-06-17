import React, { useEffect, useState } from "react";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import NavigationMedicament from "../../components/NavigationMedicament/NavigationMedicament.jsx";
import HeroMedicament from "../../components/HeroMedicament/HeroMedicament.jsx";
import MedicamentAnnonce from "../../components/MedicamentAnnonce/MedicamentAnnonce.jsx";
import Footer from "../../components/Footer/Footer.jsx";

//? redux stuff
import { selectLanguage } from "../../actions/languageAction";
import { open } from "../../actions/authActions.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const Medicament = (props) => {
  //const { nav } = props.selectedLanguage.medicament;
  //const { isFrench } = props.selectedLanguage;
  //const { navs, dropdown } = props.selectedLanguage.header;
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  const handleVisible = () => {
    setVisible((prevState) => !prevState);
  };
  const handleClick = () => {
    if (visible) {
      handleVisible();
    }
  };
  return (
    <div onClick={handleClick}>
      <HeaderOnScroll
        header={false}
        visible={visible}
        handleVisible={handleVisible}
      />
      <NavigationMedicament selectedLanguage={props.selectedLanguage} />
      <HeroMedicament />
      <MedicamentAnnonce />
      <Footer />
    </div>
  );
};

Medicament.prototype = {
  open: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.language,
    isOpen: state.auth.isOpen,
  };
};
export default connect(mapStateToProps, { selectLanguage, open })(
  withRouter(Medicament)
);
