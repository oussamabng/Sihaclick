import React, { useState } from "react";
import Slider from "react-slick";

//? import css
import "./Event.css";
import { Container, Button } from "semantic-ui-react";

//? import Arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

import CardEvent from "../../components/CardEvent/CardEvent.jsx";

const Event = () => {
  const [slider, setSlider] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0px",
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const next = () => {
    if (slider) {
      slider.slickNext();
    }
  };
  const previous = () => {
    if (slider) {
      slider.slickPrev();
    }
  };
  return (
    <div className="_best_doc _event">
      <div className="circle_right"></div>
      <Container>
        <div className="info">
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>
              Ne manquer
              <br />
              aucun evenement
            </p>
          </div>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </h3>
        </div>
        <div className="arr-flex">
          <Arrow isRight={false} slider={slider} />
          <Arrow isRight slider={slider} />
        </div>
        <Slider ref={(c) => setSlider(c)} {...settings}>
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
        </Slider>
        <div
          style={{
            marginLeft: "auto",
            margin: "1rem auto",
            marginRight: "0",
          }}
          className="arrows_mobile"
        >
          <div className="arrows">
            <Arrow isRight={false} slider={slider} onClick={previous} />
            <Arrow isRight slider={slider} onClick={next} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            content="afficher plus"
            icon="plus"
            labelPosition="left"
            className="blood_btn"
          />
        </div>
      </Container>
    </div>
  );
};

export default Event;
