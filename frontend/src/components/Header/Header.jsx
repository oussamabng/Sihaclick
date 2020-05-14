import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";

//? import css
import "./Header.css";

//? import Login modal
import Login from "../../components/Login/Login.jsx";

//? import logo
import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <header className="_home_header">
      <div className="navbar">
        <Logo className="white" />
        <div className="navigation">
          {show && <Login setShow={handleModal} show={show} />}
          <Menu pointing secondary>
            <Menu.Item name="Accueil" className="border" />
            <Menu.Item name="Professionnels de santé" />
            <Menu.Menu>
              <Menu.Item name="Dons" className="dons" />
              <div className="dropdown">
                <ul>
                  <li>
                    <a href="/blood">Echange de sang</a>
                  </li>
                  <li>
                    <a href="/">Echange de médicament</a>
                  </li>
                  <li>
                    <a href="/">Echange de livres</a>
                  </li>{" "}
                  <li>
                    <a href="/">Echange de materielle</a>
                  </li>
                </ul>
              </div>
            </Menu.Menu>
            <Menu.Item name="Actualité" />
            <Menu.Item name="Médias" />
            <Menu.Item name="à Propos" />
            <Menu.Item name="Contacts" />
          </Menu>
        </div>
        <div className="home_action">
          <Icon name="search" />
          <p className="_margin_horizontal_sm " onClick={handleModal}>
            Sign in
          </p>
          <a href="/signup" className="btn _margin_horizontal_sm">
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}
