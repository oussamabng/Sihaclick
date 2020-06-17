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
              <li className={props.active === "annuaire" && "active"}>
                <a href="/annuaire">Annuaire</a>
              </li>
              <li>
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
              <li className={props.active === "annuaire" && "active"}>
                <a href="/annuaire">Annuaire</a>
              </li>
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
          <li className="end">Blog</li>
          <li className="end">Evenement</li>
          <li className="end">Contactez</li>
          <li className="end">Apropos de nous</li>
          <li className="not_end"><Arrow
            style={{
              margin: "0 .5rem",
            }}
          />
                Autres
                <ul>
              <li >Blog</li>
              <li>Evenement</li>
              <li >Contactez</li>
              <li >Apropos de nous</li>
            </ul>
          </li>

        </ul>
      </Container>
    </div>
  );
};

export default Navigation;
