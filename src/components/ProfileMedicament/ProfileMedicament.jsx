import React, { useState, useEffect } from "react";
import CardProfileMedicament from "../CardProfileMedicament/CardProfileMedicament.jsx";
import Slider from "react-slick";

//? import Arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

//? import css
import "./ProfileMedicament.css";

import { connect } from "react-redux";
import PropTypes from "prop-types"

const ProfileMedicament = (props) => {
  const { user } = props;
  useEffect(() => {
    console.log({ user })
  }, [])
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
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 699,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        <p>Médicament et materiel</p>
        <div className="line"></div>
      </div>
      <Slider
        ref={(c) => setSlider(c)}
        {...settings}
        className="slider_profile"
      >
        <CardProfileMedicament />
        <CardProfileMedicament />
        <CardProfileMedicament />
        <CardProfileMedicament />
        <CardProfileMedicament />
      </Slider>
      <div className="arrows_profile">
        <Arrow isRight={false} slider={slider} onClick={previous} />
        <Arrow isRight slider={slider} onClick={next} />
      </div>
    </div>
  );
};


ProfileMedicament.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  isLogin: state.auth.isLogin,
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(ProfileMedicament);

