import React from "react";

import "./BackdropProfile.css";

const BackdropProfile = (props) => {
  return <div className="backdrop_profile" onClick={props.click} />;
};

export default BackdropProfile;
