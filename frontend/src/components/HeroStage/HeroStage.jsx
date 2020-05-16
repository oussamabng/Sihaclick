import React from "react";
import { Dropdown } from "semantic-ui-react";

//? import css
import "./HeroStage.css";

import Background from "../../assets/stage_user.png";
import { ReactComponent as Arrow } from "../../assets/arrow_big.svg";
const trigger = (
  <span className="dropdown_title">
    <p>.</p>
    Status <Arrow />
  </span>
);
const HeroStage = () => {
  const options = [
    { key: 0, text: "étudiant" },
    { key: 1, text: "diplomé" },
    { key: 2, text: "résident" },
  ];
  return (
    <div className="hero_medicament hero_stage hero_annuaire">
      <div className="circle_left"></div>
      <div className="circle_btn"></div>
      <div className="overlay">
        {" "}
        <div className="contents">
          <div className="plus_title ">
            <div className="up"></div>
            <div className="down"></div>
          </div>
          <div className="texts">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to
            </p>
            <Dropdown
              trigger={trigger}
              options={options}
              className="dropdown_stage"
            />
          </div>
          <div
            className="hero_ann"
            style={{
              backgroundImage: `url('${Background}')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroStage;
