import React from "react";
import { Container, Input } from "semantic-ui-react";

//? import css
import "./AddEmail.css";

const AddEmail = () => {
  return (
    <div className="_add_email_home _best_doc">
      <Container>
        <div className="plus_title email">
          <div className="up"></div>
          <div className="down"></div>
        </div>
        <div className="plus_title email down">
          <div className="up"></div>
          <div className="down"></div>
        </div>
        <div className="row">
          <p>
            Ajouter ton <b>email</b> et suivez notre actualité <b>maintenant</b>
          </p>
          <Input
            action={{
              icon: "send",
            }}
            size="small"
            className="email_input"
            actionPosition="left"
            placeholder="taper ici ton email"
          />
        </div>
      </Container>
    </div>
  );
};

export default AddEmail;
