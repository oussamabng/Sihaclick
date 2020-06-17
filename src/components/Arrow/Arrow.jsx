import React from "react";
import { ReactComponent as MyArrow } from "../../assets/arrow.svg";

//? import css
import "./Arrow.css";

export default function Arrow(props) {
  const { isRight, slider, onClick } = props;
  const next = () => {
    if (slider) {
      slider.slickNext();
    }
    if (onClick) {
      onClick()
    }
  };
  const previous = () => {
    if (slider) {
      slider.slickPrev();
    }
    if (onClick) {
      onClick()
    }
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
