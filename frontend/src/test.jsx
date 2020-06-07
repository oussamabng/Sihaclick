import React from "react";
import CalenderMobile from "./components/CalenderMobile/CalenderMobile.jsx";

const test = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "40vh",
        padding: "4rem 2rem",
      }}
    >
      <CalenderMobile />
    </div>
  );
};

export default test;
