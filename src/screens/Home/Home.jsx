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
import Event from "../../components/Event/Event.jsx";
import Stage from "../../components/Stage/Stage.jsx";
import AddEmail from "../../components/AddEmail/AddEmail.jsx";
import Backdrop from "../../components/Backdrop/Backdrop.jsx";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile.jsx";

//? import css
import "./Home.css";

//? import Arrow
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

//? import reddux stuff
import { handleToggle } from "../../actions/toggleAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const Home = (props) => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [slider, setSlider] = useState(null);
  const [visible, setVisible] = React.useState(false);
  const handleVisible = () => {
    setVisible((prevState) => !prevState);

  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (visible) {
        setVisible(false)
      }
      let isTop = window.scrollY < 960;
      isTop ? setIsScrolled(true) : setIsScrolled(false);
    });
  }, [visible]);
  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  return (
    <>
      <div
        className="home"
        onClick={() => {
          if (visible) handleVisible();
        }}
      >
        <>{props.isOpen && <Backdrop />}</>
        <>
          {props.isOpen && <HeaderMobile click={() => props.handleToggle()} />}{" "}
        </>
        <div className={props.isOpen ? "home_img blur" : "home_img"}>
          <HomeHeroSection setSlider={setSlider} />
          <Arrow className="previous_arrow" onClick={previous} />
          <Arrow className="next_arrow" oBETnClick={next} />
        </div>
        <Header dont visible={visible} handleVisible={handleVisible} />
      </div>
      <HeaderOnScroll
        header={isScrolled}
        isLogin={false}
        handleVisible={handleVisible}
        hide={true}
      />
      <BestDoctors />
      <News />
      <BloodDonate />
      <OtherDonations />
      <Event />
      <Stage />
      <AddEmail />
      <Footer isBlood={false} />
    </>
  );
};
Home.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  isOpen: state.toggle.isOpen,
});
export default connect(mapStateToProps, { handleToggle })(withRouter(Home));
