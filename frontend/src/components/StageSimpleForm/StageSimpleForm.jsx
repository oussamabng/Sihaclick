import React, { useEffect, useState } from "react";
import { Dropdown, Button, Input } from "semantic-ui-react";
import { ReactComponent as Arrow } from "../../assets/arrow_big.svg";
import { ReactComponent as ArrowMin } from "../../assets/arrow.svg";

import Etudiant from "../../methods/Etudiant.js";
import Diplome from "../../methods/Diplome.js";
import Resident from "../../methods/Resident.js";
import TypeStage from "../../methods/TypeStage.js";
//? import css
import "./StageSimpleForm.css";

const trigger1 = (
  <span className="dropdown_title">
    <p>.</p>
    Stage de fin d’étude <Arrow />
  </span>
);

const StageSimpleForm = (props) => {
  const { type } = props; //* type if etudiant or resident or diplomé
  //? years input
  const [years, setYears] = useState(null);
  const [choosenYear, setChoosenYear] = useState(null);
  const handleYear = (e, { value }) => {
    setChoosenYear(value);
  };
  //? type speciality
  const [speciality, setSpeciality] = useState("Médecine");
  const [specialities, setSpecialities] = useState(null);
  const handleSpeciality = (e, { value }) => {
    setSpeciality(value);
  };
  //? if no choice yet lock it
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    let temp = [];
    //? case DIPLOME
    if (type === "diplomé") {
      setIsLocked(false);
      window.scrollTo({
        top: 583,
        left: 0,
        behavior: "smooth",
      });
      setChoosenYear(2020);
      setSpecialities(Diplome);
      let initialYear = parseInt(new Date().getFullYear());
      for (let i = 0; i <= 4; i++) {
        temp.push({ key: i, text: String(initialYear), value: initialYear });
        initialYear--;
      }
    }
    //? case RESIDENT
    else if (type === "résident") {
      setIsLocked(false);
      window.scrollTo({
        top: 583,
        left: 0,
        behavior: "smooth",
      });
      setChoosenYear(2020);
      setSpecialities(Resident);
      let initialYear = parseInt(new Date().getFullYear());
      for (let i = initialYear; i <= new Date().getFullYear() + 5; i++) {
        temp.push({ key: i, text: String(i), value: i });
      }
    }
    //? case ETUDIANT
    else if (type === "étudiant") {
      setIsLocked(false);
      window.scrollTo({
        top: 583,
        left: 0,
        behavior: "smooth",
      });
      setChoosenYear(2021);
      setSpecialities(Etudiant);
      let initialYear = parseInt(new Date().getFullYear()) + 1;
      for (let i = initialYear; i <= new Date().getFullYear() + 7; i++) {
        temp.push({ key: i, text: String(i), value: i });
      }
    }
    //? if NO CHOICE ADDED
    else {
      setIsLocked(true);
      setChoosenYear(2021);
      setSpecialities(Etudiant);
      let initialYear = parseInt(new Date().getFullYear()) + 1;
      for (let i = initialYear; i <= 2027; i++) {
        temp.push({ key: i, text: String(i), value: i });
      }
    }
    setYears(temp);
  }, [type]); //* all about year handling

  const triggerYears = (
    <span className="dropdown_title">
      <p>.</p>
      {choosenYear} <Arrow />
    </span>
  );
  const SpecialityTrigger = (
    <span className="dropdown_title">
      <p>.</p>
      {speciality} <Arrow />
    </span>
  );
  //? handle confirm
  const handleAccept = () => {
    setIsLocked(true);
    props.handleConfirmation();
    window.scrollTo({
      top: 998,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="stage_form hero_stage hero_medicament">
      <div className="circle_right"></div>
      <div className={isLocked ? "form_dropwdown locked" : "form_dropwdown"}>
        <div className="item_dropdown">
          <p>Vous êtes un étudiant en:</p>
          <Dropdown
            disabled={isLocked}
            trigger={SpecialityTrigger}
            options={specialities}
            className="dropdown_stage"
            value={speciality}
            onChange={handleSpeciality}
          />
        </div>
        <div className="item_dropdown lg">
          <p>
            {type === "étudiant" &&
              "Vous souhaitez effectuer ce stage dans le cadre:"}
            {type === "résident" && "Précisez la spécialité :"}
            {type === "diplomé" && "Précisez la spécialité :"}
            {type === "Status" &&
              "Vous souhaitez effectuer ce stage dans le cadre:"}
          </p>
          {type === "étudiant" && (
            <Dropdown
              disabled={isLocked}
              trigger={trigger1}
              options={TypeStage}
              className="dropdown_stage lg"
            />
          )}
          {type === "Status" && (
            <Dropdown
              disabled={isLocked}
              trigger={trigger1}
              options={TypeStage}
              className="dropdown_stage lg"
            />
          )}
          {(type === "résident" || type === "diplomé") && (
            <Input
              disabled={isLocked}
              type="text"
              className="stage_input"
              placeholder={"Biochimie"}
            />
          )}
        </div>
        <div className="item_dropdown sm">
          <p>Précisez l’année:</p>
          <Dropdown
            disabled={isLocked}
            trigger={triggerYears}
            options={years}
            value={choosenYear}
            onChange={handleYear}
            className="dropdown_stage sm"
          />
        </div>
      </div>
      <Button
        disabled={isLocked}
        onClick={handleAccept}
        className={props.isConfirmed ? "confirmed_btn" : ""}
      >
        <p>.</p>
        {props.isConfirmed ? "Confirmed" : "Confirmer"}
        <ArrowMin
          style={{
            visibility: props.isConfirmed ? "hidden" : "visible",
          }}
        />
      </Button>
    </div>
  );
};

export default StageSimpleForm;
