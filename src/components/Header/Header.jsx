import React from "react";
import { Menu, Icon } from "semantic-ui-react";

//? import css
import "./Header.css";


//? import Login modal
import Login from "../../components/Login/Login.jsx";
import { languages } from "../../languages";
import { selectLanguage } from "../../actions/languageAction";
import { open } from "../../actions/authActions.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
//? import logo
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Toggle } from "../../assets/toggle.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

import { handleToggle } from "../../actions/toggleAction";

const Header = (props) => {
  const { navs, dropdown } = props.selectedLanguage.header;
  const { visible, handleVisible, dont } = props;
  return (
    <header className="_home_header">

      <div className="navbar">
        <div className="logoo">
          <Logo className="white" />
        </div>
        <div className="navigation">
          {props.isOpen && (
            <Login setShow={() => props.open()} show={props.isOpen} />
          )}
          <Menu pointing secondary>
            <Menu.Item name={navs[0]} className="border" />
            <Menu.Item name={navs[1]} />
            <Menu.Menu>
              <Menu.Item name={navs[2]} className="dons x" />
              <div className="dropdown">
                <ul>
                  <li>
                    <a href="/blood">{dropdown[0]}</a>
                  </li>
                  <li>
                    <a href="/medicament">{dropdown[1]}</a>
                  </li>
                  <li>
                    <a href="/">{dropdown[2]}</a>
                  </li>{" "}
                  <li>
                    <a href="/">{dropdown[3]}</a>
                  </li>
                </ul>
              </div>
            </Menu.Menu>
            <Menu.Item className="end" name={navs[3]} />
            <Menu.Item className="end" name={navs[4]} />
            <Menu.Item className="end" name={navs[5]} />
            <Menu.Item className="end" name={navs[6]} />
            <Menu.Menu>
              <Menu.Item className="dons notend" >
                Autres
                <Arrow />
              </Menu.Item>
              <div className="dropdown">
                <ul>
                  <li>
                    <a href="/blood">{navs[3]}</a>
                  </li>
                  <li>
                    <a href="/medicament">{navs[4]}</a>
                  </li>
                  <li>
                    <a href="/">{navs[5]}</a>
                  </li>{" "}
                  <li>
                    <a href="/">{navs[6]}</a>
                  </li>
                </ul>
              </div>
            </Menu.Menu>

          </Menu>
        </div>
        <div className="home_action btns">
          <Icon name="search" />
          <p className="_margin_horizontal_sm " onClick={() => props.open()}>
            {props.selectedLanguage.isFrench ? "Sign in" : "تسجيل الدخول"}
          </p>
          <a href="/signup" className="btn _margin_horizontal_sm">
            {props.selectedLanguage.isFrench ? "Sign up" : "سجل"}
          </a>
          <div className={dont ? "toggle_action_md hide" : "toggle_action_md"}>
            <Toggle
              onClick={handleVisible}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className="toggle_action header">
          <Toggle onClick={props.handleToggle} />
        </div>
      </div>
    </header>
  );
};
Header.prototype = {
  open: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.language,
    isOpen: state.auth.isOpen,
  };
};
export default connect(mapStateToProps, { selectLanguage, open, handleToggle })(
  withRouter(Header)
);
