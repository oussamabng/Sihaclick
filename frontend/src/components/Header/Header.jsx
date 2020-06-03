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
import { handleToggle } from "../../actions/toggleAction";

const Header = (props) => {
  props.selectLanguage(languages.french);
  const { navs, dropdown } = props.selectedLanguage.header;
  return (
    <header className="_home_header">
      <div className="navbar">
        <Logo className="white" />
        <div className="navigation">
          {props.isOpen && (
            <Login setShow={() => props.open()} show={props.isOpen} />
          )}
          <Menu pointing secondary>
            <Menu.Item name={navs[0]} className="border" />
            <Menu.Item name={navs[1]} />
            <Menu.Menu>
              <Menu.Item name={navs[2]} className="dons" />
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
            <Menu.Item name={navs[3]} />
            <Menu.Item name={navs[4]} />
            <Menu.Item name={navs[5]} />
            <Menu.Item name={navs[6]} />
          </Menu>
        </div>
        <div className="home_action">
          <Icon name="search" />
          <p className="_margin_horizontal_sm " onClick={() => props.open()}>
            {props.selectedLanguage.isFrench ? "Sign in" : "تسجيل الدخول"}
          </p>
          <a href="/signup" className="btn _margin_horizontal_sm">
            {props.selectedLanguage.isFrench ? "Sign up" : "سجل"}
          </a>
        </div>
        <div className="toggle_action">
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
