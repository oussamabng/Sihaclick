import React from "react";
import { Icon } from "semantic-ui-react";

//? import css
import "./DoctorInfo.css";

//? import img doctor
import Doctor from "../../assets/doctor.jpg";

const DoctorInfo = () => {
  return (
    <div className="doctor_info ">
      <div className="header_part">
        <div
          className="doctor_img"
          style={{
            backgroundImage: `url(${Doctor})`,
          }}
        />
        <div className="label_part">
          <p>18 Km</p>
          <p>20 Vu</p>
        </div>
      </div>
      <div className="info_doc">
        <div className="text_with_icon">
          <Icon name="user" />
          <h1>Mohamed Chafik</h1>
        </div>
        <div className="text_with_icon">
          <Icon
            name="user outline"
            style={{
              visibility: "hidden",
            }}
          />
          <h4>Médecin Géneraliste </h4>
        </div>
        <div className="text_with_icon ">
          <Icon name="phone" />
          <div className="phones">
            <h4>0552 123 456</h4>
            <h4>0552 123 456</h4>
          </div>
        </div>
        <div className="text_with_icon mar">
          <Icon name="mail outline" />
          <h4>Mohamedchafik@gmail.com</h4>
        </div>
        <div className="text_with_icon mar">
          <Icon name="map marker alternate" />
          <h4>Cheraga, Alegr</h4>
        </div>
      </div>
      <div className="other_info">
        <h1>Service/ Paramettre :</h1>
        <p> Échographie</p>
      </div>
      <div className="other_info">
        <h1>Autre :</h1>
        <div className="title"></div>
        <p> Échographie</p>
      </div>
    </div>
  );
};

export default DoctorInfo;
