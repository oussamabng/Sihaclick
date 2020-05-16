import React from "react";
import { Icon, Rating } from "semantic-ui-react";

//? import css
import "./CardAnnuaire.css";

//? import img doctor
import Doctor from "../../assets/doctor.jpg";

import { ReactComponent as Date } from "../../assets/date.svg";

const CardAnnuaire = () => {
  return (
    <div className="_card_annuaire">
      <div className="left_part">
        <div
          className="img_doc"
          style={{
            backgroundImage: `url("${Doctor}")`,
          }}
        ></div>
        <div className="infos">
          <div className="texts">
            <p className="title">
              <Icon name="user outline" />
              Mohamed Chafik
            </p>
            <h4>Pharmacien</h4>
            <p className="phone_f">
              <Icon name="phone" />
              0552 123 456 - 0552 123 456
            </p>
            <p>
              <Icon name="map marker alternate" />
              24 Rue hamid mentouri El biar - Alger
            </p>
          </div>
          <div className="label_part">
            <p>18 Km</p>
            <p>20 Vu</p>
          </div>
        </div>
      </div>
      <div className="right_part">
        <div className="top">
          <div className="times">
            <p>8.00 h</p>
            <p>8.00 h</p>
            <p>8.00 h</p>
            <p>8.00 h</p>
            <div className="line"></div>
          </div>
          <div className="times">
            <p>8.00 h</p>
            <p>8.00 h</p>
            <p>8.00 h</p>
            <p>8.00 h</p>
            <div className="line"></div>
          </div>
          <div className="times">
            <p>8.00 h</p>
            <p>8.00 h</p>
            <p>8.00 h</p>
            <p>8.00 h</p>
            <div className="line"></div>
          </div>
          <div className="times">
            <p>8.00 h</p>
            <p>8.00 h</p>
            <p>8.00 h</p>
            <p>8.00 h</p>
            <div className="line"></div>
          </div>
        </div>
        <div className="bottom">
          <p className="this">
            <Date />
            Prendre un rendivou
          </p>
          <p>
            <Icon name="user" />
            Consulté le profile
          </p>
          <Rating icon="star" size="big" />
        </div>
      </div>
    </div>
  );
};

export default CardAnnuaire;
