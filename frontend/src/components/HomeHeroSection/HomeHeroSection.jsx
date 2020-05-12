import React from "react";
import { Button, Image } from "semantic-ui-react";
import Slider from "react-slick";

//? import css
import "./HomeHeroSection.css";

import Test from "../../assets/hero_section.png";
export default function HomeHeroSection(props) {
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
        <div className="my_hero">
          {" "}
          <div className="info">
            <h1>
              <b>Prenez </b>
              votre Rendez
              <br />
              -vous En ligne <b>Maintenant</b>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <Button
              className="hero_btn"
              content="Prendre un Rendez-vous"
              icon="right arrow"
              labelPosition="right"
            />
          </div>
          <Image src={Test} className="hero_img" />
        </div>
        <div className="my_hero">
          <div className="info">
            <h1>
              <b>Prenez </b>
              votre Rendez
              <br />
              -vous En ligne <b>Maintenant</b>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <Button
              className="hero_btn"
              content="Prendre un Rendez-vous"
              icon="right arrow"
              labelPosition="right"
            />
          </div>
          <Image src={Test} className="hero_img" />
        </div>
        <div className="my_hero">
          <div className="info">
            <h1>
              <b>Prenez </b>
              votre Rendez
              <br />
              -vous En ligne <b>Maintenant</b>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <Button
              className="hero_btn"
              content="Prendre un Rendez-vous"
              icon="right arrow"
              labelPosition="right"
            />
          </div>
          <Image src={Test} className="hero_img" />
        </div>
      </Slider>
    </div>
  );
}
