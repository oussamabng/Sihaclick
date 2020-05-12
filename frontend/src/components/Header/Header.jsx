import React from "react";
import { Menu, Icon } from "semantic-ui-react";

//? import css
import "./Header.css";

//? import logo
import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className="_home_header">
      <div className="navbar">
        <Logo className="white" />
        <div className="navigation">
          <Menu pointing secondary>
            <Menu.Item name="Accueil" className="border" />
            <Menu.Item name="Professionnels de santé" />
            <Menu.Menu>
              <Menu.Item name="Dons" className="dons" />
              <div className="dropdown">
                <ul>
                  <li>
                    <a href="/">Echange de sang</a>
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
          <a href="/signin" className="_margin_horizontal_sm ">
            Sign in
          </a>
          <a href="/signup" className="btn _margin_horizontal_sm">
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}
