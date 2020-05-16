import React, { useState } from "react";
import Slider from "react-slick";

//? import card
import DoctorCard from "../DoctorCard/DoctorCard.jsx";

//? import Arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

//? import css
import "./BestDoctors.css";
import { Container } from "semantic-ui-react";
import Pub from "../../assets/pub.png";

export default function BestDoctors() {
  const [slider, setSlider] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
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
    <div className="_best_doc">
      <div className="cercle_right"></div>
      <div className="cercle_left"></div>
      <Container>
        <div className="info">
          <div
            className="pub_img"
            style={{
              backgroundImage: `url(${Pub})`,
            }}
          ></div>
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>
              Choisir entre nos <br />
              meilleur médecins
            </p>
            <div className="plus_title">
              <div className="up"></div>
              <div className="down"></div>
            </div>
          </div>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </h3>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
            }}
          >
            <div className="arrows">
              <Arrow isRight={false} slider={slider} onClick={previous} />
              <Arrow isRight slider={slider} onClick={next} />
            </div>
          </div>
          <Slider ref={(c) => setSlider(c)} {...settings}>
            <div className="slider_doc">
              <DoctorCard />
            </div>
            <div className="slider_doc">
              <DoctorCard />
            </div>
            <div className="slider_doc">
              <DoctorCard />
            </div>
            <div className="slider_doc">
              <DoctorCard />
            </div>
            <div className="slider_doc">
              <DoctorCard />
            </div>
          </Slider>
        </div>
        <div className="shape_slider"></div>
      </Container>
    </div>
  );
}
