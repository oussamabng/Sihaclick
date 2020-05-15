import React from "react";
import { Grid, Checkbox, Input } from "semantic-ui-react";

//? import css
import "./MedicamentAnnonce.css";

//? import components
import SidebarDons from "../../components/SidebarDons/SidebarDons.jsx";
import CardDon from "../../components/CardDon/CardDon.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

const MedicamentAnnonce = () => {
  return (
    <div className="blood_annonce medicament_annonce">
      <SidebarDons isBlood={false} />
      <div className="table_blood">
        <Input
          action={{ icon: "search" }}
          placeholder="Chercher ton professionnelle de santé."
        />
        <div className="blood_filter">
          <div className="_checkbox type_content blue">
            <Checkbox radio label="A - Z Filter" className="this" />
            <Checkbox radio label="Par Distance" checked />
          </div>
        </div>
        <div className="grid_center">
          <Grid columns={4}>
            <Grid.Column>
              <CardDon />
            </Grid.Column>
            <Grid.Column>
              <CardDon />
            </Grid.Column>
            <Grid.Column>
              <CardDon />
            </Grid.Column>
            <Grid.Column>
              <CardDon />
            </Grid.Column>
            <Grid.Column>
              <CardDon />
            </Grid.Column>
            <Grid.Column>
              <CardDon />
            </Grid.Column>
            <Grid.Column>
              <CardDon />
            </Grid.Column>{" "}
          </Grid>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default MedicamentAnnonce;
