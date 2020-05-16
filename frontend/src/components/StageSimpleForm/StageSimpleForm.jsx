import React from "react";
import { Dropdown, Button } from "semantic-ui-react";
import { ReactComponent as Arrow } from "../../assets/arrow_big.svg";
import { ReactComponent as ArrowMin } from "../../assets/arrow.svg";

//? import css
import "./StageSimpleForm.css";
const trigger = (
  <span className="dropdown_title">
    <p>.</p>
    Médecine <Arrow />
  </span>
);
const trigger1 = (
  <span className="dropdown_title">
    <p>.</p>
    Stage de fin d’étude <Arrow />
  </span>
);
const trigger2 = (
  <span className="dropdown_title">
    <p>.</p>
    2021 <Arrow />
  </span>
);

const StageSimpleForm = () => {
  const options = [
    { key: 0, text: "Pharmacie" },
    { key: 1, text: "médecine dentaire" },
    { key: 2, text: "Biologie" },
    { key: 3, text: "médecine vétérinaire" },
    { key: 4, text: "paramédical" },
  ];
  const options1 = [
    { key: 0, text: "Stage de fin d’étude" },
    { key: 1, text: "Stage universitaire" },
  ];
  const options2 = [
    { key: 0, text: "2021" },
    { key: 1, text: "2022" },
    { key: 2, text: "2023" },
    { key: 3, text: "2024" },
  ];
  return (
    <div className="stage_form hero_stage hero_medicament">
      <div className="circle_right"></div>
      <div className="form_dropwdown">
        <div className="item_dropdown">
          <p>Vous êtes un étudiant en:</p>
          <Dropdown
            trigger={trigger}
            options={options}
            className="dropdown_stage"
          />
        </div>{" "}
        <div className="item_dropdown lg">
          <p>Vous souhaitez effectuer ce stage dans le cadre:</p>
          <Dropdown
            trigger={trigger1}
            options={options1}
            className="dropdown_stage lg"
          />
        </div>
        <div className="item_dropdown sm">
          <p>Précisez l’année:</p>
          <Dropdown
            trigger={trigger2}
            options={options2}
            className="dropdown_stage sm"
          />
        </div>
      </div>
      <Button>
        <p>.</p>
        Confirmer
        <ArrowMin />
      </Button>
    </div>
  );
};

export default StageSimpleForm;
