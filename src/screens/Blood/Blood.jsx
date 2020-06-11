import React, { useState } from "react";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import HeroBlood from "../../components/HeroBlood/HeroBlood.jsx";
import BloodAnnonce from "../../components/BloodAnnonce/BloodAnnonce.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import SidebarGeneral from "../../components/SidebarGeneral/SidebarGeneral.jsx";

const Blood = () => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible((prevState) => !prevState);
  };
  return (
    <>
      <HeaderOnScroll handleVisible={handleVisible} header={false} />
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
      <Navigation />
      <HeroBlood />
      <BloodAnnonce />
      <Footer isBlood />
    </>
  );
};

export default Blood;
