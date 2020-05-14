import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";

//? import css
import BloodCard from "../../components/BloodCard/BloodCard.jsx";

//? import css
import "./BloodDonate.css";

export default function BloodDonate() {
  return (
    <div className="_best_doc blood">
      <div className="circle_blood"></div>
      <div className="circle_blood_bottom"></div>
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
        </div>{" "}
        <Grid stackable columns={3} className="_blood_grid ">
          <Grid.Column>
            <BloodCard />
          </Grid.Column>{" "}
          <Grid.Column>
            <BloodCard />
          </Grid.Column>{" "}
          <Grid.Column>
            <BloodCard />
          </Grid.Column>{" "}
          <Grid.Column>
            <BloodCard />
          </Grid.Column>{" "}
          <Grid.Column>
            <BloodCard />
          </Grid.Column>{" "}
          <Grid.Column>
            <BloodCard />
          </Grid.Column>{" "}
          <Grid.Column>
            <BloodCard />
          </Grid.Column>{" "}
          <Grid.Column>
            <BloodCard />
          </Grid.Column>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "4rem",
          }}
        >
          <Button
            content="afficher tous les dons"
            icon="plus"
            labelPosition="left"
            className="blood_btn"
          />
        </div>
        <div className="info">
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>Autres dons</p>
            <div className="plus_title">
              <div className="up"></div>
              <div className="down"></div>
            </div>
          </div>
          <h3>
            il s’agit d’un don et qu’aucune rémunération en contre partie ne
            doit demandée
          </h3>{" "}
        </div>
      </Container>
    </div>
  );
}
