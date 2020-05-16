import React from "react";

//? import css
import "./HeroAnnuaire.css";
import { Button } from "semantic-ui-react";

import Background from "../../assets/hero_annuaire.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const HeroAnnuaire = () => {
  return (
    <div className="hero_doctor hero_annuaire hero_medicament">
      <div className="circle_left"></div>
      <div className="circle_btn"></div>
      <div className="contents">
        <div className="texts">
          <p>
            Rejoignez notre équipe et devenir un <b>Professionnelle de santé</b>
          </p>
          <Button>
            Rejoigndre maintenant <Arrow />
          </Button>
        </div>
        <div
          className="hero_ann"
          style={{
            backgroundImage: `url('${Background}')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroAnnuaire;
