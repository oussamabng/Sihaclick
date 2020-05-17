import React, { useState } from "react";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import HeroStage from "../../components/HeroStage/HeroStage.jsx";
import StageSimpleForm from "../../components/StageSimpleForm/StageSimpleForm.jsx";
import StageFixedForm from "../../components/StageFixedForm/StageFixedForm.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Stage = () => {
  //* handling the type of  stager
  const [type, setType] = useState("Status");
  const handleType = (e, { value }) => {
    setType(value);
  };
  //* if the first form is confirmed or nah
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirmation = () => {
    setIsConfirmed((prevState) => !prevState);
  };
  return (
    <>
      <HeaderOnScroll header={false} isLogin={false} />
      <Navigation notLine={false} active="stage" />
      <HeroStage type={type} handleType={handleType} />
      <StageSimpleForm
        type={type}
        isConfirmed={isConfirmed}
        handleConfirmation={handleConfirmation}
      />
      <StageFixedForm isConfirmed={isConfirmed} />
      <Footer />
    </>
  );
};

export default Stage;
