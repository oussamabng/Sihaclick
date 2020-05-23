import React, { useState, useEffect } from "react";
import axios from "axios";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import HeroStage from "../../components/HeroStage/HeroStage.jsx";
import StageSimpleForm from "../../components/StageSimpleForm/StageSimpleForm.jsx";
import StageFixedForm from "../../components/StageFixedForm/StageFixedForm.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Stage = () => {
  //* handling the type of  stager
  const [type, setType] = useState("Status");
  const [data, setData] = useState([]);
  const handleType = (e, { value }) => {
    setType(value);
    console.log(value);
  };
  //* if the first form is confirmed or nah
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirmation = () => {
    setIsConfirmed((prevState) => !prevState);
  };
  useEffect(() => {
    let url = "https://sihaclik.com/api/public/intern_types";
    axios
      .create({
        headers: {
          get: {
            "Content-Type": "application/json",
          },
        },
      })
      .request({
        url,
        method: "get",
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log({ err: err.response });
      });
  }, []);
  return (
    <>
      <HeaderOnScroll header={false} isLogin={false} />
      <Navigation notLine={false} active="stage" />
      <HeroStage type={type} handleType={handleType} data={data} />
      <StageSimpleForm
        data={data}
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
