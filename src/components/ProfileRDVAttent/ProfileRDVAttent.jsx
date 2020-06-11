import React from "react";
import CardRdvAttent from "../CardRdvAttent/CardRdvAttent.jsx";

import { Grid } from "semantic-ui-react";

const ProfileRDVAttent = () => {
  return (
    <div className="profile_rdv">
      <div className="title">
        <p>Rendez Vous en attente</p>
        <div className="line"> </div>
      </div>
      <Grid columns={2} stackable>
        <Grid.Column width={6}>
          <CardRdvAttent />
        </Grid.Column>
        <Grid.Column width={6}>
          <CardRdvAttent />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ProfileRDVAttent;
