import React, { useState } from "react";
import Slider from "react-slick";
import BloodCard from "../BloodCard/BloodCard.jsx";
//? import Arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

const ProfileBlood = () => {
  const [slider, setSlider] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  return (
    <div className="profile_rdv">
      <div className="title">
        <p>Dons de Sang</p>
        <div className="line"></div>
      </div>
      <div
        style={{
          minHeight: "200px",
        }}
      >
        <Slider
          ref={(c) => setSlider(c)}
          {...settings}
          className="slider_profile bld"
        >
          <BloodCard />
          <BloodCard />
          <BloodCard />
          <BloodCard />
          <BloodCard />
        </Slider>
      </div>
      <div className="arrows_profile">
        <Arrow isRight={false} slider={slider} onClick={previous} />
        <Arrow isRight slider={slider} onClick={next} />
      </div>
    </div>
  );
};

export default ProfileBlood;
