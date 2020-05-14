import React, { useState, useEffect } from "react";
import { Modal } from "semantic-ui-react";

//? import css
import "./ModalDon.css";

import Teva from "../../assets/teva.png";

const ModalDon = (props) => {
  const { setShow, show } = props;
  const [open, setOpen] = useState(null);
  useEffect(() => {
    setOpen(show);
  }, [show]);
  return (
    <Modal
      size="small"
      open={open}
      onClose={setShow}
      className="modal_don blood_modal"
    >
      <div className="row">
        <div className="img_don_modal">
          <div
            className="doctor_img card_don_img"
            style={{
              backgroundImage: `url(${Teva})`,
            }}
          />
        </div>
        <div className="col">
          <div className="item_info">
            <h1>Nom :</h1>
            <p>Mohamed </p>
          </div>
          <div className="item_info">
            <h1>Prénom :</h1>
            <p>Nadir </p>
          </div>
          <div className="item_info">
            <h1>Numéro de Télephone :</h1>
            <p>+213 985 848 846</p>
          </div>
          <div className="item_info">
            <h1>Nom :</h1>
            <p>Mohamed </p>
          </div>
          <div className="item_info">
            <h1>Nom :</h1>
            <p>Mohamed </p>
          </div>
          <div className="item_info">
            <h1>Nom :</h1>
            <p>Mohamed </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDon;
