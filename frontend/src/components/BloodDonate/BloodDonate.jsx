import React, { useEffect, useState } from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import axios from "axios";

//? import css
import BloodCard from "../../components/BloodCard/BloodCard.jsx";

//? import css
import "./BloodDonate.css";

export default function BloodDonate() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .create({
        headers: {
          get: {
            "Content-Type": "application/json",
          },
        },
      })
      .request({
        url: "https://sihaclik.com/api/public/donnation/blood/all/all/0/12",
        method: "get",
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
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
          {data.map((elm) => {
            return (
              <Grid.Column>
                <BloodCard data={elm} />
              </Grid.Column>
            );
          })}
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
