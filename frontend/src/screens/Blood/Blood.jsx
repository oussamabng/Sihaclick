import React from "react";

//? import css
import "./Blood.css";
import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import HeroBlood from "../../components/HeroBlood/HeroBlood.jsx";
import SidebarDons from "../../components/SidebarDons/SidebarDons.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Blood = () => {
  return (
    <>
      <HeaderOnScroll header={false} isLogin={false} />
      <Navigation />
      <HeroBlood />
      <SidebarDons />
      <Footer isBlood />
    </>
  );
};

export default Blood;
