import React, { useState, useEffect } from "react";
import Slider from "react-slick";

//? import card
import DoctorCard from "../DoctorCard/DoctorCard.jsx";

//? import Arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

//? import css
import "./BestDoctors.css";
import { Container, Grid, Segment } from "semantic-ui-react";
import Pub from "../../assets/pub.png";
import Axios from "axios";

export default function BestDoctors() {
  const [slider, setSlider] = useState(null);
  const [data, setData] = useState([])
  const [type, setType] = useState([])
  const [isLoading, setIsLoading] = useState(false)
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
    let instance = Axios.create({
      baseURL: "https://sihaclik.com/api",
      responseType: "json",
      headers: {
        "Content-Type": "application/json"
      }
    });
    setIsLoading(true)
    instance.get("/public/pds/all/all/all/all/0/10")
      .then(res => {
        let data = res.data;
        res.data.map(pds => {
          let type_id = pds.pds.pds_type_id
          let instence2 = Axios.create({
            baseURL: "https://sihaclik.com/api",
            responseType: "json",
            headers: {
              "Content-Type": "application/json"
            }
          })
          instence2.get("/public/pds/types")
            .then(res => {
              res.data.map(elm => {
                if (elm.id === type_id) {
                  setType(prevState => [...prevState, elm.name]);
                }
              })
            })
        })
        setData(data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })


  }, [])
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
          {data.length >= 4 && <div
            style={{
              marginLeft: "auto",
              display: "flex",
            }}
            className="arz"
          >
            <div className="arrows">
              <Arrow isRight={false} slider={slider} onClick={previous} />
              <Arrow isRight slider={slider} onClick={next} />
            </div>
          </div>}
          <Segment style={{
            minHeight: "500px"
          }} loading={isLoading}>
            {data.length >= 4 && <Slider ref={(c) => setSlider(c)} {...settings}>
              {data.map((doctor, index) =>
                <div key={index} className="slider_doc">
                  <DoctorCard fullname={doctor.name + " " + doctor.lastname} id={doctor.id} type={type} photo={doctor.photo.path} />
                </div>
              )}
            </Slider>}
            {data.length < 4 && data.length > 0 && <Grid columns='equal' style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "2rem"
            }} stackable>
              {data.map((doctor, index) =>
                <Grid.Column>
                  <div key={index} className="slider_doc">
                    <DoctorCard fullname={doctor.name + " " + doctor.lastname} id={doctor.id} type={type} photo={doctor.photo.path} />
                  </div>
                </Grid.Column>
              )}
            </Grid>}

          </Segment>
          <div
            style={{
              marginLeft: "auto",
            }}
            className="arrows_mobile"
          >
            <div className="arrows">
              <Arrow isRight={false} slider={slider} onClick={previous} />
              <Arrow isRight slider={slider} onClick={next} />
            </div>
          </div>
        </div>
        <div className="shape_slider"></div>
      </Container>
    </div>
  );
}
