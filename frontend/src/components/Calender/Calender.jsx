import React from "react";
import { Table } from "semantic-ui-react";
import Slider from "react-slick";

//? import arrow
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

import {connect} from "react-redux";
import PropTypes from "prop-types"
import {set_doc} from "../../actions/doctorAction";

//? import css
import "./Calender.css";

const Calender = (props) => {
  const {data} = props
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
          {data.pds.work_time.map((elm,index)=>(
            <div className="day_item" key={index}>
            <p>8</p>
            <p>{elm.day.name.slice(0,3)}</p>
          </div>
          ))}
        
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
            
          {data.pds.work_time.map((elm,index = 8)=>{
            let array = [8,9,10,11,12,13,14,15,16,17,18]
            let start = parseInt(elm.start_time.split(":")[0])
            let end = parseInt(elm.end_time.split(":")[0])
            console.log({index})
              return(
           <Table.Row key={index}>
          <>
             {
               array.map(elm=>{
                 
                if (start<=elm) if (end<=elm) return (<Table.Cell  ></Table.Cell>)
                else return(
                  <Table.Cell className="here"></Table.Cell>
                )
               else return true
               }
               )
             }
             </>
            </Table.Row>
             )
})}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};
Calender.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  set_doc : PropTypes.func.isRequired,
  data:PropTypes.array.isRequired
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  isLogin: state.auth.isLogin,
  data :state.doc.data,
});
export default connect(mapStateToProps, { set_doc })(Calender) ;
