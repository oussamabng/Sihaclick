import React from "react";


import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import HeroBlood from "../../components/HeroBlood/HeroBlood.jsx";
import BloodAnnonce from "../../components/BloodAnnonce/BloodAnnonce.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Blood = () => {
  return (
    <>
      <HeaderOnScroll header={false} />
      <Navigation />
      <HeroBlood />
      <BloodAnnonce />
      <Footer isBlood />
    </>
  );
};

export default Blood;
