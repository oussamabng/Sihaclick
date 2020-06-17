import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

//? import icon
import { ReactComponent as Medicament } from "../../assets/Medicament.svg";

import Teva from "../../assets/teva.png";

//? import css
import "./CardProfileMedicament.css";

const CardProfileMedicament = (props) => {
  const [data, setData] = useState({});
  const { key, medicament } = props;
  useEffect(() => {
    setData(props.data)
  }, [props.data])
  return (
    <div key={key} className="card_don other profile">
      <Card>
        <div
          className="doctor_img card_don_img"
          style={{
            backgroundImage: `url(${data.image_id ? "https://sihaclik.com/" + data.image.path : null})`,
          }}
        />
        <Card.Content>
          <div className="under_content">
            <div className="dons_title">
              {medicament && <Medicament />}
              <p>{data.name} 100g</p>
            </div>
            <p>
              Contité : <span>{data.quantity} {medicament ? "materiels" : "boites"}</span>
            </p>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CardProfileMedicament;
