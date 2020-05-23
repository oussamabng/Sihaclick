import React, { useState, useEffect } from "react";
import { Card, Button, Image } from "semantic-ui-react";

//? import icon
import { ReactComponent as Medicament } from "../../assets/Medicament.svg";

import Teva from "../../assets/teva.png";

//? import modal
import ModalDon from "../../components/ModalDon/ModalDon.jsx";
//? import css
import "./CardDon.css";

const CardDon = (props) => {
  const { data, activeItem } = props;
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const [exp, setExp] = useState("");
  const [commune, setCommune] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [phone, setPhone] = useState("");
  const handleModal = () => {
    setShow((prevState) => !prevState);
  };
  useEffect(() => {
    setName(data.matter_donnation.name);
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
    let minusTime = hereTime[0] - serverTime[0];
    //console.log({ serverDate, serverTime, hereTime, minusDate, minusTime });
    if (minusDate[2] > 0) {
      setTime("Il ya " + String(minusDate[2]) + " jours");
    } else if (minusTime >= 24) {
      setTime("Il ya " + String(Math.floor(minusTime / 24)) + " jours");
    } else {
      setTime("Il ya " + String(minusTime) + " h");
    }
    setCommune(data.user.chaab.address.commune.nom);
    setWilaya(data.user.chaab.address.commune.wilaya.nom);
    setPhone(data.user.phone);
    console.log({ data });
    if (data.matter_donnation.image_id) {
      setImage("https://sihaclik.com/" + data.matter_donnation.image.path);
      console.log({
        img: "https://sihaclik.com/" + data.matter_donnation.image.path,
      });
    }
    if (data.matter_donnation.drug_donnation) {
      setExp(data.matter_donnation.drug_donnation.expired_date);
    }
    return () => {
      console.log("cleanup");
      setImage("");
      setName("");
      setExp("");
      setTime("");
    };
  }, [activeItem, data]);

  return (
    <div className="card_don other">
      <Card>
        <Image src={image} />
        <Card.Content>
          <div className="under_content">
            <div className="dons_title">
              {activeItem === "Médicament" && <Medicament />}
              <p>{name}</p>
            </div>
            <p>{time}</p>
          </div>
        </Card.Content>
      </Card>
      <Button className="btn_don_other" onClick={handleModal}>
        afficher l’annonce
      </Button>
      {show && (
        <ModalDon
          setShow={handleModal}
          exp={exp}
          show={show}
          name={name}
          image={image}
          activeItem={activeItem}
          commune={commune}
          wilaya={wilaya}
          phone={phone}
        />
      )}
    </div>
  );
};

export default CardDon;
