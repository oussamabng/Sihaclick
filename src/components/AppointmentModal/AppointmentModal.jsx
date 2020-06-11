import React, { useState, useEffect } from "react";
import { Form, Modal, Button, Icon } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//? import css
import "./AppointmentModal.css";

const AppointmentModal = (props) => {
  const { setShow, show } = props;
  const [startDate, setstartDate] = useState("");
  const [open, setOpen] = useState(null);
  useEffect(() => {
    setOpen(show);
  }, [show]);
  const handleChange = (date) => {
    setstartDate(date);
  };
  return (
    <Modal
      size="tiny"
      open={open}
      onClose={setShow}
      className="appointment_modal modal_login"
    >
      <div className="row">
        <h2>Prendre un rendez vous</h2>
        <Form>
          <Form.Input
            label="Nom et Prénom"
            type="text"
            className="sha _margin_vertical_sm"
            placeholder="Mohamed Charif"
          />
          <div className="birthday_picker">
            <label htmlFor="datepicker">Birthday</label>
            <DatePicker
              id="datepicker"
              selected={startDate}
              onChange={handleChange}
            />
          </div>
          <Form.TextArea
            rows={6}
            label="Remarque"
            type="text"
            className="_margin_vertical_sm"
            placeholder="Ajouter une description ."
          />
          <div className="form_actions_modal ">
            <Button className="_margin_vertical_sm">
              Confirmer
              <Icon name="long arrow alternate right" />
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AppointmentModal;
