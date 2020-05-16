import React, { useState } from "react";
import { Checkbox, Form, Button, Icon } from "semantic-ui-react";
import { ReactComponent as ArrowMin } from "../../assets/arrow.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//? import css
import "./StageFixedForm.css";

const ExampleCustomInput = ({ value, onClick }) => (
  <button className="example-custom-input" onClick={onClick}>
    Période non flexible
  </button>
);

const StageFixedForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="fixed_stage_form _best_doc sidebar_dons blue">
      <div className="circle_right"></div>
      <div className="row">
        <div className="col">
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>Type stage:</p>
          </div>
          <div className="type_content blue">
            <Checkbox radio label="Positive +" />
            <Checkbox radio label="Négative -" />
            <Checkbox radio label="Positive +" />
            <Checkbox radio label="Négative -" />
            <Checkbox radio label="Positive +" />
            <Checkbox radio label="Négative -" />
            <Checkbox radio label="Positive +" />
            <Checkbox radio label="Négative -" />
            <Checkbox radio label="Positive +" />
            <Checkbox radio label="Négative -" />
            <Checkbox radio label="Positive +" />
            <Checkbox radio label="Négative -" />
          </div>
        </div>
        <div className="col">
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>Durée de stage </p>
          </div>
          <div className="type_content blue">
            <Checkbox radio label="1 mois" />
            <Checkbox radio label="2 mois" />
            <Checkbox radio label="3 mois" />
            <Checkbox radio label="4 mois" />
            <Checkbox radio label="5 mois" />
            <Checkbox radio label="6 mois" />
            <Checkbox radio label="7 mois" />
            <Checkbox radio label="8 mois" />
            <Checkbox radio label="9 mois" />
            <Checkbox radio label="10 mois" />
            <Checkbox radio label="11 mois" />
            <Checkbox radio label="12 mois" />
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
            <Button>Période flexible</Button>
            <Checkbox radio label="Janvier" />
            <Checkbox radio label="Février" />
            <Checkbox radio label="Mars" />
            <Checkbox radio label="Avril" />
            <Checkbox radio label="May" />
            <Checkbox radio label="Juin" />
            <Checkbox radio label="Juillet" />
            <Checkbox radio label="Aout" />
            <Checkbox radio label="Septembre" />
            <Checkbox radio label="Octobre" />
            <Checkbox radio label="Novembre" />
            <Checkbox radio label="December" />
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
              <Form.Input label="wilaya" placeholder="Alger centre" />
              <Form.Input label="Commune" placeholder="Cheraga" />
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
        <Button>
          <p>.</p>
          Confirmer
          <ArrowMin />
        </Button>
      </div>
    </div>
  );
};

export default StageFixedForm;
