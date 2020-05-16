import React from "react";
import { Grid, Checkbox, Input } from "semantic-ui-react";

//? import components
import SidebarDons from "../../components/SidebarDons/SidebarDons.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import CardAnnuaire from "../../components/CardAnnuaire/CardAnnuaire.jsx";

const AnnuaireAnnonce = () => {
  return (
    <div className="blood_annonce medicament_annonce annuaire_annonce">
      <SidebarDons isBlood={false} isAnnuaire />
      <div className="table_blood">
        <Input
          action={{ icon: "search" }}
          placeholder="Chercher ton professionnelle de santé."
        />
        <div className="blood_filter">
          <div className="_checkbox type_content blue">
            <Checkbox radio label="A - Z Filter" className="this" />
            <Checkbox radio label="Nombre de vues" checked />
            <Checkbox radio label="Par Distance" />
          </div>
        </div>
        <div className="grid_center">
          <Grid columns={1}>
            <Grid.Column>
              <CardAnnuaire />
            </Grid.Column>
            <Grid.Column>
              <CardAnnuaire />
            </Grid.Column>
          </Grid>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default AnnuaireAnnonce;
