import React, { useEffect, useState } from "react";

//? import components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HomeHeroSection from "../../components/HomeHeroSection/HomeHeroSection.jsx";
import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";

//? import css
import "./Home.css";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let y = document.body.getBoundingClientRect().top;
      if (y <= -980) {
        setIsScrolled((prevState) => !prevState);
      }
      if (y > 0) {
        setIsScrolled((prevState) => !prevState);
      }
    });
  }, []);
  return (
    <>
      <div className="home">
        <div className="home_img">
          <HomeHeroSection />
        </div>
        <Header />
      </div>
      <HeaderOnScroll header={true} isLogin={false} />
      <p
        className="m-0"
        style={{
          height: "800px",
        }}
      >
        content
      </p>
      <Footer isBlood={false} />
    </>
  );
}
