import React from "react";
import {} from "semantic-ui-react";

//? import css
import "./HeroBlood.css";

import { ReactComponent as BloodImg } from "../../assets/blood_img.svg";

const HeroBlood = () => {
  return (
    <div className="hero_blood">
      <div className="circle_left"></div>
      <div className="circle_btn"></div>
      <div className="content_hero_blood _best_doc">
        <div className="info">
          <h1>Sauvé des vies.... Donné de sang</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
          </p>
          <div className="plus_title again">
            <div className="up"></div>
            <div className="down"></div>
          </div>
        </div>
        <BloodImg />
        <div className="plus_title nrml">
          <div className="up"></div>
          <div className="down"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlood;
