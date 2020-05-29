import React,{useEffect} from "react";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import NavigationMedicament from "../../components/NavigationMedicament/NavigationMedicament.jsx";
import HeroMedicament from "../../components/HeroMedicament/HeroMedicament.jsx";
import MedicamentAnnonce from "../../components/MedicamentAnnonce/MedicamentAnnonce.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Medicament = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
    });
  },[])
  return (
    <>
      <HeaderOnScroll header={false} />
      <NavigationMedicament />
      <HeroMedicament />
      <MedicamentAnnonce />
      <Footer />
    </>
  );
};

export default Medicament;
