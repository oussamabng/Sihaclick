import React from "react";
import { Grid, Checkbox, Button, Icon } from "semantic-ui-react";

//? import css
import "./BloodAnnonce.css";

//? import components
import SidebarDons from "../../components/SidebarDons/SidebarDons.jsx";
import BloodCard from "../../components/BloodCard/BloodCard.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

const BloodAnnonce = () => {
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
