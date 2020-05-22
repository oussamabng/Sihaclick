import React, { useEffect, useState } from "react";
import { Grid, Checkbox, Button, Icon } from "semantic-ui-react";
import axios from "axios";

//? import css
import "./BloodAnnonce.css";

//? import components
import SidebarDons from "../../components/SidebarDons/SidebarDons.jsx";
import BloodCard from "../../components/BloodCard/BloodCard.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

const BloodAnnonce = () => {
  useEffect(() => {
    const options = {
      headers: { "Content-Type": "application/json" },
    };
    axios
      .get(
        "https://sihaclik.com/api/public/donnation/blood/all/all/0/10",
        options
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="blood_annonce ">
      <SidebarDons isBlood />
      <div className="table_blood">
        <div className="blood_filter">
          <div className="_checkbox type_content">
            <Checkbox radio label="A - Z Filter" />
            <Checkbox radio label="Par Distance" checked />
          </div>
          <Button>
            <Icon name="plus" color="white" />
            Ajouter annonce
          </Button>
        </div>
        <div className="grid_center">
          <Grid columns={3}>
            <Grid.Column>
              <BloodCard />
            </Grid.Column>
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
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default BloodAnnonce;
