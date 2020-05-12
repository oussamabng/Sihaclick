import React from "react";

//? import css
import "./BestDoctors.css";
import { Container } from "semantic-ui-react";
import Pub from "../../assets/pub.png";
export default function BestDoctors() {
  return (
    <div className="_best_doc">
      <div className="cercle_right"></div>
      <div className="cercle_left"></div>
      <Container>
        <div className="info">
          <div
            className="pub_img"
            style={{
              backgroundImage: `url(${Pub})`,
            }}
          ></div>
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>
              Choisir entre nos <br />
              meilleur médecins
            </p>
            <div className="plus_title">
              <div className="up"></div>
              <div className="down"></div>
            </div>
          </div>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </h3>
        </div>
      </Container>
    </div>
  );
}
