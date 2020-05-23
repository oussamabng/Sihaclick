import React, { useState, useEffect } from "react";
import { Modal, Image } from "semantic-ui-react";

//? import css
import "./ModalDon.css";

const ModalDon = (props) => {
  const {
    setShow,
    show,
    exp,
    name,
    image,
    activeItem,
    wilaya,
    commune,
    phone,
  } = props;
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
          <Image src={image} />
        </div>
        <div className="col">
          <div className="item_info">
            <h1>
              Nom{" "}
              {activeItem === "Médicament"
                ? "de médicament"
                : activeItem === "Livres scientifiques"
                ? "du livre"
                : "du matériel"}{" "}
            </h1>
            <p>{name}</p>
          </div>
          {activeItem === "Médicament" && (
            <div className="item_info">
              <h1>Date de péroption</h1>
              <p>{exp}</p>
            </div>
          )}
          <div className="item_info">
            <h1>Commune,Wilaya</h1>
            <p>
              {commune} - {wilaya}
            </p>
          </div>
          <div className="item_info">
            <h1>Numéro de Télephone</h1>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDon;
