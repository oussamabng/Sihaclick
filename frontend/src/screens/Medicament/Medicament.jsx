import React from "react";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import NavigationMedicament from "../../components/NavigationMedicament/NavigationMedicament.jsx";
import HeroMedicament from "../../components/HeroMedicament/HeroMedicament.jsx";
import MedicamentAnnonce from "../../components/MedicamentAnnonce/MedicamentAnnonce.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Medicament = () => {
  return (
    <>
      <HeaderOnScroll header={false} isLogin={false} />
      <NavigationMedicament />
      <HeroMedicament />
      <MedicamentAnnonce />
      <Footer />
    </>
  );
};

export default Medicament;
