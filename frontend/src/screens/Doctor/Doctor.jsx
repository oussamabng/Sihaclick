import React from "react";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HeroDoctor from "../../components/HeroDoctor/HeroDoctor.jsx";
import InterfaceDoctor from "../../components/InterfaceDoctor/InterfaceDoctor.jsx";

const Doctor = () => {
  return (
    <>
      <HeaderOnScroll header={false} isLogin={false} />
      <Navigation notLine />
      <HeroDoctor />
      <InterfaceDoctor />
      <Footer />
    </>
  );
};

export default Doctor;
