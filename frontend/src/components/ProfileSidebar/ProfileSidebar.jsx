import React from "react";
import { Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

//? import css
import "./ProfileSidebar.css";

import { ReactComponent as Date } from "../../assets/date.svg";
import { ReactComponent as Notif } from "../../assets/notification.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const ProfileSidebar = (props) => {
  const { active } = props;
  return (
    <div className="profile_sidebar">
      <div className="data_profile">
        <h2>Mon espace</h2>
        <h4>
          <Icon name="user outline" /> Information de Compte
        </h4>
        <Link href="">
          Retourner a l accueil <Arrow />
        </Link>
        <Link
          to="/profile/update"
          className={active === "update" ? "active" : ""}
        >
          Modifier le Profile
          <Arrow />
        </Link>
        <h4 className="special">
          <Date /> Rendez-vous
        </h4>
        <Link href="">
          Rendez-vous recent
          <Arrow />
        </Link>
        <Link href="">
          Rendez-vous en attente
          <Arrow />
        </Link>
        <Link href="">
          Nouveau Rendez-vous
          <Arrow />
        </Link>
        <h4 className="special">
          <Notif /> Alerte des médicament
        </h4>
        <Link href="">
          Ajouter une Alerte
          <Arrow />
        </Link>
        <h4>
          <Icon name="heart outline" />
          Liste des Favoris
        </h4>
        <Link href="">
          Ahmed Razen
          <Arrow />
        </Link>
        <Link href="">
          Mohamed Nazim
          <Arrow />
        </Link>{" "}
        <h4>
          <Icon name="exchange" />
          Historique d'échange
        </h4>
        <Link href="">
          Médicament et materiel
          <Arrow />
        </Link>
        <Link href="">
          done de Sang
          <Arrow />
        </Link>
        <Link href="">
          Demande de Stage
          <Arrow />
        </Link>
        <Button icon="sign-out alternate" content="Log Out" />
      </div>
    </div>
  );
};

export default ProfileSidebar;
