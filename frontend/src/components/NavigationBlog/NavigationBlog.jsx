import React from "react";
import { Container, Dropdown } from "semantic-ui-react";

//? import css
import "./NavigationBlog.css";

const NavigationBlog = () => {
  const options = [
    { key: 1, text: "Nouveautés", value: "Nouveautés" },
    { key: 2, text: "Contres indications", value: "Contres indications" },
    { key: 3, text: "Effets indésirables", value: "Effets indésirables" },
    { key: 4, text: "Remboursement", value: "Remboursement" },
    { key: 5, text: "BPF", value: "BPF" },
    { key: 6, text: "Bioéquivalence", value: "Bioéquivalence" },
    { key: 7, text: "Générique vs princeps", value: "Générique vs princeps" },
  ];
  return (
    <div className="_navigation blog_navigation">
      <Container>
        <ul>
          <li>Santé</li>
          <li>
            <Dropdown text="Médicament" options={options} simple item />
          </li>
          <li>Prévention</li>
          <li>Economie de santé</li>
          <li> Industrie pharmaceutique</li>
          <li>Nutrition</li>
          <li>Médecine dentaire</li>
          <li>Secourisme</li>
          <li>La psychologie en Algérie</li>
          <li> Hygiène de vie</li>
          <li>Sport</li>
          <li>Sécurité sociale</li>
          <li>Travaux et publications scientifiques</li>
        </ul>
      </Container>
    </div>
  );
};

export default NavigationBlog;
