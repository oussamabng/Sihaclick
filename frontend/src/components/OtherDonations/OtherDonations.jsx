import React, { useState } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import Slider from "react-slick";

//? import Arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

//? import modal
import AddAnnonce from "../../components/AddAnnonce/AddAnnonce.jsx";

//? import css
import "./OtherDonations.css";

//? import card
import CardDon from "../../components/CardDon/CardDon.jsx";

const OtherDonations = () => {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow((prevState) => !prevState);
  };
  const [activeItem, setActiveItem] = useState("buy");
  const [slider, setSlider] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div className="_best_doc  other_dons">
      <Container className="items_container_dons">
        <Menu widths={3}>
          <Menu.Item
            name="Médicament"
            active={activeItem === "buy"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Livres scientifiques"
            active={activeItem === "sell"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Matériel médical"
            active={activeItem === "rent"}
            onClick={handleItemClick}
          />
        </Menu>
      </Container>
      <Container className="other_dons_container">
        <div className="arr_flex">
          <Arrow isRight={false} slider={slider} />
          <Arrow isRight slider={slider} />
        </div>
        <Slider ref={(c) => setSlider(c)} {...settings}>
          <CardDon />
          <CardDon />
          <CardDon />
          <CardDon />
          <CardDon />
          <CardDon />
          <CardDon />
        </Slider>
        <div className="_btn_other_dons">
          <Button
            className="inverted"
            content="afficher tous les dons"
            icon="plus"
            labelPosition="left"
          />
          <Button
            content="Ajouter une annonce"
            icon="plus"
            labelPosition="left"
            onClick={handleModal}
          />
        </div>
        {show && <AddAnnonce setShow={handleModal} show={show} />}
      </Container>
    </div>
  );
};

export default OtherDonations;
