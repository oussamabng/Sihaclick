import React from "react";

//? import components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

//? import css
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home_img"></div>
        <Header />
      </div>
      <p className="m-0">content</p>
      <Footer isBlood={false} />
    </>
  );
}
