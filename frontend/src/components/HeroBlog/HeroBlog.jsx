import React, { useState } from "react";
import {} from "semantic-ui-react";
import Slider from "react-slick";

//? import css
import "./HeroBlog.css";

//? import Arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

import Img from "../../assets/new.jpg";

const HeroBlog = () => {
  const [slider, setSlider] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
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
    <>
      <Slider
        ref={(c) => setSlider(c)}
        {...settings}
        className="slider_blog _best_doc"
      >
        <div className="_hero_blog">
          <div
            className="card_hero_blog"
            style={{
              backgroundImage: `url('${Img}')`,
            }}
          >
            <div className="info_card_blog">
              <h1>Le Covid y as t-il une solution</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining
              </p>
            </div>
          </div>
        </div>
        <div className="_hero_blog">
          <div
            className="card_hero_blog"
            style={{
              backgroundImage: `url('${Img}')`,
            }}
          >
            <div className="info_card_blog">
              <h1>Le Covid y as t-il une solution</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining
              </p>
            </div>
          </div>
        </div>
      </Slider>
      <div className="arrows_hy">
        <Arrow isRight={false} slider={slider} onClick={previous} />
        <Arrow isRight slider={slider} onClick={next} />
      </div>
    </>
  );
};

export default HeroBlog;
