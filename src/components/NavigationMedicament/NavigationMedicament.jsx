import React from "react";

//? import css
import "./NavigationMedicament.css";

const NavigationMedicament = (props) => {
  const { nav } = props.selectedLanguage.medicament;
  return (
    <div className="_navigation medicament">
      <ul>
        <li>{nav[0]}</li>
        <li>{nav[1]}</li>
        <li className="active">{nav[2]}</li>
        <li>{nav[3]}</li>
        <li>{nav[4]}</li>
        <li>{nav[5]}</li>
        <li>{nav[6]}</li>
        <li>{nav[7]}</li>
        <li>{nav[8]}</li>
      </ul>
    </div>
  );
};

export default NavigationMedicament;
