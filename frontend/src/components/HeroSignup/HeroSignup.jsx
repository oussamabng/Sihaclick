import React from "react";

//? import css
import "./HeroSignup.css";

import Background from "../../assets/signup.png";

const HeroSignup = () => {
  return (
    <div className="hero_doctor hero_annuaire hero_medicament hero_signup _best_doc">
      <div className="circle_left"></div>
      <div className="circle_btn"></div>
      <div className="contents">
        <div className="texts">
          <p>
            Inscription a <b>SIHACLIK</b>{" "}
            <div className="plus_title">
              <div className="up"></div>
              <div className="down"></div>
            </div>
          </p>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of{" "}
          </span>
        </div>

        <div
          className="hero_ann"
          style={{
            backgroundImage: `url('${Background}')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroSignup;
