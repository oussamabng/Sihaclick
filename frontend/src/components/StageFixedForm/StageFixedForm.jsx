import React, { useState, useEffect } from "react";
import { Checkbox, Form, Button, Icon,Dropdown } from "semantic-ui-react";
import { ReactComponent as ArrowMin } from "../../assets/arrow.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

//? import css
import "./StageFixedForm.css";

import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const StageFixedForm = (props) => {
  const {postStage,handleMonths,janvier,fevrier,mars,avril,mai,juin,juillet,aout,flexable,handleFlexable,
    handleDuree,one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,flexableDate,setFlexableDate,commune,
    wilayas,wilaya,handleChangeWilaya,handleCommune,communes,
    activeElement,handleIntership,
    septembre,octobre,novembre,decembre} = props
  const [data, setData] = useState([]);

  const ExampleCustomInput = ({ value, onClick }) => (
    <button
      className={
        !props.isConfirmed
          ? "disabled example-custom-input"
          : "example-custom-input"
      }
      onClick={onClick}
    >
      {      value?value:"Période non flexible"
}
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
   
    return () => {
      setData([]);
    };
  }, []);

  return (
    <div className="fixed_stage_form _best_doc sidebar_dons blue ">
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
                name={elm.id}
                checked={elm.id === activeElement}
                onChange={handleIntership}
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
          <Checkbox
               name="one"
                disabled={!props.isConfirmed}
                radio
                checked={one}
                label="1 month"
                onChange={handleDuree}
              />
              <Checkbox
               name="two"
                disabled={!props.isConfirmed}
                radio
                checked={two}
                label="2 month"
                onChange={handleDuree}
              />
                <Checkbox
               name="three"
                disabled={!props.isConfirmed}
                radio
                checked={three}
                label="3 month"
                onChange={handleDuree}
              />
                <Checkbox
               name="four"
                disabled={!props.isConfirmed}
                radio
                checked={four}
                label="4 month"
                onChange={handleDuree}
              />
               <Checkbox
               name="five"
                disabled={!props.isConfirmed}
                radio
                checked={five}
                label="5 month"
                onChange={handleDuree}
              />
               <Checkbox
               name="six"
                disabled={!props.isConfirmed}
                radio
                checked={six}
                label="6 month"
                onChange={handleDuree}
              />
               <Checkbox
               name="seven"
                disabled={!props.isConfirmed}
                radio
                checked={seven}
                label="7 month"
                onChange={handleDuree}
              />
               <Checkbox
               name="eight"
                disabled={!props.isConfirmed}
                radio
                checked={eight}
                label="8 month"
                onChange={handleDuree}
              />
               <Checkbox
               name="nine"
                disabled={!props.isConfirmed}
                radio
                checked={nine}
                label="9 month"
                onChange={handleDuree}
              />
               <Checkbox
               name="ten"
                disabled={!props.isConfirmed}
                radio
                checked={ten}
                label="10 month"
                onChange={handleDuree}
              />
               <Checkbox
               name="eleven"
                disabled={!props.isConfirmed}
                radio
                checked={eleven}
                label="11 month"
                onChange={handleDuree}
              />
               <Checkbox
               name="twelve"
                disabled={!props.isConfirmed}
                radio
                checked={twelve}
                label="12 month"
                onChange={handleDuree}
              />
          </div>
        </div>
        <div className="col">
          <div className="title_best_doc">
            <div className="line_title"></div>
            <p>Période souhaitée</p>
          </div>
          <div className="type_content blue">
            <DatePicker
              selected={flexableDate}
              onChange={(date) => {
                setFlexableDate(date)
                handleFlexable();
              }}
              customInput={<ExampleCustomInput />}
            />
            <Button disabled={!props.isConfirmed} onClick={handleFlexable}>Période flexible</Button>
            <Checkbox disabled={!props.isConfirmed || !flexable} radio label={"janvier"} name="janvier" value={janvier}  onChange={handleMonths} />
            <Checkbox disabled={!props.isConfirmed || !flexable} radio label={"février"} name="février" value={fevrier} onChange={handleMonths} />
            <Checkbox disabled={!props.isConfirmed || !flexable} radio label={"mars"} name="mars" value={mars}  onChange={handleMonths} />
            <Checkbox disabled={!props.isConfirmed || !flexable} radio label={"avril"} name="avril" value={avril}  onChange={handleMonths} />
            <Checkbox disabled={!props.isConfirmed || !flexable} radio label={"mai"} name="mai" value={mai}  onChange={handleMonths} />
            <Checkbox disabled={!props.isConfirmed || !flexable} radio label={"juin"} name="juin" value={juin}  onChange={handleMonths} />
            <Checkbox disabled={!props.isConfirmed || !flexable} radio label={"juillet"} name="juillet" value={juillet}  onChange={handleMonths} />
            <Checkbox disabled={!props.isConfirmed || !flexable} radio label={"août"} name="août" value={aout}  onChange={handleMonths} />
            <Checkbox disabled={!props.isConfirmed || !flexable} radio label={"septembre"} name="septembre" value={septembre}  onChange={handleMonths} />
            <Checkbox disabled={!props.isConfirmed || !flexable} radio label={"octobre"} name="octobre" value={octobre}  onChange={handleMonths} />
            <Checkbox disabled={!props.isConfirmed || !flexable} radio label={"novembre"} name="novembre" value={novembre}  onChange={handleMonths} />
            <Checkbox disabled={!props.isConfirmed || !flexable} radio label='décembre' name="décembre"  value={decembre} onChange={handleMonths} />
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
            <Form className="drops_stage">
            <Form.Group>
          <div
          className="content_sidebar field"
                    style={{
                      position: "relative",
                    }}
                  >
                    <p>Wilaya</p>
                    <Dropdown
                      value={wilaya}
                      openOnFocus
                      selection
                      icon={null}
                      onChange={handleChangeWilaya}
                      options={wilayas}
                      style={{
                        display: "relative",
                      }}
                    ></Dropdown>
                    <Arrow className="tesdeg" />
                  </div>
                  <div
          className="content_sidebar field"
                    style={{
                      position: "relative",
                    }}
                  >
                    <p>Commune</p>
                    <Dropdown
                      value={commune}
                      openOnFocus
                      onChange={handleCommune}
                      selection
                      multiple
                      icon={null}
                      options={communes}
                      style={{
                        display: "relative",
                      }}

                    ></Dropdown>
                    <Arrow className="tesdeg" />
                  </div>
          </Form.Group>
        
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
        <Button disabled={!props.isConfirmed} onClick={postStage}>
          <p>.</p>
          Confirmer
          <ArrowMin />
        </Button>
      </div>
    </div>
  );
};

export default StageFixedForm;
