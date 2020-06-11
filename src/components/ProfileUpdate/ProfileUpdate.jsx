import React, { useState, useEffect } from "react";
import { Input, Icon, Checkbox, Segment, Dropdown } from "semantic-ui-react";
import axios from "axios";

import { login } from "../../actions/authActions.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//? import css
import "./ProfileUpdate.css";

const ProfileUpdate = (props) => {
  const friendOptions = [
    {
      key: "dons de sang",
      text: "dons de sang",
      value: "dons de sang",
    },
    {
      key: "demande un stage",
      text: "demande un stage",
      value: "demande un stage",
    },
    {
      key: "un don de médicament",
      text: "un don de médicament",
      value: "un don de médicament",
    },
    {
      key: "un don de materiel",
      text: "un don de materiel",
      value: "un don de materiel",
    },
    {
      key: "voir la liste des dons de médicaments",
      text: "voir la liste des dons de médicaments",
      value: "voir la liste des dons de médicaments",
    },
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [Lastname, setLastname] = useState("");
  const [isUpdateMail, setisUpdateMail] = useState(false);
  const [isUpdateAdr, setisUpdateAdr] = useState(false);
  const [isUpdatePhone, setIsUpdatePhone] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  const [isUpdateLangue, setisUpdateLangue] = useState(false);
  const [isUpdateFullname, setUpdateFullname] = useState(false);
  const [phone, setPhone] = useState("");
  const [blood_group, setBloodGroup] = useState("");
  const [adr, setAdr] = useState("");
  const [image, setImage] = useState("");
  const [isNotificated, setisNotificated] = useState(false);
  const [language, setLanguague] = useState(1);

  const langueOptions = [
    {
      key: 1,
      text: "Francais",
      value: 1,
    },
    {
      key: 0,
      text: "Arabe",
      value: 0,
    },
  ];

  const handleUpdateMail = () => {
    setisUpdateMail((prevState) => !prevState);
  };
  const handleFullname = () => {
    setUpdateFullname((prevState) => !prevState);
  };
  const handleUpdateLanguage = () => {
    setisUpdateLangue((prevState) => !prevState);
  };
  const handleUpdatePsw = () => {
    setIsUpdatePassword((prevState) => !prevState);
  };
  const handleUpdatePhone = () => {
    setIsUpdatePhone((prevState) => !prevState);
  };
  const handleUpdateAdr = () => {
    setisUpdateAdr((prevState) => !prevState);
  };
  const handleNotificated = () => {
    //!TODO request put
    setisNotificated((prevState) => !prevState);
  };
  const handleInputChange = (e, { value, name }) => {
    if (name === "email") {
      setEmail(value);
    } else if (name === "adr") {
      setAdr(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "first_name") {
      setFirstName(value);
    } else if (name === "last_name") {
      setLastname(value);
    }
  };
  // const handleChangeInputLanguage =(e,{name,value})=>{
  // console.log(e.currentTarget);
  // console.log({name,value});
  // }
  useEffect(() => {
    setIsLoading(true);
    props.login({});
    console.log({ tokenX: props.token });
    axios
      .create({
        headers: {
          get: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${props.token}`,
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
        setLastname(res.data.lastname);
        setFirstName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setBloodGroup(res.data.blood_group.group + type_blood);
        setAdr(
          res.data.chaab.address.address +
            "-" +
            res.data.chaab.address.commune.wilaya.nom
        );
        setLanguague(res.data.chaab.language);
        setisNotificated(res.data.chaab.blood_notification);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.reponse);
      });
  }, [props]);
  const handleUpdate = (e) => {
    //update mail
    let name = e.currentTarget.attributes["name"].value;
    switch (name) {
      case "email":
        if (!isUpdateMail) {
          handleUpdateMail();
        } else {
          changeData("email");
        }
        break;
      case "adr":
        if (!isUpdateAdr) {
          handleUpdateAdr();
        } else {
          changeData("adr");
        }
        break;
      case "phone":
        if (!isUpdatePhone) {
          handleUpdatePhone();
        } else {
          changeData("phone");
        }
        break;
      case "password":
        if (!isUpdatePassword) {
          handleUpdatePsw();
        } else {
          changeData("password");
        }
        break;
      case "langue":
        if (!isUpdateLangue) {
          handleUpdateLanguage();
        } else {
          changeData("langue");
        }
        break;
      case "fullname":
        if (!isUpdateFullname) {
          handleFullname();
        } else {
          changeData("password");
        }
        break;
      default:
        break;
    }
  };
  const changeData = (type) => {
    switch (type) {
      case "email":
        break;

      default:
        break;
    }
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
          {!isUpdateFullname && <h1>{firstName + " " + Lastname}</h1>}
          {isUpdateFullname && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
              className="fullname_mobile"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Input
                  type="text"
                  className="input_update_profile"
                  value={firstName}
                  name="first_name"
                  onChange={handleInputChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0 1rem",
                }}
              >
                <Input
                  type="text"
                  className="input_update_profile"
                  value={Lastname}
                  name="last_name"
                  onChange={handleInputChange}
                />
                <Icon
                  name="times"
                  size="large"
                  className="pointer"
                  onClick={handleFullname}
                />
              </div>
            </div>
          )}
          <span onClick={handleUpdate} name="fullname">
            {isUpdateFullname ? "Confimer" : "Changer"}
          </span>
          <div className="lists">
            <Dropdown
              text="Ajouter"
              icon="add"
              floating
              selection
              labeled
              button
              className="icon"
            >
              <Dropdown.Menu>
                {friendOptions.map((option) => (
                  <Dropdown.Item key={option.value} {...option} />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="info_data">
        <p>Sign-In Email</p>
        <div className="confirm_edit">
          {!isUpdateMail && (
            <div className="flexLAbel">
              <h4>Sign-In Email</h4>
              <p>{email}</p>
            </div>
          )}
          {isUpdateMail && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="flexLAbel">
                <h4>Sign-In Email</h4>
                <Input
                  type="text"
                  className="input_update_profile"
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                />
                <Icon name="times" size="large" onClick={handleUpdateMail} />
              </div>
            </div>
          )}
          <span onClick={handleUpdate} name="email">
            {isUpdateMail ? "Confimer" : "Changer"}
          </span>
        </div>
      </div>
      <div className="info_data">
        <p>Mot de pass</p>
        <div className="confirm_edit">
          {!isUpdatePassword && (
            <div className="flexLAbel">
              <h4>Mot de pass</h4>
              <p>{"***********"}</p>
            </div>
          )}
          {isUpdatePassword && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="flexLAbel">
                <h4>Mot de pass</h4>
                <Input
                  type="password"
                  className="input_update_profile"
                  value="****************"
                  name="password"
                  onChange={handleInputChange}
                />
                <Icon name="times" size="large" onClick={handleUpdatePsw} />
              </div>
            </div>
          )}
          <span onClick={handleUpdate} name="password">
            {isUpdatePassword ? "Confimer" : "Changer"}
          </span>
        </div>
      </div>
      <div className="info_data">
        <p>Adresse</p>
        <div className="confirm_edit">
          {!isUpdateAdr && (
            <div className="flexLAbel">
              <h4>Adresse</h4>
              <p>{adr}</p>
            </div>
          )}
          {isUpdateAdr && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="flexLAbel">
                <h4>Adresse</h4>
                <Input
                  type="text"
                  className="input_update_profile"
                  value={adr}
                  name="adr"
                  onChange={handleInputChange}
                />
                <Icon name="times" size="large" onClick={handleUpdateAdr} />
              </div>
            </div>
          )}
          <span onClick={handleUpdate} name="adr">
            {isUpdateAdr ? "Confimer" : "Changer"}
          </span>
        </div>
      </div>
      <div className="info_data">
        <p>Langue</p>
        <div className="confirm_edit">
          {!isUpdateLangue && (
            <div className="flexLAbel">
              <h4>Langue</h4>
              <p>{language === 1 ? "Francais" : "Arabe"}</p>
            </div>
          )}
          {isUpdateLangue && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="flexLAbel">
                <h4>Langue</h4>
                <Dropdown
                  className="droplangue"
                  placeholder="Choisie une langue"
                  value={language}
                  selection
                  options={langueOptions}
                />
                <Icon
                  name="times"
                  size="large"
                  onClick={handleUpdateLanguage}
                />
              </div>
            </div>
          )}
          <span onClick={handleUpdate} name="langue">
            {isUpdateLangue ? "Confimer" : "Changer"}
          </span>
        </div>
      </div>
      <div className="info_data">
        <div className="flexLAbel">
          <h4>Type de sang</h4>
          <div className="confirm_edit">
            <p>{blood_group}</p>
          </div>
        </div>
        <p>Type de sang</p>
        <div className="confirm_edit hide">
          <p>{blood_group}</p>
        </div>
      </div>
      <div className="info_data">
        <p>Num de telephone</p>
        <div className="confirm_edit">
          {!isUpdatePhone && (
            <div className="flexLAbel">
              <h4>Num de telephone</h4>
              <p>{phone}</p>
            </div>
          )}
          {isUpdatePhone && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="flexLAbel">
                <h4>Num de telephone</h4>
                <Input
                  type="text"
                  className="input_update_profile"
                  value={phone}
                  name="phone"
                  onChange={handleInputChange}
                />
                <Icon name="times" size="large" onClick={handleUpdatePhone} />
              </div>
            </div>
          )}
          <span onClick={handleUpdate} name="phone">
            {isUpdatePhone ? "Confimer" : "Changer"}
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

ProfileUpdate.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps, { login })(ProfileUpdate);
