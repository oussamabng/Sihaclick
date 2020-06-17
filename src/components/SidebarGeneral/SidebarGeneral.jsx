import React from "react";
import { Icon } from "semantic-ui-react";

//? import css
import "./SidebarGeneral.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { selectLanguage } from "../../actions/languageAction";
import { languages } from "../../languages";

const SidebarGeneral = (props) => {
  const { isFrench } = props.selectedLanguage
  const { navs, visible, handleVisible } = props;
  // navs = [{isDropdown:false,value:"Acceuil",list:null}]
  console.log({ isFrench })
  return (
    <div className={visible ? "sidebar_general visible" : "sidebar_general"}>
      <Icon name="times" style={{
        cursor: "pointer"
      }} onClick={handleVisible} />
      <ul
        style={{
          textAlign: isFrench ? "left" : "right",
        }}
      >
        {navs.map((elm, index) => {
          if (elm.isDropdown) {
            return (
              <>
                <li
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  {elm.value}
                </li>
                <div style={{
                  justifyContent: isFrench ? "flex-end" : "flex-start",
                }} className="list_drp">
                  {elm.list.map((elm, index) => (
                    <a key={index} href={elm.link}>
                      {elm.value}
                    </a>
                  ))}
                </div>
              </>
            );
          } else return <li>{elm.value}</li>;
        })}
      </ul>
    </div>
  );
};


SidebarGeneral.propTypes = {
  selectedLanguage: PropTypes.object.isRequired,

};
const mapStateToProps = (state) => ({
  selectedLanguage: state.language,
});
export default connect(mapStateToProps, {})(
  withRouter(SidebarGeneral)
);
