import React from "react";

//? import css
import "./HeaderLoginMobile.css";

import { ReactComponent as Notification } from "../../assets/notification.svg";
import { ReactComponent as Toggle } from "../../assets/toggle.svg";

const HeaderLoginMobile = (props) => {
  return (
    <div className="mobile_login_mobile">
      <Toggle className="tog" onClick={props.click} />
      <Notification />
    </div>
  );
};

export default HeaderLoginMobile;
