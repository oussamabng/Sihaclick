import React from "react";
import { Card, Icon } from "semantic-ui-react";

//? import css
import "./NewCard.css";
import { useEffect, useState } from "react";

function NewCard(props) {
  const [time, setTime] = useState("");
  const { image, title, organsator, date } = props.data;
  useEffect(() => {
    let dateServer = date.split("-");
    let currentDate = new Date().toLocaleDateString("en-US").split("/");
    console.log({ dateServer, currentDate });
    if (parseInt(dateServer[0]) - parseInt(currentDate[2]) > 0) {
      setTime(
        String(parseInt(dateServer[0]) - parseInt(currentDate[2])) +
          " years ago"
      );
    } else if (parseInt(dateServer[1]) - parseInt(currentDate[0] > 0)) {
      setTime(
        String(parseInt(dateServer[1]) - parseInt(currentDate[0])) +
          " months ago"
      );
    } else if (parseInt(dateServer[2]) - parseInt(currentDate[1]) > 0) {
      setTime(
        String(parseInt(dateServer[2]) - parseInt(currentDate[1])) + " days ago"
      );
    }
  }, [date]);

  console.log({ time });
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
            <p>{date}</p>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}

export default NewCard;
