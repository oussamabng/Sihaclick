import React, { useState } from "react";
import { Icon, Button } from "semantic-ui-react";

//? import css
import "./CardRdvRecent.css";

import Doctor from "../../assets/doctor.jpg";

const CardRdvRecent = () => {
  const [isPassed, setIsPassed] = useState(true);
  const handlePassed = ()=>{
    setIsPassed(prevState=>!prevState);
  }
  return (
    <div className="card_rdv_recent">
      <div className="card_rdv">
        <div
          className="img_doc"
          style={{
            backgroundImage: `url(${Doctor})`,
          }}
        ></div>
        <div className="info">
          <h1>Mohamed Chafik</h1>
          <span>Pharmacien</span>
          <p>
            <Icon name="phone" />
            +213 528 965 257 / +213 748 954 874
          </p>
          <p>
            <Icon name="map marker alternate" />
            17 Rue Hadad Said, Ain Benian - Alger
          </p>
        </div>
        <div className={isPassed ? "action" : "action gray"}>
          <Button onClick={handlePassed} >{isPassed ? "Annuler" : "Passer"}</Button>
          <p>18 Mars 2020</p>
        </div>
      </div>
    </div>
  );
};

export default CardRdvRecent;
