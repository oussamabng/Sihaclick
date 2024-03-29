import React, { useEffect } from "react";

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
import { languages } from "../../languages.js";

const Livres = (props) => {
  const [visible, setVisible] = React.useState(false);
  const { nav } = props.selectedLanguage.medicament;
  const { isFrench } = props.selectedLanguage;

  const handleVisible = () => {
    setVisible((prevState) => !prevState);
  };
  //const { navs, dropdown } = props.selectedLanguage.header;
  const handleClick = () => {
    if (visible) {
      handleVisible();
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  return (
    <div onClick={handleClick}>
      <HeaderOnScroll
        header={false}
        visible={visible}
        handleVisible={handleVisible}
      />

      <NavigationMedicament selectedLanguage={props.selectedLanguage} />
      <HeroMedicament livre />
      <MedicamentAnnonce livre />
      <Footer />
    </div>
  );
};

Livres.prototype = {
  open: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.language,
    isOpen: state.auth.isOpen,
  };
};
export default connect(mapStateToProps, { selectLanguage, open })(
  withRouter(Livres)
);
