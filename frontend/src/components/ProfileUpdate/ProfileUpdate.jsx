import React, { useState } from "react";
import { Input, Icon, Checkbox } from "semantic-ui-react";

//? import css
import "./ProfileUpdate.css";

import Alex from "../../assets/alex.jpg";

const ProfileUpdate = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [email, setEmail] = useState("Mohamed.chafik@sihaclik.com");
  const handleUpdate = () => {
    setIsUpdate((prevState) => !prevState);
  };
  const handleInputChange = (e, { value, name }) => {
    if (name === "email") {
      setEmail(value);
    }
  };
  return (
    <div className="update_profile">
      <div className="_header">
        <div
          style={{
            height: "100%",
            minWidth: "125px",
          }}
        >
          <div
            className="img_profile"
            style={{
              backgroundImage: `url('${Alex}')`,
            }}
          ></div>
        </div>
        <div className="info">
          <h1>Mohamed Chafik</h1>
          <span>changer</span>
          <div className="lists">
            <p className="active">donner du sang </p>
            <p>demander un stage </p>
            <p>faire un don de médicament</p>
            <p>demander du sang </p>
            <p>voir la liste des dons de médicaments </p>
          </div>
        </div>
      </div>
      <div className="info_data">
        <p>Sign-In Email</p>
        <div className="confirm_edit">
          {!isUpdate && <p>{email}</p>}
          {isUpdate && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Input
                type="text"
                className="input_update_profile"
                value={email}
                name="email"
                onChange={handleInputChange}
              />
              <Icon name="times" size="large" />
            </div>
          )}
          <span onClick={handleUpdate}>
            {isUpdate ? "Confimer" : "Changer"}
          </span>
        </div>
      </div>
      <div className="info_data">
        <p>Mot de pass</p>
        <div className="confirm_edit">
          <p>****************</p>

          <span onClick={handleUpdate}>
            {isUpdate ? "Confimer" : "Changer"}
          </span>
        </div>
      </div>
      <div className="info_data">
        <p>Adresse</p>
        <div className="confirm_edit">
          <p>El Biar - Alger</p>

          <span onClick={handleUpdate}>
            {isUpdate ? "Confimer" : "Changer"}
          </span>
        </div>
      </div>
      <div className="info_data">
        <p>Langue</p>
        <div className="confirm_edit">
          <p>Francais</p>

          <span onClick={handleUpdate}>
            {isUpdate ? "Confimer" : "Changer"}
          </span>
        </div>
      </div>
      <div className="info_data">
        <p>Type de sang</p>
        <div className="confirm_edit">
          <p>A+</p>

          <span onClick={handleUpdate}>
            {isUpdate ? "Confimer" : "Changer"}
          </span>
        </div>
      </div>
      <div className="info_data">
        <p>Num de telephone</p>
        <div className="confirm_edit">
          <p>+213 546 541 963</p>

          <span onClick={handleUpdate}>
            {isUpdate ? "Confimer" : "Changer"}
          </span>
        </div>
      </div>
      <div
        className="type_content blue"
        style={{
          margin: "2rem 0",
        }}
      >
        <p>
          <Checkbox
            radio
            label="notifié en cas de demande de sang compatible avec le demandeur"
            checked
          />
        </p>
      </div>
    </div>
  );
};

export default ProfileUpdate;
