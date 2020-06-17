import React, { useState } from "react";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import HeroBlood from "../../components/HeroBlood/HeroBlood.jsx";
import BloodAnnonce from "../../components/BloodAnnonce/BloodAnnonce.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Blood = () => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible((prevState) => !prevState);
  };
  return (
    <>
      <HeaderOnScroll handleVisible={handleVisible} header={false} />

      <Navigation />
      <HeroBlood />
      <BloodAnnonce />
      <Footer isBlood />
    </>
  );
};

export default Blood;
