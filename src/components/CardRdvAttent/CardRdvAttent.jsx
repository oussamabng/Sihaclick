import React from "react";
import { Icon } from "semantic-ui-react";

import Doctor from "../../assets/doctor.jpg";

const CardRdvAttent = () => {
  //const [isPassed, setIsPassed] = useState(true);
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
        <div className="action att ">
          <span>5 Days</span>
          <span>2 h 53min</span>
          <p>18 Mars 2020</p>
          <div className="annuler">
            <p>
              <Icon name="times" />
              Annuller
            </p>
          </div>
        </div>
      </div>
      <div className="action att mobile">
        <span>5 Days</span>
        <span>2 h 53min</span>
        <p>18 Mars 2020</p>
        <div className="annuler">
          <p>
            <Icon name="times" />
            Annuller
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardRdvAttent;
