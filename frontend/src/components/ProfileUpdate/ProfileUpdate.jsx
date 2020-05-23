import React, { useState, useEffect } from "react";
import { Input, Icon, Checkbox, Segment } from "semantic-ui-react";
import axios from "axios";

//? import css
import "./ProfileUpdate.css";

const ProfileUpdate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [blood_group, setBloodGroup] = useState("");
  const [adr, setAdr] = useState("");
  const [image, setImage] = useState("");
  const [isNotificated, setisNotificated] = useState(false);

  const handleUpdate = () => {
    setIsUpdate((prevState) => !prevState);
  };
  const handleNotificated = () => {
    setisNotificated((prevState) => !prevState);
  };
  const handleInputChange = (e, { value, name }) => {
    if (name === "email") {
      setEmail(value);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    axios
      .create({
        headers: {
          get: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("x-token")}`,
          },
        },
      })
      .request({
        url: "https://sihaclik.com/api/chaab/get-chaab",
        method: "get",
      })
      .then((res) => {
        let type_blood = res.data.blood_group.rhesus === 1 ? "+" : "-";
        console.log(res);
        if (res.data.photo_id) {
          setImage("https://sihaclik.com/" + res.data.photo.path);
        }
        setFullName(res.data.name + " " + res.data.lastname);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setBloodGroup(res.data.blood_group.group + type_blood);
        setAdr(
          res.data.chaab.address.address +
            "-" +
            res.data.chaab.address.commune.wilaya.nom
        );

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.reponse);
      });
  }, []);
  const handleUpdateEmail = () => {
    //update mail
  };
  return (
    <Segment loading={isLoading} className="update_profile">
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
              backgroundImage: `url('${image}')`,
            }}
          ></div>
        </div>
        <div className="info">
          <h1>{fullName}</h1>
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
          <p>{adr}</p>

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
          <p>{blood_group}</p>

          <span onClick={handleUpdate}>
            {isUpdate ? "Confimer" : "Changer"}
          </span>
        </div>
      </div>
      <div className="info_data">
        <p>Num de telephone</p>
        <div className="confirm_edit">
          <p>{phone}</p>

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
            checked={isNotificated}
            onClick={handleNotificated}
          />
        </p>
      </div>
    </Segment>
  );
};

export default ProfileUpdate;
