import React from "react";
import { Card, Icon } from "semantic-ui-react";

//? import img
import Img from "../../assets/event.jpg";
import { ReactComponent as Date } from "../../assets/date.svg";

//? import css
import "./CardEvent.css";

const CardEvent = () => {
  return (
    <div className="_card_event">
      <Card>
        <div
          className="event_img"
          style={{
            backgroundImage: `url(${Img})`,
          }}
        />
        <div className="content_event">
          <h4>Journée Nationale de la néphrologie</h4>
          <p>
            <Icon name="map marker alternate" />
            24 Rue hamid mentouri El bier - Alger
          </p>
          <p>
            <Date />
            Mardi 23-03-2020 a 8.00 h
          </p>
        </div>
        <div className="inscrire_event">
          <p>Inscrire</p>
          <Icon name="long arrow alternate right" />
        </div>
      </Card>
    </div>
  );
};

export default CardEvent;
