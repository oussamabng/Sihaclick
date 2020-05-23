import React, { useEffect, useState } from "react";
import { Icon, Image } from "semantic-ui-react";
import axios from "axios";

//? import css
import "./HeaderOnScroll.css";

//? import logo
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Comment } from "../../assets/comment.svg";
import { ReactComponent as Notification } from "../../assets/notification.svg";

//? import user img

//? import Login modal
import Login from "../../components/Login/Login.jsx";

export default function HeaderOnScroll(props) {
  const [isShow, setShow] = useState(false);
  const { isLogin, header } = props;
  const [show, setSHOW] = useState(false);
  const [image, setImage] = useState("");

  const handleModal = () => {
    setSHOW((prevState) => !prevState);
  };
  useEffect(() => {
    setShow(header);
  }, [header]);
  useEffect(() => {
    if (isLogin) {
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
  }, [isLogin]);
  return (
    <div
      className="_home_header shadow x"
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
        {isLogin && (
          <div
            className="home_action login"
            style={{
              visibility: isShow ? "hidden" : "visible",
            }}
          >
            <Comment />
            <Notification />
            <Image src={image} />
          </div>
        )}
        {!isLogin && (
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
              onClick={handleModal}
            >
              Sign in
            </p>
            <a href="/signup" className="btn _margin_horizontal_sm">
              Sign up
            </a>
          </div>
        )}
        {show && <Login setShow={handleModal} show={show} />}
      </div>
    </div>
  );
}
