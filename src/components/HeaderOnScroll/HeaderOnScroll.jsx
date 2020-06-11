import React, { useEffect, useState } from "react";
import { Icon, Image, Dropdown } from "semantic-ui-react";
import axios from "axios";

//? import css
import "./HeaderOnScroll.css";

//? import logo
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Comment } from "../../assets/comment.svg";
import { ReactComponent as Notification } from "../../assets/notification.svg";
import { ReactComponent as Toggle } from "../../assets/toggle.svg";

//? redux
import { open, logout } from "../../actions/authActions.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter, useHistory } from "react-router-dom";
import { selectLanguage } from "../../actions/languageAction";

//? import Login modal
import Login from "../../components/Login/Login.jsx";

const HeaderOnScroll = (props) => {
  const { handleVisible, hide, toggle, isProfile } = props;
  const history = useHistory();
  const [isShow, setShow] = useState(false);
  const { header } = props;
  const [image, setImage] = useState("");
  const trigger = <Image src={image} />;

  const handleLogout = () => {
    props.logout();
    return history.push("/");
  };

  useEffect(() => {
    setShow(header);
  }, [header]);
  useEffect(() => {
    if (props.isLogin) {
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
          if (res.data.photo_id) {
            setImage("https://sihaclik.com/" + res.data.photo.path);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [props.isLogin]);
  return (
    <div
      className={
        !props.isToggleOpen
          ? hide
            ? isProfile
              ? "_home_header shadow x mobile hideMB"
              : "_home_header shadow x mobile "
            : isProfile
            ? "_home_header shadow x hideMB"
            : "_home_header shadow x"
          : hide
          ? isProfile
            ? "_home_header shadow x mobile no_sticky hideMB"
            : "_home_header shadow x mobile no_sticky "
          : isProfile
          ? "_home_header shadow x no_sticky hideMB"
          : "_home_header shadow x no_sticky"
      }
      style={{
        background: isShow ? "#13C2D4" : "white",
      }}
    >
      <div className="navbar">
        <Logo
          style={{
            visibility: isShow ? "hidden" : "visible",
          }}
        />
        <ul className={isShow ? "coords_list not_header" : "coords_list"}>
          <li>
            {" "}
            <Icon name="phone" />
            +213 528 965 257 / +213 748 954 874
          </li>
          <li>
            <Icon name="mail outline" />
            Support@sihaclick.com
          </li>
          <li>
            <Icon name="map marker alternate" />
            17 Rue Hadad Said, Ain Benian - Alger
          </li>
        </ul>
        {props.isLogin && (
          <div
            className="home_action login"
            style={{
              visibility: isShow ? "hidden" : "visible",
            }}
          >
            <Comment />
            <Notification />
            <Dropdown trigger={trigger} pointing="top right" icon={null}>
              <Dropdown.Menu>
                <Dropdown.Item text="Account" icon="user" to="/admin/profile" />

                <Dropdown.Item
                  text="Sign Out"
                  icon="sign out"
                  onClick={handleLogout}
                />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
        {!props.isLogin && (
          <div
            className="home_action"
            style={{
              visibility: isShow ? "hidden" : "visible",
            }}
          >
            <Icon name="search" />
            <p
              href="/signin"
              className="_margin_horizontal_sm blue"
              onClick={() => props.open()}
            >
              {props.selectLanguage.isFrench ? "Se connecter" : "تسجيل الدخول"}
            </p>
            <a href="/signup" className="btn _margin_horizontal_sm">
              {props.selectLanguage.isFrench ? "S'inscrire " : "تسجيل الحساب"}
            </a>

            {!isShow && (
              <div className="toggle_action_md fill not_home">
                <Toggle
                  onClick={handleVisible}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </div>
            )}
            {!isShow && toggle && (
              <div className="toggle_actionmobile">
                <Toggle
                  onClick={handleVisible}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </div>
            )}
          </div>
        )}
        {props.isOpen && <Login setShow={props.open} show={props.isOpen} />}
      </div>
    </div>
  );
};
HeaderOnScroll.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  open: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  selectLanguage: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isOpen: state.auth.isOpen,
  isLogin: state.auth.isLogin,
  token: state.auth.token,
  selectLanguage: state.language,
});

export default connect(mapStateToProps, { open, logout })(
  withRouter(HeaderOnScroll)
);
