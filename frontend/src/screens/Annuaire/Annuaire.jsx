import React from "react";

//? import css
import "./Annuaire.css";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HeroAnnuaire from "../../components/HeroAnnuaire/HeroAnnuaire.jsx";
import AnnuaireAnnonce from "../../components/AnnuaireAnnonce/AnnuaireAnnonce.jsx";
const Annuaire = () => {
  return (
    <>
      <HeaderOnScroll header={false} isLogin={false} />
      <Navigation notLine={false} active="annuaire" />
      <HeroAnnuaire />
      <AnnuaireAnnonce />
      <Footer />
    </>
  );
};

export default Annuaire;
