import React, { useState, useEffect } from "react";
import { Modal, Checkbox, Form, Dropdown } from "semantic-ui-react";

import "./ModalBloodAdd.css";

import { ReactComponent as O } from "../../assets/o.svg";
import { ReactComponent as A } from "../../assets/a.svg";
import { ReactComponent as B } from "../../assets/b.svg";
import { ReactComponent as AB } from "../../assets/ab.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const ModalBloodAdd = (props) => {
  const { openModal, setOpenModal } = props;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);
  return (
    <Modal
      size="tiny"
      open={open}
      onClose={() => setOpenModal(false)}
      className="add_blood sidebar_dons"
    >
      <div className="row">
        <h1>Ajouter un dons</h1>
        <div className="blood_types">
          <AB />
          <A />
          <O />
          <B />
        </div>
        <div className="type_content">
          <Checkbox radio label="Positive +" />
          <Checkbox radio label="Négative -" />
        </div>
        <Form>
          <div className="content_sidebar">
            <div
              style={{
                position: "relative",
              }}
            >
              <p>Sang / Plaquettes</p>
              <Dropdown
                openOnFocus
                selection
                icon={null}
                style={{
                  display: "relative",
                }}
              ></Dropdown>
              <Arrow className="tesdeg" />
            </div>
            <div
              style={{
                position: "relative",
              }}
            >
              <p>Wilaya</p>
              <Dropdown
                openOnFocus
                selection
                icon={null}
                style={{
                  display: "relative",
                }}
              ></Dropdown>
              <Arrow className="tesdeg" />
            </div>

            <div
              style={{
                position: "relative",
              }}
            >
              <p>Commune</p>
              <Dropdown
                openOnFocus
                selection
                icon={null}
                style={{
                  display: "relative",
                }}
              ></Dropdown>
              <Arrow className="tesdeg" />
            </div>
            <Form
              style={{
                width: "60%",
              }}
            >
              <Form.Input label="Numéro de Télephone" />
              <Form.Button>
                <p
                  style={{
                    visibility: "hidden",
                  }}
                >
                  .
                </p>
                <p>Confirmer</p> <Arrow />{" "}
              </Form.Button>
            </Form>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalBloodAdd;
