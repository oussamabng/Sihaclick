import React, { useState } from "react";
import {
  Accordion,
  Dropdown,
  Checkbox,
  Form,
  Transition,
} from "semantic-ui-react";

//? import css
import "./SidebarDons.css";

//? import arrow
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const SidebarDons = (props) => {
  const {
    wilaya,
    commune,
    handleChange,
    isBlood,
    isAnnuaire,
    name,
    isPositive,
    typeBlood,
    handlePositive,
    handleType,
    setIsClicked,
  } = props;
  const { filter } = props.selectedLanguage.medicament;
  const { isFrench } = props.selectedLanguage;
  const [activeIndex, setActive] = useState(0);
  const [activeChecked, setactiveChecked] = useState(false);
  const handleChecked = () => {
    setactiveChecked((prevState) => !prevState);
  };
  const handleClick = () => {
    setActive((prevState) => !prevState);
  };
  const friendOptions = [
    {
      key: 1,
      text: "A",
      value: "A",
    },
    {
      key: 2,
      text: "B",
      value: "B",
    },
    {
      key: 3,
      text: "AB",
      value: "AB",
    },
    {
      key: 4,
      text: "O",
      value: "O",
    },
  ];
  return (
    <div className={isBlood ? "sidebar_dons" : "sidebar_dons blue"}>
      {isAnnuaire && (
        <Accordion>
          <Accordion.Title active={activeIndex} onClick={handleClick}>
            Recherche Par Filtre <Arrow />
          </Accordion.Title>
          <Accordion.Content active={activeIndex}>
            <Transition
              duration={{ hide: 300, show: 300 }}
              visible={activeChecked}
              onHide={handleChecked}
            >
              <div className="content_sidebar">
                <Form>
                  <Form.Input
                    label="Nom et prénom"
                    placeholder="Mohamed Achori"
                  />
                  <Form.Input
                    label="Type de PDS"
                    placeholder="medecin,pharmacien..."
                  />
                  <Form.Input label="Paramètres" placeholder="échographie" />
                  <Form.Input
                    label="Spécialité"
                    placeholder="médcecin Géneraliste"
                  />
                  <Form.Input label="Structure" placeholder="Cabinet privé " />
                </Form>
              </div>
            </Transition>
          </Accordion.Content>
        </Accordion>
      )}
      {!isAnnuaire && (
        <Accordion>
          <Accordion.Title active={activeIndex} onClick={handleClick}>
            {isFrench ? "Recherche par filtre" : "تصفية البحث"} <Arrow />
          </Accordion.Title>
          <Accordion.Content active={activeIndex}>
            <Transition
              duration={{ hide: 300, show: 300 }}
              visible={activeIndex}
              onHide={handleChecked}
            >
              <div className="content_sidebar">
                {isBlood && (
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <p>Groupe sanguin</p>
                    <Dropdown
                      value={typeBlood}
                      onChange={handleType}
                      openOnFocus
                      selection
                      icon={null}
                      options={friendOptions}
                      style={{
                        display: "relative",
                      }}
                    ></Dropdown>
                    <Arrow className="tesdeg" />
                  </div>
                )}
                {isBlood && (
                  <div
                    className={isBlood ? "type_content" : "type_content blue"}
                  >
                    <Checkbox
                      radio
                      label="Positive +"
                      checked={isPositive}
                      onChange={handlePositive}
                    />
                    <Checkbox
                      radio
                      label="Négative -"
                      checked={!isPositive}
                      onChange={handlePositive}
                    />
                  </div>
                )}
                <Form
                  style={{
                    textAlign: isFrench ? "left" : "right",
                  }}
                >
                  {!isBlood && (
                    <Form.Input
                      style={{
                        textAlign: isFrench ? "left" : "right",
                      }}
                      label={filter.nom}
                      name="name"
                      value={name}
                      onChange={handleChange}
                    />
                  )}
                  <Form.Input
                    style={{
                      textAlign: isFrench ? "left" : "right",
                    }}
                    label={filter.wilaya}
                    name="wilaya"
                    value={wilaya}
                    onChange={handleChange}
                  />
                  <Form.Input
                    style={{
                      textAlign: isFrench ? "left" : "right",
                    }}
                    label={filter.commune}
                    name="commune"
                    value={commune}
                    onChange={handleChange}
                  />
                  <Form.Button
                    onClick={() => setIsClicked(true)}
                    className={isBlood ? "filter_btn blood" : "filter_btn"}
                  >
                    {isFrench ? "Filter" : filter.action}
                  </Form.Button>
                </Form>
              </div>
            </Transition>
          </Accordion.Content>
        </Accordion>
      )}
    </div>
  );
};
SidebarDons.prototype = {
  selectedLanguage: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.language,
  };
};
export default connect(mapStateToProps, {})(withRouter(SidebarDons));
