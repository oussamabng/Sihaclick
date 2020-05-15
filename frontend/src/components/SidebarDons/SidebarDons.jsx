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

const SidebarDons = (props) => {
  const { isBlood } = props;
  const [activeIndex, setActive] = useState(0);
  const [activeChecked, setactiveChecked] = useState(false);
  const handleChecked = () => {
    setactiveChecked((prevState) => !prevState);
  };
  const handleClick = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <div className={isBlood ? "sidebar_dons" : "sidebar_dons blue"}>
      <Accordion>
        <Accordion.Title active={activeIndex} onClick={handleClick}>
          Recherche de sang <Arrow />
        </Accordion.Title>
        <Accordion.Content active={activeIndex}>
          <Transition
            duration={{ hide: 300, show: 300 }}
            visible={activeIndex}
            onHide={handleChecked}
          >
            <div className="content_sidebar">
              {isBlood && (
                <>
                  <p>Groupe sanguin</p>
                  <Dropdown placeholder="A" openOnFocus selection icon={null}>
                    <Arrow />
                  </Dropdown>
                </>
              )}
              {isBlood && (
                <div className={isBlood ? "type_content" : "type_content blue"}>
                  <Checkbox
                    radio
                    label="Positive +"
                    checked={activeChecked}
                    onChange={handleChecked}
                  />
                  <Checkbox
                    radio
                    label="Négative -"
                    checked={!activeChecked}
                    onChange={handleChecked}
                  />
                </div>
              )}
              <Form>
                {!isBlood && (
                  <Form.Input
                    label="Nom de Médicament"
                    placeholder="Médicament"
                  />
                )}
                <Form.Input label="wilaya" placeholder="Alger centre" />
                <Form.Input label="Commune" placeholder="Cheraga" />
              </Form>
            </div>
          </Transition>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};

export default SidebarDons;
