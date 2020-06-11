import React from "react";
import { Icon, Button, Grid } from "semantic-ui-react";

//? import css
import "./ProfileDoc.css";
import { ReactComponent as Date } from "../../assets/date.svg";

//? import img doctor
import Doctor from "../../assets/doctor.jpg";
const ProfileDoc = () => {
  return (
    <>
      <div className="hero_doctor profile"></div>
      <Grid stackable columns={2} className="doctor_profile_fav">
        <Grid.Column width={10}>
          <div className="doctor_info profile">
            <div className="header_part">
              <div
                className="doctor_img"
                style={{
                  backgroundImage: `url(${Doctor})`,
                }}
              />
              <div className="label_part">
                <div className="text_with_icon">
                  <Icon name="user outline" />
                  <h1>Mohamed Chafik</h1>
                </div>
              </div>
            </div>
            <div className="second_part_profile_doc mobile">
              <div className="label_part">
                <p>18 Km</p>
                <p>20 Vu</p>
              </div>
              <ul
                className="coords_list"
                style={{
                  padding: "0",
                  marignTop: "1rem",
                }}
              >
                <li>
                  {" "}
                  <Icon name="phone" />
                  +213 528 965 257 / +213 748 954 874
                </li>
                <li>
                  <Icon name="mail outline" />
                  Support@sihaclick.com
                </li>
                <li>
                  <Icon name="map marker alternate" />
                  17 Rue Hadad Said, Ain Benian - Alger
                </li>
              </ul>
              <div className="action_doctor_btn">
                <Button>
                  <Date />
                  Prendre un Rendez-vous
                </Button>
                <Button>
                  {" "}
                  <Icon name="map marker alternate" />
                  Afficher la position
                </Button>
              </div>
            </div>

            <div className="other_info intro">
              <h1>Introduction :</h1>
              <div className="title"></div>
              <p>
                x Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem
              </p>
            </div>

            <div className="other_info">
              <h1>Spécialité :</h1>
              <p> Médecin Géneraliste </p>
            </div>
            <div className="other_info">
              <h1>Wilaya :</h1>
              <p> Alger</p>
            </div>
            <div className="other_info">
              <h1>Commune :</h1>
              <p> Cheraga </p>
            </div>
            <div className="other_info">
              <h1>Service/ Paramettre :</h1>
              <p> Échographie Endoscopie - ... </p>
            </div>
            <div className="other_info">
              <h1>Autre :</h1>
              <div className="title"></div>
              <p> Échographie</p>
            </div>
            <div className="other_info">
              <h1>Structure :</h1>
              <p> (Cabinet privé / Cabinet de groupe / Clinique privée) </p>
            </div>
            <div className="other_info">
              <h1>Consultation a domicile</h1>
            </div>
            <div className="other_info">
              <h1>Ouvert après :</h1>
              <p> 17h ou weekend ou jours fouriers </p>
            </div>
            <div className="other_info">
              <h1>Conventions :</h1>
              <p> (CNAS, CASNOS, CAMSSP) </p>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={6} className="scgrid">
          <div className="second_part_profile_doc">
            <div className="label_part">
              <p>18 Km</p>
              <p>20 Vu</p>
            </div>
            <ul
              className="coords_list"
              style={{
                padding: "0",
                marignTop: "1rem",
              }}
            >
              <li>
                {" "}
                <Icon name="phone" />
                +213 528 965 257 / +213 748 954 874
              </li>
              <li>
                <Icon name="mail outline" />
                Support@sihaclick.com
              </li>
              <li>
                <Icon name="map marker alternate" />
                17 Rue Hadad Said, Ain Benian - Alger
              </li>
            </ul>
            <div className="action_doctor_btn">
              <Button>
                <Date />
                Prendre un Rendez-vous
              </Button>
              <Button>
                {" "}
                <Icon name="map marker alternate" />
                Afficher la position
              </Button>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default ProfileDoc;
