import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import Slider from "react-slick";

//? import css
import "./Stage.css";
//? import Arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

import CardStage from "../../components/CardStage/CardStage.jsx";

const Stage = () => {
  const [slider, setSlider] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 8000,
    rows: 2,
  };
  return (
    <div className="_best_doc _event _stage">
      <div className="circle_right"></div>
      <Container>
        <div className="info">
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>
              Etes vous à la
              <br />
              recherche d’un stage
            </p>
          </div>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </h3>
        </div>
        <Slider ref={(c) => setSlider(c)} {...settings}>
          <CardStage />
          <CardStage />
          <CardStage />
          <CardStage />
          <CardStage />
          <CardStage />
          <CardStage />
          <CardStage />
          <CardStage />
          <CardStage />
          <CardStage />
          <CardStage />
        </Slider>
        <div className="arrow_stage">
          <Arrow isRight={false} slider={slider} />
          <Arrow isRight slider={slider} />
        </div>
      </Container>
    </div>
  );
};

export default Stage;
