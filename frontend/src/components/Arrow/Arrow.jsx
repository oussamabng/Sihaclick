import React from "react";
import { ReactComponent as MyArrow } from "../../assets/arrow.svg";

//? import css
import "./Arrow.css";

export default function Arrow(props) {
  const { isRight, slider } = props;
  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  return (
    <div
      className={!isRight ? "_arrow right" : "_arrow left"}
      onClick={!isRight ? next : previous}
    >
      <MyArrow
        style={{
          transform: !isRight ? "rotate(90deg)" : "rotate(-90deg)",
        }}
      />
    </div>
  );
}
