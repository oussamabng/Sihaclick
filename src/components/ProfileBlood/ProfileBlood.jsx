import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import BloodCard from "../BloodCard/BloodCard.jsx";
//? import Arrow
import Arrow from "../../components/Arrow/Arrow.jsx";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Segment, Grid } from "semantic-ui-react";
import Axios from "axios";

const ProfileBlood = (props) => {
  const [slider, setSlider] = useState(null);
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
    instence.get('chaab/donnation/blood')
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err.response)
      })
  }, [])
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
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
          slidesToShow: 2,
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
    if (slider) slider.slickNext();
  };
  const previous = () => {
    if (slider) slider.slickPrev();
  };
  return (
    <div className="profile_rdv">
      <div className="title">
        <p>Dons de Sang</p>
        <div className="line"></div>
      </div>
      <Segment loading={isLoading}>
        {
          data.length >= 3 &&
          <Slider
            ref={(c) => setSlider(c)}
            {...settings}
            className="slider_profile bld"
          >
            {data.map((elm, index) =>
              <div key={index}>
                <BloodCard data={elm} profile />
              </div>
            )}
          </Slider>
        }
        {
          data.length < 3 && data.length > 0 &&
          <Grid stackable columns='equal' className="slider_profile bld"
          >
            {data.map((elm, index) =>
              <Grid.Column key={index}>
                <BloodCard data={elm} profile />
              </Grid.Column>
            )}
          </Grid>
        }
      </Segment>
      <div className="arrows_profile">
        <Arrow isRight={false} slider={slider} onClick={previous} />
        <Arrow isRight slider={slider} onClick={next} />
      </div>
    </div>
  );
};
ProfileBlood.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  isLogin: state.auth.isLogin,
  user: state.auth.user,
});
export default connect(mapStateToProps, {})(withRouter(ProfileBlood));
