import React from "react";
import { Card, Icon } from "semantic-ui-react";

//? import css
import "./NewCard.css";
import { useEffect, useState } from "react";

function NewCard(props) {
  const [time, setTime] = useState("");
  const { image, title, organsator,created_at } = props.data;
  useEffect(() => {
   setTime(created_at)
   //!TODO set exemple 5 years ago
  }, [created_at]);

  return (
    <div className="_new_card">
      <Card className="card_doc new_card">
        <div
          className="doctor_img"
          style={{
            backgroundImage: `url(${"https://sihaclik.com/" + image.path})`,
          }}
        />

        <Card.Content>
          <div className="abs_info_new">
            <h1>{title}</h1>
            <p>{organsator}</p>
          </div>
          <div className="new_content">
            <p>
              <Icon name="plus" /> Plus
            </p>
            <p>{time}</p>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}

export default NewCard;
