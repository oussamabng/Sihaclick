import React from "react";
import { Container, Form, Checkbox } from "semantic-ui-react";
//? import css
import "./FormSignup.css";
import WhySignup from "../../components/WhySignup/WhySignup.jsx";

import { ReactComponent as Arrow } from "../../assets/arrow.svg";

export default function FormSignup() {
  return (
    <Container className="form_signup modal_login">
      <div className="_best_doc row">
        <div className="title_best_doc">
          <div className="line_title"></div>
          <p>sing-up</p>
        </div>
        <Form>
          <Form.Group>
            <Form.Input
              type="text"
              label="Nom"
              placeholder="Mohamed Achori"
              className="spec"
            />
            <Form.Input
              type="text"
              label="Prénom"
              placeholder="Mohamed Achori"
              className="spec"
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              type="text"
              label="Adresse Mail"
              placeholder="exemple@sihaclick.com"
            />
            <Form.Input
              type="text"
              placeholder="Mohamed Achori"
              style={{
                visibility: "hidden",
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              type="password"
              label="Mot de passe"
              placeholder="Mohamed Achori"
            />
            <Form.Input
              type="password"
              label="Confirmer Mot de passe"
              placeholder="Mohamed Achori"
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              type="text"
              label="Numéro de telephone"
              placeholder="+213 0587 954 458"
            />
            <Form.Input
              type="text"
              placeholder="Mohamed Achori"
              style={{
                visibility: "hidden",
              }}
            />
          </Form.Group>{" "}
          <Form.Group>
            <Form.Input type="text" label="Wilaya" placeholder="Alger" />
            <Form.Input type="text" label="Comune" placeholder="Alger" />
          </Form.Group>
          <Form.Group>
            <div className="_checkbox type_content blue">
              <Checkbox
                radio
                label={
                  <label>
                    <p>
                      J’ai lu et j’accepte{" "}
                      <span>les conditions d’utilisation .</span>
                    </p>
                  </label>
                }
                checked
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Button>
              <p
                style={{
                  visibility: "hidden",
                }}
              >
                .
              </p>
              <p>Inscription</p>
              <Arrow />
            </Form.Button>
          </Form.Group>
        </Form>
      </div>
      <WhySignup />
    </Container>
  );
}
