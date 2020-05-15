import React from "react";
import { Input, Button, Icon } from "semantic-ui-react";

//? import css
import "./InterfaceDoctor.css";

import { ReactComponent as Date } from "../../assets/date.svg";

//? import components
import DoctorInfo from "../DoctorInfo/DoctorInfo.jsx";
import Calender from "../Calender/Calender.jsx";

const InterfaceDoctor = () => {
  return (
    <div className="interface_doctor medicament_annonce">
      <div className="row">
        <DoctorInfo />
      </div>
      <div className="row">
        <Input
          action={{ icon: "search" }}
          placeholder="Chercher ton professionnelle de santé."
        />
        <Calender />
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
    </div>
  );
};

export default InterfaceDoctor;
