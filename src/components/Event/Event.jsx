import React, { useState } from "react";
import Slider from "react-slick";

//? import css
import "./Event.css";
import { Container, Button, Segment, Grid } from "semantic-ui-react";

//? import Arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

import CardEvent from "../../components/CardEvent/CardEvent.jsx";
import { useEffect } from "react";
import Axios from "axios";

const Event = () => {
  const [slider, setSlider] = useState(null);
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
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
  useEffect(() => {
    setIsLoading(true)
    let instence = Axios.create({
      baseURL: "https://sihaclik.com/api",
      responseType: "json",
      headers: {
        "content-type": "application/json"
      }
    })
    instence.get("/public/news/all/all/0/10")
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
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
        {data.length >= 3 && <div className="arr-flex">
          <Arrow isRight={false} slider={slider} />
          <Arrow isRight slider={slider} />
        </div>}
        <Segment style={{
          minHeight: "450px",
          padding: "0"
        }} loading={isLoading}>
          {data.length >= 3 &&
            <Slider ref={(c) => setSlider(c)} {...settings}>
              {data.map((elm, index) =>
                <CardEvent key={index} data={elm} />
              )}
            </Slider>
          }
          {data.length < 3 && data.length > 0 &&
            <Grid stackable columns='equal' style={{
              display: "flex",
              justifyContent: "center",
            }} >
              <Grid.Column style={{
                maxWidth: "330px"
              }}>
                {data.map((elm, index) =>
                  <CardEvent key={index} data={elm} />
                )}
              </Grid.Column>
            </Grid>
          }
        </Segment>
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
