import React from "react";
import { Icon } from "semantic-ui-react";

//? import css
import "./SidebarGeneral.css";

const SidebarGeneral = (props) => {
  const { navs, visible, handleVisible, isFrench } = props;
  // navs = [{isDropdown:false,value:"Acceuil",list:null}]
  return (
    <div className={visible ? "sidebar_general visible" : "sidebar_general"}>
      <Icon name="times" onClick={handleVisible} />
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
                <div className="list_drp">
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

export default SidebarGeneral;
