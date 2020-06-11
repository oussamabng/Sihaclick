import React, { useState } from "react";

import "./CalenderMobile.css";
import Slider from "react-slick";

import { ReactComponent as Arrow } from "../../assets/arrow.svg";

import { connect } from "react-redux";
import PropTypes from "prop-types";

const CalenderMobile = (props) => {
  const { data } = props;
  const [slider, setSlider] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [isFirst, setISFirst] = useState(false);
  const [current, setCurrent] = useState(0);
  const handleArrowClick = () => {
    if (isFirst) {
      next();
    } else {
      previous();
    }
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  console.log({ data });
  const settings = {
    dots: false,
    draggable: false,
    swipeToSlide: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    afterChange: (current) => setCurrent(current),
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  const next = () => {
    if (slider) {
      slider.slickNext();
      return setISFirst(false);
    }
  };
  const previous = () => {
    if (slider) {
      slider.slickPrev();
      return setISFirst(true);
    }
  };
  return (
    <>
      {data.pds && (
        <div className="all_calender">
          <div className="top_calender">
            <div
              className={isFirst ? "arrow" : "arrow end"}
              onClick={handleArrowClick}
            >
              <Arrow />
            </div>
            <div className="flexit">
              <div className="lis">
                <div className="arrow_">
                  <Arrow />
                </div>
              </div>
              <div className="time_work">
                <Slider ref={(c) => setSlider(c)} {...settings}>
                  <p>8.00</p>
                  <p>9.00</p>
                  <p>10.00</p>
                  <p>11.00</p>
                  <p>12.00</p>
                  <p>13.00</p>
                  <p>14.0</p>
                  <p>15.00</p>
                  <p>16.00</p>
                  <p>17.00</p>
                  <p>18.00</p>
                  <p>19.00</p>
                </Slider>
              </div>
            </div>
          </div>
          <div className="row_calender">
            <div className="leysth">
              <div className="days_calender">
                <Slider ref={(c) => setSlider2(c)} {...settings2}>
                  {data.pds.work_time.map((elm, index) => (
                    <div className="item" key={index}>
                      <p>8</p>
                      <p>{elm.day.name.slice(0, 3)}</p>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="lis">
                <div className="arrow_">
                  <Arrow />
                </div>
              </div>
            </div>
            <table className="xxs">
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="active"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
        </div>
      )}
    </>
  );
};

CalenderMobile.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  set_doc: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  isLogin: state.auth.isLogin,
  data: state.doc.data,
});
export default connect(mapStateToProps, {})(CalenderMobile);
