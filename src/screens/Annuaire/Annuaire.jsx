import React from "react";

//? import css
import "./Annuaire.css";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HeroAnnuaire from "../../components/HeroAnnuaire/HeroAnnuaire.jsx";
import AnnuaireAnnonce from "../../components/AnnuaireAnnonce/AnnuaireAnnonce.jsx";

const Annuaire = () => {
  const [visible, setVisible] = React.useState(false);
  const handleVisible = () => {
    setVisible((prevState) => !prevState);
  };
  return (
    <>
      <HeaderOnScroll header={false} handleVisible={handleVisible} />

      <Navigation notLine={false} active="annuaire" />
      <HeroAnnuaire />
      <AnnuaireAnnonce isFrench={true} />
      <Footer />
    </>
  );
};

export default Annuaire;
