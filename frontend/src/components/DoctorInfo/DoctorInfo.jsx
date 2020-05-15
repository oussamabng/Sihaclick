import React from "react";
import { Icon, Image } from "semantic-ui-react";

//? import css
import "./DoctorInfo.css";

import Stage from "../../assets/stage.png";

//? import img doctor
import Doctor from "../../assets/doctor.jpg";

const DoctorInfo = () => {
  return (
    <div className="doctor_info">
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
      <div className="other_info">
        <h1>Structure :</h1>
        <p>(Cabinet privé / Cabinet de groupe / Clinique privée)</p>
      </div>
      <div className="other_info">
        <h1>Consultation a domicile</h1>
      </div>
      <div className="other_info">
        <h1>Ouvert après :</h1>
        <p>17h ou WE ou jrs fériés</p>
      </div>
      <div className="other_info">
        <h1>Conventions :</h1>
        <p>(CNAS, CASNOS, CAMSSP)</p>
      </div>
      <div className="other_info">
        <h1>Experience :</h1>
        <div className="title"></div>
        <div className="exp_doc_info">
          <Image src={Stage} />
          <div className="other_info">
            <h1>Mitidia Dialise :</h1>
            <p>Médecin Géneraliste</p>
            <p>2004-2015</p>{" "}
          </div>
        </div>
        <div className="exp_doc_info">
          <Image src={Stage} />
          <div className="other_info">
            <h1>Mitidia Dialise :</h1>
            <p>Médecin Géneraliste</p>
            <p>2004-2015</p>{" "}
          </div>
        </div>
      </div>
      <div className="other_info">
        <h1>Activités bénévoles :</h1>
        <div className="title"></div>
        <div className="exp_doc_info">
          <Image src={Stage} />
          <div className="other_info">
            <h1>Group DIr El khir :</h1>
            <p>Nouriture et besoin pour</p>
            <p>les fammilles</p>
            <p>2004-2015</p>
          </div>
        </div>
      </div>
      <div className="other_info">
        <h1>Langue :</h1>
        <h3>Francais - Arabe - Anglais </h3>
      </div>
    </div>
  );
};

export default DoctorInfo;
