import React from "react";
import { Card, Icon } from "semantic-ui-react";

//? import img
import Img from "../../assets/event.jpg";
import { ReactComponent as Date } from "../../assets/date.svg";

//? import css
import "./CardEvent.css";
import { useEffect, useState } from "react";

const CardEvent = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(props.data)
  }, [])

  return (
    <>
      {data && <div key={props.key} className="_card_event">
        <Card>
          <div
            className="event_img"
            style={{
              backgroundImage: `url(${"https://sihaclik.com/" + data.image.path})`,
            }}
          />
          <div className="content_event">
            <h4>{data.title}</h4>
            <p>
              <Icon name="map marker alternate" />
              {data.address.address + " - " + data.address.commune.wilaya.nom}
            </p>
            <p>
              <Date />
              {data.date}
            </p>
          </div>
          <div className="inscrire_event">
            <p>Inscrire</p>
            <Icon name="long arrow alternate right" />
          </div>
        </Card>
      </div>
      }
    </>
  );
};

export default CardEvent;
