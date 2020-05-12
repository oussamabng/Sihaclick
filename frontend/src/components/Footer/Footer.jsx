import React from "react";
import { Container, Icon, Search } from "semantic-ui-react";

//? import css
import "./Footer.css";

//? import logo
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
const Footer = (props) => {
  const { isBlood } = props;
  return (
    <footer className={isBlood ? "_footer blood" : "_footer"}>
      <div className="navigation">
        <Container>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/">
                <Arrow
                  style={{
                    margin: "0 .5rem",
                  }}
                />
                Echange
              </a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Evenement</a>
            </li>
            <li>
              <a href="/">Contactez</a>
            </li>
            <li>
              <a href="/">Apropos de nous</a>
            </li>
          </ul>
        </Container>
      </div>
      <div className="footer_menu">
        <div className="logo">
          <Logo className="white" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div className="links">
          <div className="title">
            <h3>Lien Rapide</h3>
            <div className="line_title"></div>
          </div>
          <a href="/">Liste des medecins generalistes</a>
          <a href="/">Liste des medecins radiologues</a>
          <a href="/">Liste des pharmaciens</a>
          <a href="/">Liste des medecins nephrologue</a>
        </div>
        <div className="links with_search">
          <div className="title">
            <h3>Information</h3>
            <div className="line_title"></div>
          </div>
          <a href="/">Terms et Conditions</a>
          <a href="/">Politique de confidentialité</a>
          <a href="/">Aide</a>
          <div className="social">
            <Search placeholder="rechercher" size="big" />
          </div>
        </div>
        <div className="links">
          <div className="title">
            <h3>Information</h3>
            <div className="line_title"></div>
          </div>
          <div className="calls">
            <a
              href="/"
              style={{
                padding: "0 .25rem",
              }}
            >
              {" "}
              <Icon name="phone" />
              +213 528 965 257 / +213 748 954 874
            </a>
            <a href="/">
              {" "}
              <Icon name="mail outline" />
              Support@sihaclick.com
            </a>
            <a href="/">
              {" "}
              <Icon name="map marker alternate" />
              17 Rue Hadad Said, Ain Benian - Alger
            </a>
          </div>
          <div className="social">
            <a href="/facebook">
              <Facebook />
            </a>
            <a href="/instagram">
              <Instagram />
            </a>
            <a href="/twitter">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>CopyRight Sihaclick 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
