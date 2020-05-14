import React, { useState } from "react";
import { Button, Card, Icon } from "semantic-ui-react";

//? import css
import "./BloodCard.css";

import { ReactComponent as O } from "../../assets/o.svg";
import { ReactComponent as A } from "../../assets/a.svg";
import { ReactComponent as B } from "../../assets/b.svg";
import { ReactComponent as AB } from "../../assets/ab.svg";

import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Plaquette } from "../../assets/plaquette.svg";

//? import modal
import BloodModal from "../../components/BloodModal/BloodModal.jsx";

export default function BloodCard() {
  const [typeBlood, setTypeBlood] = useState("AB");
  const [isPlaquette, setIsPlaquette] = useState(false);
  const [isPositive, setIsPositive] = useState(true);
  const [date, setDate] = useState("2h");
  const [wilaya, setWilaya] = useState("Alger");
  const [commune, setCommune] = useState("Alger");
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div>
      <Card className="blood_card">
        <Card.Content>
          <div className="row">
            <div className="col">
              <Card.Header className="header_blood">
                Besoin du sang "{typeBlood} {isPositive ? "+" : "-"}"
              </Card.Header>
              <p className="place">{wilaya + "," + commune}</p>
              <div className="date_info">
                <h4>il ya {date}</h4>
                <p>
                  Urgent <Heart />
                </p>
              </div>
            </div>
            <div className="col">
              {" "}
              {!isPlaquette && (
                <div className="blood_icon">
                  {typeBlood === "O" && <O />}
                  {typeBlood === "A" && <A />}
                  {typeBlood === "AB" && <AB />}
                  {typeBlood === "B" && <B />}
                  {isPositive ? (
                    <Icon name="plus" className="type_blood" />
                  ) : (
                    <Icon name="minus" className="type_blood" />
                  )}
                </div>
              )}
              {isPlaquette && (
                <div className="blood_icon">
                  <Plaquette className="icon_plq" />
                  {isPositive ? (
                    <div className="blood_icon flex">
                      <Icon name="plus" className="type_blood_plaquette" />
                      <p className="_blood_type">{typeBlood}</p>
                    </div>
                  ) : (
                    <div className="blood_icon flex">
                      <Icon name="minus" className="type_blood_plaquette" />
                      <p className="_blood_type">{typeBlood}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Card.Content>
        <div className="_blood_card_btn">
          <Button
            content="Afficher le don"
            icon="plus"
            labelPosition="left"
            onClick={handleModal}
          />
        </div>
        {show && (
          <BloodModal
            setShow={handleModal}
            show={show}
            isPositive={isPositive}
            isPlaquette={isPlaquette}
            typeBlood={typeBlood}
          />
        )}
      </Card>
    </div>
  );
}
