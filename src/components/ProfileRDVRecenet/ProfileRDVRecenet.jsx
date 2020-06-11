import React from "react";
import CardRdvRecent from "../CardRdvRecent/CardRdvRecent.jsx";

//? import css
import "./ProfileRDVRecenet.css";
import { Grid } from "semantic-ui-react";

const ProfileRDVRecenet = () => {
  return (
    <div className="profile_rdv">
      <div className="title">
        <p>Rendez Vous recent</p>
        <div className="line"></div>
      </div>
      <Grid columns={2} stackable>
        <Grid.Column width={6}>
          <CardRdvRecent />
        </Grid.Column>
        <Grid.Column width={6}>
          <CardRdvRecent />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ProfileRDVRecenet;
