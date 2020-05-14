import React, { useState, useEffect } from "react";
import { Form, Modal, Button, Icon } from "semantic-ui-react";

//? import css
import "./AppointmentModal.css";

const AppointmentModal = (props) => {
  const { setShow, show } = props;
  const [open, setOpen] = useState(null);
  useEffect(() => {
    setOpen(show);
  }, [show]);
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
          <div className="number_age_field">
            <div class="minus">
              <span>-</span>
            </div>
            <Form.Input
              label="Ages"
              type="number"
              className="sha _margin_vertical_sm age_input"
              placeholder="19 ans"
            />
            <div class="plus">
              <span>+</span>
            </div>
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
