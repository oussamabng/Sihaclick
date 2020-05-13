import React from "react";
import { Container } from "semantic-ui-react";

//? import css
import "./BloodDonate.css";

export default function BloodDonate() {
  return (
    <div className="_best_doc">
      <Container>
        <div className="info">
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>dons de sang</p>
            <div className="plus_title">
              <div className="up"></div>
              <div className="down"></div>
            </div>
          </div>
          <h3>
            il s’agit d’un don et qu’aucune rémunération en contre partie ne
            doit demandée
          </h3>
        </div>
      </Container>
    </div>
  );
}
