import React, { useState, useEffect } from "react";
import CardProfileMedicament from "../CardProfileMedicament/CardProfileMedicament.jsx";
import Slider from "react-slick";

//? import Arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

//? import css
import "./ProfileMedicament.css";
import { Segment, Grid } from "semantic-ui-react"

import { connect } from "react-redux";
import PropTypes from "prop-types"
import Axios from "axios";

const ProfileMedicament = (props) => {
  const { user, token } = props;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    //console.log({ user })
    setIsLoading(true)
    let instence = Axios.create({
      baseURL: "https://sihaclik.com/api",
      responseType: "json",
      headers: {
        'content-type': "application/json",
        Authorization: `Bearer ${token}`,
      }
    });
    instence.get('/chaab/donnation/matter/equipments')
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err.response)
      })
  }, [])
  const [slider, setSlider] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
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
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 699,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  return (
    <>
      <div className="profile_rdv">
        <div className="title">
          <p>Médicament</p>
          <div className="line"></div>
        </div>
        <Segment loading={isLoading}>
          {data.length >= 4 && <Slider
            ref={(c) => setSlider(c)}
            {...settings}
            className="slider_profile"
          >
            {data.map((elm, index) =>
              <CardProfileMedicament medicament data={elm} key={index} />
            )}
          </Slider>}
          {data.length < 4 && data.length > 0 && <Grid stackable columns='equal'
            className="slider_profile"
          >
            {data.map((elm, index) =>
              <Grid.Column key={index}>
                <CardProfileMedicament medicament data={elm} />
              </Grid.Column>
            )}
          </Grid>}
        </Segment>
        {data.length >= 4 && <div className="arrows_profile">
          <Arrow isRight={false} slider={slider} onClick={previous} />
          <Arrow isRight slider={slider} onClick={next} />
        </div>}
      </div>

      <div className="profile_rdv">
        <div className="title">
          <p>Materiels</p>
          <div className="line"></div>
        </div>
        <Segment loading={isLoading}>
          {data.length >= 4 && <Slider
            ref={(c) => setSlider(c)}
            {...settings}
            className="slider_profile"
          >
            {data.map((elm, index) =>
              <CardProfileMedicament data={elm} key={index} />
            )}
          </Slider>}
          {data.length < 4 && data.length > 0 && <Grid stackable columns='equal'
            className="slider_profile"
          >
            {data.map((elm, index) =>
              <Grid.Column key={index}>
                <CardProfileMedicament data={elm} />
              </Grid.Column>
            )}
          </Grid>}
        </Segment>
        {data.length >= 4 && <div className="arrows_profile">
          <Arrow isRight={false} slider={slider} onClick={previous} />
          <Arrow isRight slider={slider} onClick={next} />
        </div>}
      </div>

    </>
  );
};


ProfileMedicament.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  isLogin: state.auth.isLogin,
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(ProfileMedicament);

