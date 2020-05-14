import React from "react";
import { Icon, Image } from "semantic-ui-react";

//? import css
import "./CardStage.css";
import Stage from "../../assets/stage.png";
const CardStage = () => {
  return (
    <div className="stage_card">
      <div className="image">
        <Image src={Stage} />
      </div>
      <div className="row">
        <h4>Brode rouge</h4>
        <h3>Laboratoire d’analyse</h3>
        <p>
          <Icon name="map marker alternate" />
          24 Rue hamid mentouri El bier - Alger
        </p>
      </div>
    </div>
  );
};

export default CardStage;
