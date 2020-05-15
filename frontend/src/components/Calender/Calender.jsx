import React from "react";
import { Table } from "semantic-ui-react";
import Slider from "react-slick";

//? import arrow
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

//? import css
import "./Calender.css";

const Calender = () => {
  const settings = {
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
  return (
    <div className="_calender_all">
      <div className="slider_calender">
        <div className="arrow_top top">
          <Arrow />
        </div>
        <div className="arrow_top bottom">
          <Arrow />
        </div>
        <Slider {...settings}>
          <div className="day_item">
            <p>8</p>
            <p>Sam</p>
          </div>
          <div className="day_item">
            <p>8</p>
            <p>Sam</p>
          </div>
          <div className="day_item">
            <p>8</p>
            <p>Sam</p>
          </div>
          <div className="day_item">
            <p>8</p>
            <p>Sam</p>
          </div>
          <div className="day_item">
            <p>8</p>
            <p>Sam</p>
          </div>
          <div className="day_item">
            <p>8</p>
            <p>Sam</p>
          </div>
          <div className="day_item">
            <p>8</p>
            <p>Sam</p>
          </div>
          <div className="day_item">
            <p>9</p>
            <p>Sam</p>
          </div>
          <div className="day_item">
            <p>9</p>
            <p>Sam</p>
          </div>
          <div className="day_item">
            <p>9</p>
            <p>Sam</p>
          </div>
          <div className="day_item">
            <p>9</p>
            <p>Sam</p>
          </div>
          <div className="day_item">
            <p>9</p>
            <p>Sam</p>
          </div>
          <div className="day_item">
            <p>9</p>
            <p>Sam</p>
          </div>
          <div className="day_item">
            <p>9</p>
            <p>Sam</p>
          </div>
        </Slider>
      </div>
      <div className="_calender">
        <div className="header">
          <p>8.00</p>
          <p>9.00</p>
          <p>10.00</p>
          <p>11.00</p>
          <p>12.00</p>
          <p>13.00</p>
          <p>14.00</p>
          <p>15.00</p>
          <p>16.00</p>
          <p>17.00</p>
          <p>18.00</p>
          <p>19.00</p>
        </div>
        <Table celled collapsing>
          <Table.Body>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell className="here"></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell className="here"></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Calender;
