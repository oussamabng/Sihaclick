import React, { useEffect, useState } from "react";
import { Container, Form, Dropdown, Segment } from "semantic-ui-react";
//? import css
import "./FormSignup.css";
import WhySignup from "../../components/WhySignup/WhySignup.jsx";

import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import Axios from "axios";

import ModalNextSignUp from "../ModalNextSignUp/ModalNextSignUp.jsx";

export default function FormSignup() {
  const [wilayas, setWilayas] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [wilaya, setWilaya] = useState("");
  const [wilayaErr, setWilayaErr] = useState(false);
  const [commune, setCommune] = useState("");
  const [communeErr, setCommuneErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [lastname, setLastname] = useState("");
  const [lastNameErr, setLastnameErr] = useState(false);
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [btnLoading, setBtnLoading] = useState(false);
  const [communeId, setCommuneId] = useState(null);
  const [typeBlood, setTypeBlood] = useState("A");
  const [isPositive, setIsPositive] = useState(false);
  const [acceptNotif, setAcceptNotif] = useState(false);
  const [acceptRules, setAcceptRule] = useState(false);
  const [submitErr, setsubmitErr] = useState(false);

  const handleSubmitErr = () => {
    setsubmitErr((prevState) => !prevState);
  };
  //? for modal
  const [show, setShow] = useState(false);

  function validateEmail(email) {
    const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const handleChangeWilaya = (e, { value }) => {
    if (wilayaErr) setWilayaErr(false);
    setWilaya(value);
  };
  const handleType = (e, { value }) => {
    setTypeBlood(value);
  };
  const handleRules = () => {
    if (submitErr) setsubmitErr(false);
    setAcceptRule((prevState) => !prevState);
  };
  const handlePositive = () => {
    setIsPositive((prevState) => !prevState);
  };
  const handleAccept = () => {
    setAcceptNotif((prevState) => !prevState);
  };
  const handleCommune = (e, { value }) => {
    if (communeErr) setCommuneErr(false);
    setCommune(value);
    setCommuneId(
      communes.filter((elm) =>
        elm.value.toLowerCase().includes(commune.toLowerCase())
      )[0].key
    );
  };
  const handleSignup = () => {
    setBtnLoading(true);
    let body = {
      lastname,
      name,
      email,
      password,
      confirm,
      phone,
      chaab: {
        address: {
          address: null,
          commune: {
            id: communeId,
          },
        },
      },
    };
    let instance = Axios.create({
      baseURL: "https://sihaclik.com/api/",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let instance2 = Axios.create({
      baseURL: "https://sihaclik.com/api/",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (typeBlood.length > 0 && acceptRules) {
      instance2
        .get("public/blood_group")
        .then((res) => {
          let r = isPositive ? 1 : 0;
          let data = res.data.filter(
            (elm) =>
              elm.group.toLowerCase().includes(typeBlood.toLowerCase()) &&
              elm.rhesus === r
          )[0];
          let body_complete = {
            lastname,
            name,
            email,
            blood_group: {
              rhesus: data.rhesus,
              group: data.group,
              id: data.id,
            },
            password,
            confirm,
            phone,
            chaab: {
              blood_notification: acceptNotif,
              language: true,
              address: {
                address: null,
                commune: {
                  id: communeId,
                },
              },
            },
          };

          instance
            .post("chaab/signup/", body_complete)
            .then((res) => {
              setBtnLoading(false);
            })
            .catch((err) => {
              setBtnLoading(false);

              if (err.response.data.errors) {
                err.response.data.errors.map((elm) => {
                  switch (elm.param) {
                    case "name":
                      setNameErr(true);
                      break;
                    case "lastname":
                      setLastnameErr(true);
                      break;
                    case "email":
                      setEmailErr(true);
                      break;
                    case "phone":
                      setPhoneErr(true);
                      break;
                    case "password" || "confirm":
                      setPassErr(true);
                      break;
                    case "chaab.address.commune.id":
                      setCommuneErr(true);
                      break;
                    default:
                      break;
                  }
                  return true;
                });
              }
            });
        })
        .catch((err) => {
          setBtnLoading(false);
        });
    }

    if (!acceptRules) {
      console.log("first step");
      setBtnLoading(true);
      instance
        .post("chaab/signup/", body)
        .then((res) => {
          setBtnLoading(false);
        })
        .catch((err) => {
          let next = true;
          if (err.response.data.errors) {
            if (!wilaya.length > 0) {
              setWilayaErr(true);
            }
            if (!validateEmail(email)) {
              setEmailErr(true);
              next = false;
            }
            if (!communeId) {
              setCommuneErr(true);
              next = false;
            }
            if (phone.length === 10) {
              if (phone[1] === "5" || phone[1] === "6" || phone[1] === "7") {
                console.log("valid numb");
              } else {
                setPhoneErr(true);
                next = false;
              }
            } else {
              console.log("more than 10 or less");
              setPhoneErr(true);
              next = false;
            }
            if (name.length < 4) {
              setNameErr(true);
              next = false;
            }
            if (lastname.length < 4) {
              setLastnameErr(true);
              next = false;
            }
            if (password === confirm) {
            } else {
              setPassErr(true);
              next = false;
            }
            err.response.data.errors.map((elm) => {
              switch (elm.param) {
                case "name":
                  setNameErr(true);
                  next = false;
                  break;
                case "lastname":
                  setLastnameErr(true);
                  next = false;
                  break;
                case "email":
                  setEmailErr(true);
                  next = false;
                  break;
                case "phone":
                  setPhoneErr(true);
                  next = false;
                  break;
                case "password" || "confirm":
                  setPassErr(true);
                  next = false;
                  break;
                case "chaab.address.commune.id":
                  setCommuneErr(true);
                  next = false;
                  break;
                default:
                  break;
              }
              return true;
            });
            if (next) {
              setBtnLoading(false);
              setShow(true);
            }
            return true;
          }
        });
    }
  };
  const handleInput = (e, { name, value }) => {
    switch (name) {
      case "name":
        if (nameErr) setNameErr(false);
        setName(value);
        break;
      case "lastname":
        if (lastNameErr) setLastnameErr(false);
        setLastname(value);
        break;
      case "phone":
        if (phoneErr) setPhoneErr(false);
        setPhone(value);
        break;
      case "email":
        if (emailErr) setEmailErr(false);
        setEmail(value);
        break;
      case "password":
        if (passErr) setPassErr(false);
        setPassword(value);
        break;
      case "confirm":
        if (passErr) setPassErr(false);
        setConfirm(value);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    let instance = Axios.create({
      baseURL: "https://sihaclik.com/api/",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsLoading(true);
    instance
      .get("public/wilaya")
      .then((res) => {
        let tempArrWilaya = [];
        res.data.map((elm) => {
          tempArrWilaya.push({ key: elm.id, value: elm.nom, text: elm.nom });
          return true;
        });
        setWilayas(tempArrWilaya);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    if (wilaya.length > 0) {
      let instance = Axios.create({
        baseURL: "https://sihaclik.com/api/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
      });
      instance
        .get("public/wilaya")
        .then((res) => {
          let tempArrCommunes = [];
          let adr = res.data.filter((elm) =>
            elm.nom.toLowerCase().includes(wilaya.toLowerCase())
          );
          if (adr.length > 0) {
            adr[0].communes.map((elm) => {
              tempArrCommunes.push({
                key: elm.id,
                text: elm.nom,
                value: elm.nom,
              });
              return true;
            });
            setCommunes(tempArrCommunes);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [wilaya]);
  return (
    <Container className="form_signup modal_login">
      <Segment loading={isLoading} className="_best_doc row">
        <div className="title_best_doc">
          <div className="line_title"></div>
          <p>sing-up</p>
        </div>
        <Form>
          <Form.Group>
            <Form.Input
              type="text"
              label="Nom"
              className={nameErr ? " err" : ""}
              onChange={handleInput}
              name="name"
            />
            <Form.Input
              type="text"
              label="Prénom"
              className={lastNameErr ? " err" : ""}
              onChange={handleInput}
              name="lastname"
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              type="text"
              label="Adresse Mail"
              onChange={handleInput}
              name="email"
              className={emailErr && "err"}
            />
            <Form.Input
              type="text"
              className="vsb"
              style={{
                visibility: "hidden",
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              type="password"
              label="Mot de passe"
              onChange={handleInput}
              name="password"
              className={passErr && "err"}
            />
            <Form.Input
              type="password"
              label="Confirmer Mot de passe"
              onChange={handleInput}
              name="confirm"
              className={passErr && "err"}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              type="text"
              label="Numéro de telephone"
              onChange={handleInput}
              className={phoneErr && "err"}
              name="phone"
            />
            <Form.Input
              type="text"
              className="vsb"
              style={{
                visibility: "hidden",
              }}
            />
          </Form.Group>{" "}
          <Form.Group>
            <div
              className="content_sidebar field"
              style={{
                position: "relative",
              }}
            >
              <p>Wilaya</p>
              <Dropdown
                value={wilaya}
                openOnFocus
                selection
                icon={null}
                onChange={handleChangeWilaya}
                options={wilayas}
                style={{
                  display: "relative",
                }}
                className={wilayaErr && "err"}
              ></Dropdown>
              <Arrow className="tesdeg" />
            </div>
            <div
              className="content_sidebar field"
              style={{
                position: "relative",
              }}
            >
              <p>Commune</p>
              <Dropdown
                value={commune}
                openOnFocus
                onChange={handleCommune}
                selection
                icon={null}
                options={communes}
                style={{
                  display: "relative",
                }}
                className={communeErr && "err"}
              ></Dropdown>
              <Arrow className="tesdeg" />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Button loading={btnLoading} onClick={handleSignup}>
              <p
                className="vsb"
                style={{
                  visibility: "hidden",
                }}
              >
                .
              </p>
              <p>Inscription</p>
              <Arrow />
            </Form.Button>
          </Form.Group>
        </Form>
        <ModalNextSignUp
          show={show}
          setShow={setShow}
          acceptNotif={acceptNotif}
          handleType={handleType}
          handlePositive={handlePositive}
          handleAccept={handleAccept}
          isPositive={isPositive}
          typeBlood={typeBlood}
          acceptRules={acceptRules}
          handleRules={handleRules}
          handleSubmit={handleSignup}
          btnLoading={btnLoading}
          handleSubmitErr={handleSubmitErr}
          submitErr={submitErr}
        />
      </Segment>
      <WhySignup />
    </Container>
  );
}
