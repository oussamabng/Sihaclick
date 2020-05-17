import React, { useState } from "react";
import { Checkbox, Form, Button, Icon } from "semantic-ui-react";
import { ReactComponent as ArrowMin } from "../../assets/arrow.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//? import css
import "./StageFixedForm.css";

const StageFixedForm = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = ({ value, onClick }) => (
    <button
      className={
        !props.isConfirmed
          ? "disabled example-custom-input"
          : "example-custom-input"
      }
      onClick={onClick}
    >
      Période non flexible
    </button>
  );
  return (
    <div className="fixed_stage_form _best_doc sidebar_dons blue">
      <div className="circle_left_left"></div>
      <div className="circle_right"></div>
      <div className="row">
        <div className="col">
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>Type stage:</p>
          </div>
          <div className="type_content blue">
            <Checkbox
              disabled={!props.isConfirmed}
              radio
              label="Officine pharmaceutique"
            />
            <Checkbox
              disabled={!props.isConfirmed}
              radio
              label="Laboratoire d’analyse"
            />
            <Checkbox
              disabled={!props.isConfirmed}
              radio
              label="Clinique médicale
"
            />
            <Checkbox
              disabled={!props.isConfirmed}
              radio
              label="Clinique chirurgicale"
            />
            <Checkbox
              disabled={!props.isConfirmed}
              radio
              label="Clinique médico-chirurgicale"
            />
            <Checkbox
              disabled={!props.isConfirmed}
              radio
              label="Centre d’imagerie médicale"
            />
            <Checkbox
              disabled={!props.isConfirmed}
              radio
              label="Laboratoire pharmaceutique"
            />
            <Checkbox
              disabled={!props.isConfirmed}
              radio
              label="Cabinet médical privé"
            />
            <Checkbox
              disabled={!props.isConfirmed}
              radio
              label="Centre Hospitalo-universitaire"
            />
            <Checkbox
              disabled={!props.isConfirmed}
              radio
              label="Centre de remise en forme"
            />
            <Checkbox
              disabled={!props.isConfirmed}
              radio
              label="Thalassothérapies"
            />
            <Checkbox
              disabled={!props.isConfirmed}
              radio
              label="Centre de réadaptation et médecine physique"
            />
          </div>
        </div>
        <div className="col">
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>Durée de stage </p>
          </div>
          <div className="type_content blue">
            <Checkbox disabled={!props.isConfirmed} radio label="1 mois" />
            <Checkbox disabled={!props.isConfirmed} radio label="2 mois" />
            <Checkbox disabled={!props.isConfirmed} radio label="3 mois" />
            <Checkbox disabled={!props.isConfirmed} radio label="4 mois" />
            <Checkbox disabled={!props.isConfirmed} radio label="5 mois" />
            <Checkbox disabled={!props.isConfirmed} radio label="6 mois" />
            <Checkbox disabled={!props.isConfirmed} radio label="7 mois" />
            <Checkbox disabled={!props.isConfirmed} radio label="8 mois" />
            <Checkbox disabled={!props.isConfirmed} radio label="9 mois" />
            <Checkbox disabled={!props.isConfirmed} radio label="10 mois" />
            <Checkbox disabled={!props.isConfirmed} radio label="11 mois" />
            <Checkbox disabled={!props.isConfirmed} radio label="12 mois" />
          </div>
        </div>
        <div className="col">
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>Période souhaitée</p>
          </div>
          <div className="type_content blue">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<ExampleCustomInput />}
            />
            <Button disabled={!props.isConfirmed}>Période flexible</Button>
            <Checkbox disabled={!props.isConfirmed} radio label="Janvier" />
            <Checkbox disabled={!props.isConfirmed} radio label="Février" />
            <Checkbox disabled={!props.isConfirmed} radio label="Mars" />
            <Checkbox disabled={!props.isConfirmed} radio label="Avril" />
            <Checkbox disabled={!props.isConfirmed} radio label="May" />
            <Checkbox disabled={!props.isConfirmed} radio label="Juin" />
            <Checkbox disabled={!props.isConfirmed} radio label="Juillet" />
            <Checkbox disabled={!props.isConfirmed} radio label="Aout" />
            <Checkbox disabled={!props.isConfirmed} radio label="Septembre" />
            <Checkbox disabled={!props.isConfirmed} radio label="Octobre" />
            <Checkbox disabled={!props.isConfirmed} radio label="Novembre" />
            <Checkbox disabled={!props.isConfirmed} radio label="December" />
          </div>
        </div>

        <div className="col">
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>
              Zone géographique
              <br />
              Du stage souhaité
            </p>
          </div>
          <div className="type_content blue">
            <Form>
              <Form.Input
                disabled={!props.isConfirmed}
                label="wilaya"
                placeholder="Alger centre"
              />
              <Form.Input
                disabled={!props.isConfirmed}
                label="Commune"
                placeholder="Cheraga"
              />
            </Form>
          </div>
        </div>
      </div>
      <div className="form_btn_stage flex">
        <Icon name="info circle" />
        <p>
          Il est préférable de ne pas limiter ses choix pour avoir plus de
          chances de concrétiser le stage » avant de <br />
          confirmer la demande
        </p>
      </div>

      <div className="form_btn_stage">
        <Button disabled={!props.isConfirmed}>
          <p>.</p>
          Confirmer
          <ArrowMin />
        </Button>
      </div>
    </div>
  );
};

export default StageFixedForm;
