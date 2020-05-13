import React, { useState } from "react";
import { Container, Button } from "semantic-ui-react";
import Slider from "react-slick";

//? import css
import "./News.css";

//? import card
import NewCard from "../../components/NewCard/NewCard.jsx";

//? import arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

export default function News() {
  const [slider, setSlider] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 8000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="_best_doc _news">
      <Container>
        <div className="info">
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>
              Suivez les dernières <br />
              actualité de domaine médicale
            </p>
            <div className="plus_title">
              <div className="up"></div>
              <div className="down"></div>
            </div>
          </div>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </h3>
        </div>
      </Container>
      <div className="slider_news">
        <div className="arrows">
          <Arrow isRight={false} slider={slider} />
          <Arrow isRight slider={slider} />
        </div>
        <div className="blur_field right"></div>
        <div className="blur_field left"></div>
        <Slider ref={(c) => setSlider(c)} {...settings}>
          <div className="slider_doc">
            <NewCard />
          </div>
          <div className="slider_doc">
            <NewCard />
          </div>
          <div className="slider_doc">
            <NewCard />
          </div>
          <div className="slider_doc">
            <NewCard />
          </div>
          <div className="slider_doc">
            <NewCard />
          </div>
          <div className="slider_doc">
            <NewCard />
          </div>
        </Slider>
        <div className="under_new_slider">
          <Button
            content="Voir tous"
            icon="plus"
            labelPosition="left"
            className="news_btn"
          />
          <a href="/">
            Vous êtes PDS et vous souhaitez contribuer avec des articles ?{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
