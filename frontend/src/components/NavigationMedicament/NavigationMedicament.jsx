import React from "react";

//? import css
import "./NavigationMedicament.css";

const NavigationMedicament = () => {
  return (
    <div className="_navigation medicament">
      <ul>
        <li>Accueil</li>
        <li>à Propos</li>
        <li className="active">Nos Professionnels de santé</li>
        <li>TABAROU3cLIK "Dons"</li>
        <li>Médicaments</li>
        <li>Alertes médicament</li>
        <li>Actualité</li>
        <li>Médiatech</li>
        <li>Nous contacter</li>
      </ul>
    </div>
  );
};

export default NavigationMedicament;
