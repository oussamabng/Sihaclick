import React from "react";

//? import arrow
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

//? import css
import "./Navigation.css";
import { Container } from "semantic-ui-react";

const Navigation = () => {
  return (
    <div className="_navigation">
      <Container>
        <ul>
          <div className="row">
            <li>Accueil</li>
            <li>Annuaire</li>
            <li className="active">
              <Arrow
                style={{
                  margin: "0 .5rem",
                }}
              />
              Echange
            </li>
          </div>
          <li>Blog</li>
          <li>Evenement</li>
          <li>Contactez</li>
          <li>Apropos de nous</li>
        </ul>
      </Container>
    </div>
  );
};

export default Navigation;
