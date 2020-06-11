import React from "react";
import { Button, Image } from "semantic-ui-react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { selectLanguage } from "../../actions/languageAction";

//? import css
import "./HomeHeroSection.css";

import Test from "../../assets/hero_section.png";

const HomeHeroSection = (props) => {
  const { setSlider } = props;
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  const { hero_section } = props.selectedLanguage.home;
  return (
    <div className="_hero_section">
      <Slider
        ref={(c) => setSlider(c)}
        {...settings}
        style={{
          height: "100%",
        }}
      >
        {" "}
        <div
          className={
            props.selectedLanguage.isFrench ? "my_hero" : "my_hero arabe"
          }
        >
          {" "}
          <div
            className={props.selectedLanguage.isFrench ? "info" : "info _rtl"}
          >
            <h1>
              <b>{hero_section.b[0]}</b>
              {hero_section.h1[0]}
              <br />
              {hero_section.h1[1]} <b>{hero_section.b[1]}</b>
            </h1>
            <p>{hero_section.p}</p>
            <Button
              className="hero_btn"
              content={hero_section.btn}
              icon="right arrow"
              labelPosition="right"
            />
          </div>
          <Image
            src={Test}
            className={
              props.selectedLanguage.isFrench ? "hero_img" : "hero_img arabe"
            }
          />
        </div>
      </Slider>
      <div className="mobile_info">
        <div
          className={
            props.selectedLanguage.isFrench ? "info mobile" : "info _rtl mobile"
          }
        >
          <h1>
            <b>{hero_section.b[0]}</b>
            {hero_section.h1[0]}
            <br />
            {hero_section.h1[1]} <b>{hero_section.b[1]}</b>
          </h1>
          <p>{hero_section.p}</p>
          <Button
            className="hero_btn"
            content={hero_section.btn}
            icon="right arrow"
            labelPosition="right"
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.language,
  };
};
export default connect(mapStateToProps, { selectLanguage })(HomeHeroSection);
