import React from "react";
import { Icon, Image } from "semantic-ui-react";

//? import css
import "./HeaderOnScroll.css";

//? import logo
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Comment } from "../../assets/comment.svg";
import { ReactComponent as Notification } from "../../assets/notification.svg";

//? import user img
import User from "../../assets/alex.jpg";

export default function HeaderOnScroll(props) {
  const { isLogin, header } = props;
  return (
    <div
      className={!header ? "_home_header shadow" : "_home_header shadow fixed"}
      style={{
        background: !header ? "#13C2D4" : "white",
      }}
    >
      <div className="navbar">
        <Logo
          style={{
            visibility: !header ? "hidden" : "1",
          }}
        />
        <ul className={!header ? "coords_list not_header" : "coords_list"}>
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
        {isLogin && (
          <div
            className="home_action login"
            style={{
              visibility: !header ? "hidden" : "1",
            }}
          >
            <Comment />
            <Notification />
            <Image src={User} />
          </div>
        )}
        {!isLogin && (
          <div
            className="home_action"
            style={{
              visibility: !header ? "hidden" : "1",
            }}
          >
            <Icon name="search" />
            <a href="/signin" className="_margin_horizontal_sm blue">
              Sign in
            </a>
            <a href="/signup" className="btn _margin_horizontal_sm">
              Sign up
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
