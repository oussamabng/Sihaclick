import React from "react";
import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import HeroStage from "../../components/HeroStage/HeroStage.jsx";
import StageSimpleForm from "../../components/StageSimpleForm/StageSimpleForm.jsx";
import StageFixedForm from "../../components/StageFixedForm/StageFixedForm.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Stage = () => {
  return (
    <>
      <HeaderOnScroll header={false} isLogin={false} />
      <Navigation notLine={false} active="stage" />
      <HeroStage />
      <StageSimpleForm />
      <StageFixedForm />
      <Footer />
    </>
  );
};

export default Stage;
