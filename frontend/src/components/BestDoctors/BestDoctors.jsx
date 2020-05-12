import React from "react";

//? import css
import "./BestDoctors.css";
import { Container } from "semantic-ui-react";
import Pub from "../../assets/pub.png";
export default function BestDoctors() {
  return (
    <div className="_best_doc">
      <Container>
        <div
          className="pub_img"
          style={{
            backgroundImage: `url(${Pub})`,
          }}
        ></div>
      </Container>
    </div>
  );
}
