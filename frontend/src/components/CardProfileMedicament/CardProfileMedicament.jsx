import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";

//? import icon
import { ReactComponent as Medicament } from "../../assets/Medicament.svg";

import Teva from "../../assets/teva.png";

//? import css
import "./CardProfileMedicament.css";

const CardProfileMedicament = () => {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div className="card_don other profile">
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
            <p>
              Contité : <span>200 boites</span>
            </p>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CardProfileMedicament;
