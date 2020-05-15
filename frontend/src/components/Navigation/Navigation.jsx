import React from "react";

//? import arrow
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

//? import css
import "./Navigation.css";
import { Container } from "semantic-ui-react";

const Navigation = (props) => {
  return (
    <div className="_navigation">
      <Container>
        <ul>
          {!props.notLine && (
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
          )}
          {props.notLine && (
            <>
              <li>Accueil</li>
              <li>Annuaire</li>
              <li>
                <Arrow
                  style={{
                    margin: "0 .5rem",
                  }}
                />
                Echange
              </li>
            </>
          )}
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
