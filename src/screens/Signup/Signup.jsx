import React from "react";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import HeroSignup from "../../components/HeroSignup/HeroSignup.jsx";
import FormSignup from "../../components/FormSignup/FormSignup.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Signup = () => {
  return (
    <>
      <HeaderOnScroll header={false} isLogin={false} />
      <Navigation />
      <HeroSignup />
      <FormSignup />
      <Footer />
    </>
  );
};

export default Signup;
