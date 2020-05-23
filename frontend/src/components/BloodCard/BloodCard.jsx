import React, { useState, useEffect } from "react";
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

export default function BloodCard(props) {
  const { data } = props;
  const [typeBlood, setTypeBlood] = useState("AB");
  const [isPlaquette, setIsPlaquette] = useState(null);
  const [isPositive, setIsPositive] = useState(null);
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const [show, setShow] = useState(false);
  const [time, setTime] = useState("");
  const [emergency, setEmergency] = useState(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleModal = () => {
    setShow((prevState) => !prevState);
  };
  useEffect(() => {
    console.log({ data });
    let time = new Date().toISOString();
    let serverDate = data.created_at.slice(0, 10).split("-");
    let serverTime = data.created_at.slice(11, 19).split(":");
    let hereDate = time.slice(0, 10).split("-");
    let hereTime = time.slice(11, 19).split(":");
    let minusDate = [
      hereDate[0] - serverDate[0],
      hereDate[1] - serverDate[1],
      hereDate[2] - serverDate[2],
    ];
    setCommune(data.user.chaab.address.commune.nom);
    setWilaya(data.user.chaab.address.commune.wilaya.nom);
    data.blood_donnation.emergency === 1
      ? setEmergency(true)
      : setEmergency(false);
    setTypeBlood(data.user.blood_group.group);
    data.user.blood_group.rhesus === 1
      ? setIsPositive(true)
      : setIsPositive(false);
    data.blood_donnation.require === 1
      ? setIsPlaquette(true)
      : setIsPlaquette(false);
    setName(data.user.name);
    setLastName(data.user.lastname);
    setPhone(data.user.phone);
    let minusTime = hereTime[0] - serverTime[0];
    if (minusDate[2] > 0) {
      setTime("Il ya " + String(minusDate[2]) + " jours");
    } else if (minusTime >= 24) {
      setTime("Il ya " + String(Math.floor(minusTime / 24)) + " jours");
    } else {
      setTime("Il ya " + String(minusTime) + " h");
    }
  }, []);
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
                <h4>{time}</h4>
                {emergency && (
                  <p>
                    Urgent <Heart />
                  </p>
                )}
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
            name={name}
            lastName={lastName}
            phone={phone}
          />
        )}
      </Card>
    </div>
  );
}
