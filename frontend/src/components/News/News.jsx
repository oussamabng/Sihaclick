import React, { useState, useEffect } from "react";
import { Container, Button } from "semantic-ui-react";
import Slider from "react-slick";
import axios from "axios";

//? import css
import "./News.css";

//? import card
import NewCard from "../../components/NewCard/NewCard.jsx";

//? import arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

export default function News() {
  const [slider, setSlider] = useState(null);
  const [data, setData] = useState([]);
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
  useEffect(() => {
    let url = "https://sihaclik.com/api/public/news/all/all/0/12";
    axios
      .create({
        headers: {
          get: {
            "Content-Type": "application/json",
          },
        },
      })
      .request({
        url,
        method: "get",
      })
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
    return () => {
      setData([]);
    };
  }, []);
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
        {data.length > 4 && (
          <div className="arrows">
            <Arrow isRight={false} slider={slider} />
            <Arrow isRight slider={slider} />
          </div>
        )}
        <div className="blur_field right"></div>
        <div className="blur_field left"></div>
        {data.length > 4 ? (
          <Slider ref={(c) => setSlider(c)} {...settings}>
            {data.map((elm) => (
              <div className="slider_doc">
                <NewCard data={elm} />
              </div>
            ))}
          </Slider>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            {data.map((elm) => (
              <div className="slider_doc">
                <NewCard data={elm} />
              </div>
            ))}
          </div>
        )}
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
