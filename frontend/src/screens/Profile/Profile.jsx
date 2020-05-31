import React,{useEffect} from "react";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar.jsx";

import { useHistory, withRouter } from "react-router-dom";
//? redux part
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Profile = (props) => {
  const history = useHistory();
  useEffect(()=>{
    if (!props.isLogin){
      history.push("/")
    }
    else{
      history.push("/profile/update")
    }
  },[])
  return (
    <>
      <HeaderOnScroll header={false} isLogin={props.isLogin} />
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
Profile.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  isLogin: state.auth.isLogin,
});
export default connect(mapStateToProps,{})(withRouter(Profile)) ;
