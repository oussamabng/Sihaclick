import React from "react";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar.jsx";

const Profile = (props) => {
  return (
    <>
      <HeaderOnScroll header={false} isLogin />
      <ProfileSidebar active={props.active} />
      <div
        style={{
          paddingLeft: "260px",
        }}
      >
        {props.componentChild}
      </div>
    </>
  );
};

export default Profile;
