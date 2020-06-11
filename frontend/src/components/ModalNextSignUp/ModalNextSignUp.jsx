import React, { useState, useEffect } from "react";
import { Modal, Dropdown, Checkbox, Button } from "semantic-ui-react";

import "./ModalNextSignUp.css";
//? import arrow
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const ModalNextSignUp = (props) => {
  const friendOptions = [
    {
      key: 1,
      text: "A",
      value: "A",
    },
    {
      key: 2,
      text: "B",
      value: "B",
    },
    {
      key: 3,
      text: "AB",
      value: "AB",
    },
    {
      key: 4,
      text: "O",
      value: "O",
    },
  ];
  const [open, setOpen] = useState(null);
  const {
    setShow,
    submitErr,
    handleSubmitErr,
    handleRules,
    handleSubmit,
    btnLoading,
    acceptRules,
    show,
    typeBlood,
    isPositive,
    handlePositive,
    handleType,
    handleAccept,
    acceptNotif,
  } = props;
  useEffect(() => {
    setOpen(show);
  }, [show]);
  const handleNextSubmit = () => {
    if (submitErr) {
      handleSubmitErr();
    } else {
      handleSubmit();
    }
  };
  return (
    <Modal
      className="modal_signup"
      closeIcon
      size="small"
      open={open}
      onClose={() => {
        handleRules();
        setShow(false);
      }}
      className="modal_login modal_signup sidebar_dons"
    >
      <div className="circle_hey"></div>
      <div className="row">
        <div className="col info">
          <div className="title_signup">
            <p>Information a remplire</p>
            <div className="content_sidebar">
              <div
                style={{
                  position: "relative",
                }}
              >
                <p>Groupe sanguin</p>
                <Dropdown
                  value={typeBlood}
                  onChange={handleType}
                  openOnFocus
                  selection
                  icon={null}
                  options={friendOptions}
                  style={{
                    display: "relative",
                  }}
                ></Dropdown>
                <Arrow className="tesdeg" />
              </div>
            </div>
            <div className="type_content">
              <Checkbox
                radio
                label="Positive +"
                checked={isPositive}
                onChange={handlePositive}
              />
              <Checkbox
                radio
                label="Négative -"
                checked={!isPositive}
                onChange={handlePositive}
              />
            </div>
          </div>
          <div className="type_content blue">
            <Checkbox
              radio
              label="Je veut receveé des notification de dans de sang"
              checked={acceptNotif}
              onClick={handleAccept}
            />
          </div>
          <div
            className={
              submitErr
                ? "_checkbox type_content"
                : "_checkbox type_content blue"
            }
          >
            <Checkbox
              radio
              checked={acceptRules}
              onClick={handleRules}
              label={
                <label>
                  <p>
                    J’ai lu et j’accepte{" "}
                    <span>les conditions d’utilisation .</span>
                  </p>
                </label>
              }
            />
          </div>
          <div className="btn_signup_modal">
            <Button loading={btnLoading} onClick={handleNextSubmit}>
              <p
                style={{
                  visibility: "hidden",
                }}
              >
                .
              </p>
              <p>Inscrire</p>
              <Arrow />
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalNextSignUp;
