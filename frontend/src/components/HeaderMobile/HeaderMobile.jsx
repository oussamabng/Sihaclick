import React, { useState } from "react";
import { Icon, Input, Button } from "semantic-ui-react";

//? import css
import "./HeaderMobile.css";

//? redux
import { open, logout } from "../../actions/authActions.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter, useHistory } from "react-router-dom";

const HeaderMobile = (props) => {
  const { click } = props;
  const [isSearch, setIsSearch] = useState(false);
  const handleSearch = () => {
    setIsSearch((prevState) => !prevState);
  };
  return (
    <div className="header-mobile">
      <div className="parent_row">
        <div className="row">
          <div className="top">
            <Icon name="search" className="cursor" onClick={handleSearch} />
            <Icon name="times" className="cursor" onClick={click} />
          </div>
          <div
            style={{
              padding: "2rem 0",
            }}
            className={isSearch ? "not_hidden" : "hidden"}
          >
            <Input placeholder="Search" />
          </div>
        </div>
        <div className="navs">
          <ul>
            <li>Accueil</li>
            <li>Professionnels de santé</li>
            <li>Médicaments</li>
            <li>Actualité</li>
            <li>Médias</li>
            <li>à Propos</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="btns">
          <p
            style={{
              cursor: "pointer",
            }}
            onClick={props.open}
          >
            Sign in
          </p>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

HeaderMobile.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  open: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isOpen: state.auth.isOpen,
  isLogin: state.auth.isLogin,
  token: state.auth.token,
});

export default connect(mapStateToProps, { open, logout })(
  withRouter(HeaderMobile)
);
