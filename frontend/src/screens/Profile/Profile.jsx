import React, { useEffect, useState } from "react";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar.jsx";
import HeaderLoginMobile from "../../components/HeaderLoginMobile/HeaderLoginMobile";
import BackdropProfile from "../../components/BackdropProfile/BackdropProfile";

import { useHistory, withRouter } from "react-router-dom";
//? redux part
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Profile = (props) => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible((prevState) => !prevState);
  };
  const history = useHistory();
  useEffect(() => {
    if (!props.isLogin) {
      history.push("/");
    } else {
      history.push("/profile/update");
    }
  }, [props.isLogin, history]);
  return (
    <>
      <>{visible && <BackdropProfile click={handleVisible} />}</>
      <HeaderOnScroll header={false} isLogin={props.isLogin} />
      <HeaderLoginMobile click={handleVisible} />
      <ProfileSidebar active={props.active} visible={visible} />
      <div className="left_it">{props.componentChild}</div>
    </>
  );
};
Profile.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  isLogin: state.auth.isLogin,
});
export default connect(mapStateToProps, {})(withRouter(Profile));
