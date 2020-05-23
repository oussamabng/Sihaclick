import React, { useState, useEffect } from "react";
import { Checkbox, Form, Button, Icon } from "semantic-ui-react";
import { ReactComponent as ArrowMin } from "../../assets/arrow.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

//? import css
import "./StageFixedForm.css";

const StageFixedForm = (props) => {
  const [data, setData] = useState([]);
  const [months, setMonth] = useState([]);
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
  useEffect(() => {
    let url = "https://sihaclik.com/api/public/internship_type";
    axios
      .create({
        headers: {
          get: {
            "Content-Type": "application/json",
          },
        },
      })
      .request({
        url,
        method: "get",
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log({ err: err.response });
      });
    axios
      .create({
        headers: {
          get: {
            "Content-Type": "application/json",
          },
        },
      })
      .request({
        url: "https://sihaclik.com/api/public/months",
        method: "get",
      })
      .then((res) => {
        setMonth(res.data);
      })
      .catch((err) => {
        console.log({ err: err.response });
      });
    return () => {
      setData([]);
    };
  }, []);
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
            {data.map((elm) => (
              <Checkbox
                disabled={!props.isConfirmed}
                radio
                label={elm.name}
                key={elm.id}
              />
            ))}
          </div>
        </div>
        <div className="col">
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>Durée de stage </p>
          </div>
          <div className="type_content blue">
            {months.map((elm) => (
              <Checkbox
                disabled={!props.isConfirmed}
                radio
                label={elm.id + " mois"}
              />
            ))}
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
            {months.map((elm) => (
              <Checkbox disabled={!props.isConfirmed} radio label={elm.name} />
            ))}
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
