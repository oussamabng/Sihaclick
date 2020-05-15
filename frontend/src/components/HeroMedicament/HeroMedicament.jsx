import React from "react";

//? import css
import "./HeroMedicament.css";

const HeroMedicament = () => {
  return (
    <div className="hero_medicament">
      <div className="circle_left"></div>
      <div className="circle_btn"></div>
      <div className="overlay">
        {" "}
        <div className="info">
          <h1>Votre Besoin on médicament est la</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroMedicament;
