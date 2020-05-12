import React from "react";
import { Icon } from "semantic-ui-react";

//? import css
import "./HeaderOnScroll.css";

//? import logo
import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function HeaderOnScroll() {
  return (
    <header className="_home_header shadow">
      <div className="navbar">
        <Logo />
        <ul className="coords_list">
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
        <div className="home_action">
          <Icon name="search" />
          <a href="/signin" className="_margin_horizontal_sm blue">
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
