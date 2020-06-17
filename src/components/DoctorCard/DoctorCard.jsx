import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";

//? import css
import "./DoctorCard.css";

//? import Modal
import AppointmentModal from "../../components/AppointmentModal/AppointmentModal.jsx";
import { useEffect } from "react";

export default function DoctorCard(props) {
  const [fullname, setFullname] = useState("");
  const [type, setType] = useState('')
  const [photo, setPhoto] = useState('')
  useEffect(() => {
    setType(props.type)
    setPhoto("https://sihaclik.com/" + props.photo)
    setFullname(props.fullname);
  }, [props.fullname])
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
            backgroundImage: `url(${photo})`,
          }}
        />
        <Card.Content>
          <h1>{fullname}</h1>
          <p>{type}</p>
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
