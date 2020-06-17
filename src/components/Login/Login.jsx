import React, { useState, useEffect } from "react";
import { Form, Modal, Button, Icon, Message } from "semantic-ui-react";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";
//? redux part
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, logout, open } from "../../actions/authActions";

//? import css
import "./Login.css";

//? import icons
import { ReactComponent as Google } from "../../assets/google_icon.svg";
import { ReactComponent as Facebook } from "../../assets/facebook_login.svg";

const Login = (props) => {
  const history = useHistory();
  const { setShow, show } = props;
  const [open, setOpen] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailErr] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [setErr, setIsErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const handleInput = (e, { name, value }) => {
    if (emailError) {
      setEmailErr(false);
      setEmailErrorMessage("");
    }
    if (setErr) {
      setIsErr(false);
      setErrMessage("");
    }
    if (passwordError) {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .create({
        headers: {
          post: {
            "Content-Type": "application/json",
          },
        },
      })
      .request({
        url: "https://sihaclik.com/api/chaab/login",
        method: "post",
        data: { email, password },
      })
      .then((res) => {
        setIsLoading(false);
        let data = res.data
        let instance = axios.create({
          baseURL: "https://sihaclik.com/api",
          responseType: "json",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data}`,
          }
        });
        instance.get("/chaab/get-chaab")
          .then(res => {
            const auth = {
              token: data,
              user: res.data
            };
            props.open();
            props.login(auth);
            window.location.pathname !== "/"
              ? history.push(window.location.pathname)
              : history.push("/profile/update/");
          })
          .catch(err => {
            console.log(err.response)
          })
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
        if (err.response.data.errors) {
          console.log("errors");
          let errors = err.response.data.errors;
          errors.map((elm) => {
            switch (elm.param) {
              case "email":
                setEmailErr(true);
                setEmailErrorMessage(elm.msg);
                break;
              case "password":
                setPasswordError(true);
                setPasswordErrorMessage(elm.msg);
                break;
              default:
                break;
            }
            return true;
          });
        } else {
          setIsErr(true);
          setErrMessage(err.response.data.error.message);
        }
      });
  };

  useEffect(() => {
    setOpen(show);
  }, [show]);
  return (
    <Modal
      closeIcon
      size="small"
      open={open}
      onClose={setShow}
      className="modal_login _best_doc"
    >
      <div className="circle_login"></div>
      <div className="row">
        <div className="col info">
          <div className="title_best_doc">
            <p>s'identifier</p>
            <div className="plus_title">
              <div className="up"></div>
              <div className="down"></div>
            </div>
          </div>
          <h3>Lorem Ipsum is simply dummy text of the printing </h3>
          <Form error={setErr}>
            <Message error content={errMessage} />
            <div
              style={{
                position: "relative",
              }}
            >
              <Form.Input
                label="Nom d'utilisateur ou email"
                type="text"
                value={email}
                name="email"
                className={emailError ? "sha err" : "sha"}
                onChange={handleInput}
              />
              {emailError && (
                <p className="error_msg">
                  <Icon name="info circle" />
                  {emailErrorMessage}
                </p>
              )}
            </div>
            <div
              style={{
                position: "relative",
              }}
            >
              <Form.Input
                label="Mot de pass"
                type="password"
                name="password"
                value={password}
                onChange={handleInput}
                className={emailError ? "err" : ""}
              />
              {passwordError && (
                <p className="error_msg">
                  <Icon name="info circle" />
                  {passwordErrorMessage}
                </p>
              )}
            </div>
            <div className="form_actions_modal">
              <p>Mot de pass oublier ?</p>
              <Button loading={isLoading} onClick={handleLogin}>
                S'identifier
                <Icon name="long arrow alternate right" />
              </Button>
              <p>Inscriver vous</p>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
Login.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps, { login, logout, open })(
  withRouter(Login)
);
