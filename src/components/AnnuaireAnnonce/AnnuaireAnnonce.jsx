import React from "react";
import { Grid, Checkbox, Input, Accordion, Form } from "semantic-ui-react";

//? import components
import SidebarDons from "../../components/SidebarDons/SidebarDons.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import CardAnnuaire from "../../components/CardAnnuaire/CardAnnuaire.jsx";

import { ReactComponent as Filter } from "../../assets/filter.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const AnnuaireAnnonce = (props) => {
  const { isFrench } = props;
  const [activeIndex, setactiveIndex] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setactiveIndex((prevState) => !prevState);
  };

  const handleChange = (e, { value, name }) => {
    switch (name) {
      default:
        break;
    }
  };
  return (
    <div className="blood_annonce medicament_annonce annuaire_annonce">
      <SidebarDons isBlood={false} isAnnuaire />
      <div className="table_blood">
        <Input
          action={{ icon: "search" }}
          placeholder="Chercher ton professionnelle de santé."
        />
        <Accordion
          className={isFrench ? "accordion_dons " : "accordion_dons right"}
        >
          <Accordion.Title onClick={handleClick}>
            <div className="blood_filter_mobile">
              <div>
                <Filter />
                <p>Filtrer</p>
                <Arrow className={activeIndex ? "arrow active" : "arrow"} />
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex}>
            <Form>
              <Form.Input label="Nom de Médicament" name="name" />
              <Form.Input label="Wilaya" name="name" />
              <Form.Input label="Commune" name="name" />
              <Form.Input label="Spécialité" name="name" />
              <Form.Input label="Paramètres proposés" name="name" />
              <Form.Input label="Structure:" name="name" />
              <Form.Button
                onClick={() => setIsClicked(true)}
                className={"filter_btn"}
              >
                Confirmer
              </Form.Button>
            </Form>
          </Accordion.Content>
        </Accordion>

        <div className="blood_filter">
          <div className="_checkbox type_content blue">
            <Checkbox radio label="A - Z Filter" className="this" />
            <Checkbox radio label="Nombre de vues" checked />
            <Checkbox radio label="Par Distance" />
          </div>
        </div>
        <div className="grid_center">
          <Grid columns={1}>
            <Grid.Column>
              <CardAnnuaire />
            </Grid.Column>
            <Grid.Column>
              <CardAnnuaire />
            </Grid.Column>
          </Grid>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default AnnuaireAnnonce;
