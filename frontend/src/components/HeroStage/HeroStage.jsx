import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";

//? import css
import "./HeroStage.css";

import Background from "../../assets/stage_user.png";
import { ReactComponent as Arrow } from "../../assets/arrow_big.svg";

const HeroStage = (props) => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("Status");
  useEffect(() => {
    let tempArr = [];
    setType(props.type);
    props.data.map((elm) => {
      tempArr.push({ key: elm.id, text: elm.name, value: elm.name });
    });
    setData(tempArr);
  }, [props.type, props.data]);
  const trigger = (
    <span className="dropdown_title">
      <p>.</p>
      {type} <Arrow />
    </span>
  );
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
              options={data}
              className="dropdown_stage"
              onChange={props.handleType}
              value={type}
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
