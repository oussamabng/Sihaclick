import React, { useState, useEffect } from "react";
import { Menu, Container, Button, Grid, Segment } from "semantic-ui-react";
import Slider from "react-slick";
import axios from "axios";

//? import Arrow
import Arrow from "../../components/Arrow/Arrow.jsx";

//? import modal
import AddAnnonce from "../../components/AddAnnonce/AddAnnonce.jsx";

//? import css
import "./OtherDonations.css";

//? import card
import CardDon from "../../components/CardDon/CardDon.jsx";
import { Link } from "react-router-dom";

const OtherDonations = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleModal = () => {
    setShow((prevState) => !prevState);
  };
  const [data, setData] = useState([]);
  const [activeItem, setActiveItem] = useState("Livres scientifiques");
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
  const getMedicament = () => {
    setIsLoading(true);
    axios
      .create({
        headers: {
          get: {
            "Content-Type": "application/json",
          },
        },
      })
      .request({
        url: "https://sihaclik.com/api/public/donnation/drugs/all/all/0/10",
        method: "get",
      })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const getBooks = () => {
    setIsLoading(true);
    axios
      .create({
        headers: {
          get: {
            "Content-Type": "application/json",
          },
        },
      })
      .request({
        url: "https://sihaclik.com/api/public/donnation/books/all/all/0/12",
        method: "get",
      })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const getMaterial = () => {
    setIsLoading(true);
    axios
      .create({
        headers: {
          get: {
            "Content-Type": "application/json",
          },
        },
      })
      .request({
        url:
          "https://sihaclik.com/api/public/donnation/equipments/all/all/0/12",
        method: "get",
      })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const handleItemClick = (e, { name }) => setActiveItem(name);
  useEffect(() => {
    switch (activeItem) {
      case "Médicament":
        getMedicament();
        break;
      case "Livres scientifiques":
        getBooks();
        break;
      case "Matériel médical":
        getMaterial();
        break;
      default:
        break;
    }
  }, [activeItem]);
  return (
    <div className="_best_doc  other_dons">
      <Container className="items_container_dons">
        <Menu widths={3}>
          <Menu.Item
            name="Médicament"
            active={activeItem === "Médicament"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Livres scientifiques"
            active={activeItem === "Livres scientifiques"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Matériel médical"
            active={activeItem === "Matériel médical"}
            onClick={handleItemClick}
          />
        </Menu>
      </Container>
      <Container className="other_dons_container">
        {data.length > 4 && (
          <div className="arr_flex">
            <Arrow isRight={false} slider={slider} />
            <Arrow isRight slider={slider} />
          </div>
        )}
        {activeItem === "Médicament" && (
          <>
            {data.length > 4 ? (
              <Segment loading={isLoading}>
                <Slider ref={(c) => setSlider(c)} {...settings}>
                  {data.map((elm, index) => (
                    <CardDon key={index} data={elm} />
                  ))}
                </Slider>
              </Segment>
            ) : (
              <Segment loading={isLoading}>
                <Grid
                  stackable
                  columns="equal"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {data.map((elm, index) => (
                    <CardDon key={index} data={elm} activeItem={activeItem} />
                  ))}
                </Grid>
              </Segment>
            )}
          </>
        )}
        {activeItem === "Livres scientifiques" && (
          <>
            {data.length > 4 ? (
              <Segment loading={isLoading}>
                <Slider ref={(c) => setSlider(c)} {...settings}>
                  {data.map((elm, index) => (
                    <CardDon key={index} data={elm} />
                  ))}
                </Slider>
              </Segment>
            ) : (
              <Segment loading={isLoading}>
                <Grid
                  stackable
                  columns="equal"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {data.map((elm, index) => (
                    <CardDon key={index} data={elm} activeItem={activeItem} />
                  ))}
                </Grid>
              </Segment>
            )}
          </>
        )}
        {activeItem === "Matériel médical" && (
          <>
            {data.length > 4 ? (
              <Segment loading={isLoading}>
                <Slider ref={(c) => setSlider(c)} {...settings}>
                  {data.map((elm, index) => (
                    <CardDon key={index} data={elm} />
                  ))}
                </Slider>
              </Segment>
            ) : (
              <Segment loading={isLoading}>
                <Grid
                  stackable
                  columns="equal"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {data.map((elm, index) => (
                    <CardDon key={index} data={elm} activeItem={activeItem} />
                  ))}
                </Grid>
              </Segment>
            )}
          </>
        )}
        <div
          className="_btn_other_dons"
          style={{
            paddingTop: "4rem",
          }}
        >
          <Button
            className="inverted"
            content="afficher tous les dons"
            as={Link}
            to="/medicament"
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
