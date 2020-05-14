import React, { useState, useEffect } from "react";
import { Modal, Icon } from "semantic-ui-react";

//? import css
import "./BloodModal.css";

import { ReactComponent as O } from "../../assets/o.svg";
import { ReactComponent as A } from "../../assets/a.svg";
import { ReactComponent as B } from "../../assets/b.svg";
import { ReactComponent as AB } from "../../assets/ab.svg";

import { ReactComponent as Plaquette } from "../../assets/plaquette.svg";

const BloodModal = (props) => {
  const { setShow, show, isPlaquette, isPositive, typeBlood } = props;
  const [open, setOpen] = useState(null);
  useEffect(() => {
    setOpen(show);
  }, [show]);
  return (
    <Modal size="mini" open={open} onClose={setShow} className="blood_modal">
      <div className="row">
        <div className="modal_img">
          {!isPlaquette && (
            <div className="blood_icon">
              {typeBlood === "O" && <O />}
              {typeBlood === "A" && <A />}
              {typeBlood === "AB" && <AB />}
              {typeBlood === "B" && <B />}
              {isPositive ? (
                <Icon name="plus" className="type_blood" />
              ) : (
                <Icon name="minus" className="type_blood" />
              )}
            </div>
          )}
          {isPlaquette && (
            <div className="blood_icon">
              <Plaquette className="icon_plq" />
              {isPositive ? (
                <div className="blood_icon flex">
                  <Icon name="plus" className="type_blood_plaquette" />
                  <p className="_blood_type">{typeBlood}</p>
                </div>
              ) : (
                <div className="blood_icon flex">
                  <Icon name="minus" className="type_blood_plaquette" />
                  <p className="_blood_type">{typeBlood}</p>
                </div>
              )}
            </div>
          )}
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
        </div>
      </div>
    </Modal>
  );
};

export default BloodModal;
