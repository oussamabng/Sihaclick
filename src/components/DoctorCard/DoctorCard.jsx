import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";

//? import img doctor
import Doctor from "../../assets/doctor.jpg";

//? import css
import "./DoctorCard.css";

//? import Modal
import AppointmentModal from "../../components/AppointmentModal/AppointmentModal.jsx";

export default function DoctorCard() {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <div className="card_doctor">
      <Card className="card_doc">
        <div
          className="doctor_img"
          style={{
            backgroundImage: `url(${Doctor})`,
          }}
        />
        <Card.Content>
          <h1>Mohamed Chafik</h1>
          <p>Docteur Specialiste</p>
          <Button
            className="hero_btn card_doc-btn"
            content="Prendre un Rendez-vous"
            icon="right arrow"
            labelPosition="right"
            onClick={handleModal}
          />
        </Card.Content>
      </Card>
      {show && <AppointmentModal setShow={handleModal} show={show} />}
    </div>
  );
}
