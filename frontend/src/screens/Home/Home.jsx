import React, { useEffect, useState } from "react";

//? import components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HomeHeroSection from "../../components/HomeHeroSection/HomeHeroSection.jsx";
import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import BestDoctors from "../../components/BestDoctors/BestDoctors.jsx";
import News from "../../components/News/News.jsx";
import BloodDonate from "../../components/BloodDonate/BloodDonate.jsx";
import OtherDonations from "../../components/OtherDonations/OtherDonations.jsx";

//? import css
import "./Home.css";

//? import Arrow
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let isTop = window.scrollY < 960;
      isTop ? setIsScrolled(true) : setIsScrolled(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  return (
    <>
      <div className="home">
        <div className="home_img">
          <HomeHeroSection setSlider={setSlider} />
          <Arrow className="previous_arrow" onClick={previous} />
          <Arrow className="next_arrow" onClick={next} />
        </div>
        <Header />
      </div>
      <HeaderOnScroll header={isScrolled} isLogin={false} />
      <BestDoctors />
      <News />
      <BloodDonate />
      <OtherDonations />
      <Footer isBlood={false} />
    </>
  );
}
