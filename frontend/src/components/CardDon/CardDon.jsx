import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";

//? import icon
import { ReactComponent as Medicament } from "../../assets/Medicament.svg";

import Teva from "../../assets/teva.png";

//? import modal
import ModalDon from "../../components/ModalDon/ModalDon.jsx";
//? import css
import "./CardDon.css";

const CardDon = () => {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div className="card_don other">
      <Card>
        <div
          className="doctor_img card_don_img"
          style={{
            backgroundImage: `url(${Teva})`,
          }}
        />
        <Card.Content>
          <div className="under_content">
            <div className="dons_title">
              <Medicament />
              <p>Médicament Tev 100g</p>
            </div>
            <p>il y a X jrs</p>
          </div>
        </Card.Content>
      </Card>
      <Button className="btn_don_other" onClick={handleModal}>
        afficher l’annonce
      </Button>
      {show && <ModalDon setShow={handleModal} show={show} />}
    </div>
  );
};

export default CardDon;
