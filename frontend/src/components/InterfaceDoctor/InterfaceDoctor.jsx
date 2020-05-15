import React from "react";

//? import css
import "./InterfaceDoctor.css";

//? import components
import DoctorInfo from "../DoctorInfo/DoctorInfo.jsx";

const InterfaceDoctor = () => {
  return (
    <div className="interface_doctor">
      <div className="row">
        <DoctorInfo />
      </div>
      <div className="row">
        <p>calender</p>
      </div>
    </div>
  );
};

export default InterfaceDoctor;
