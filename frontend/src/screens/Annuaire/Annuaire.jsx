import React from "react";

//? import css
import "./Annuaire.css";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HeroAnnuaire from "../../components/HeroAnnuaire/HeroAnnuaire.jsx";
import AnnuaireAnnonce from "../../components/AnnuaireAnnonce/AnnuaireAnnonce.jsx";
import SidebarGeneral from "../../components/SidebarGeneral/SidebarGeneral.jsx";

const Annuaire = () => {
  const [visible, setVisible] = React.useState(false);
  const handleVisible = () => {
    setVisible((prevState) => !prevState);
  };
  return (
    <>
      <HeaderOnScroll header={false} handleVisible={handleVisible} />
      <SidebarGeneral
        isFrench={true}
        handleVisible={handleVisible}
        visible={visible}
        navs={[
          { isDropdown: false, value: "Accueil", list: null },
          { isDropdown: false, value: "Annuaire", list: null },
          {
            isDropdown: true,
            value: "Echange",
            list: [
              { value: "Dons blood", link: "/blood" },
              { value: "Dons medicament", link: "/medicament" },
              { value: "Dons material", link: "/" },
            ],
          },
          { isDropdown: false, value: "Blog", list: null },
          { isDropdown: false, value: "Evenement", list: null },
          { isDropdown: false, value: "Contactez", list: null },
          { isDropdown: false, value: "A props de nous", list: null },
        ]}
      />
      <Navigation notLine={false} active="annuaire" />
      <HeroAnnuaire />
      <AnnuaireAnnonce isFrench={true} />
      <Footer />
    </>
  );
};

export default Annuaire;
