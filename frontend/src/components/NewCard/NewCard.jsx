import React from "react";
import { Card, Icon } from "semantic-ui-react";

//? import css
import "./NewCard.css";

//? import img doctor
import Doctor from "../../assets/doctor.jpg";

function NewCard() {
  return (
    <div className="_new_card">
      <Card className="card_doc new_card">
        <div
          className="doctor_img"
          style={{
            backgroundImage: `url(${Doctor})`,
          }}
        />

        <Card.Content>
          <div className="abs_info_new">
            <h1>Nous sommes les premiers qui ont presenter cette solution.</h1>
            <p>Mohamed Chafik</p>
          </div>
          <div className="new_content">
            <p>
              <Icon name="plus" /> Plus
            </p>
            <p>1m ago</p>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}

export default NewCard;
