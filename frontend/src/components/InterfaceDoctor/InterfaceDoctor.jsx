import React, { useEffect } from "react";
import { Input, Button, Icon, Image } from "semantic-ui-react";

//? import css
import "./InterfaceDoctor.css";

import Stage from "../../assets/stage.png";

import { ReactComponent as Date } from "../../assets/date.svg";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { set_doc } from "../../actions/doctorAction";

import axios from "axios";

//? import components
import DoctorInfo from "../DoctorInfo/DoctorInfo.jsx";
import Calender from "../Calender/Calender.jsx";

const InterfaceDoctor = (props) => {
  //? url https://sihaclik.com/api/public/pds/all/all/all/all/0/10
  useEffect(() => {
    let instance = axios.create({
      baseURL: "https://sihaclik.com/api/",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
    instance
      .get("public/pds/all/all/all/all/0/10")
      .then((res) => {
        console.log(res);
        props.set_doc(res.data[0]);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <>
      {props.data.pds && (
        <div className="interface_doctor medicament_annonce">
          <div className="row">
            <DoctorInfo />
            <div className="mobile_more">
              {props.data.pds.pds_options.services &&
                props.data.pds.pds_options.services.length > 0 && (
                  <div className="other_info">
                    <h1>Service/ Paramettre :</h1>
                    <p>
                      {" "}
                      {props.data.pds.pds_options.services.map((elm, index) =>
                        props.data.pds.pds_options.services[index + 1]
                          ? elm.name + " , "
                          : elm.name
                      )}
                    </p>
                  </div>
                )}

              <div className="other_info">
                <h1>Experience :</h1>
                <div className="title"></div>
                {props.data.pds.occupied_posts.map((elm) => (
                  <div className="exp_doc_info">
                    {props.data.pds.occupied_posts.photo && (
                      <Image src={Stage} />
                    )}
                    <div className="other_info">
                      <h1
                        style={{
                          margin: "0.5rem 0",
                        }}
                      >
                        Work :
                      </h1>
                      <p>{elm.name}</p>
                      <p>
                        {elm.start}-{elm.end}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row calender">
            <Input
              action={{ icon: "search" }}
              placeholder="Chercher ton professionnelle de santé."
            />
            <Calender />
            <div className="action_doctor_btn">
              <Button>
                <Date />
                Prendre un Rendez-vous
              </Button>
              <Button>
                {" "}
                <Icon name="map marker alternate" />
                Afficher la position
              </Button>
            </div>
            {props.data.pds.pds_options.services &&
              props.data.pds.pds_options.services.length > 0 && (
                <div className="other_info">
                  <h1>Service/ Paramettre :</h1>
                  <p>
                    {" "}
                    {props.data.pds.pds_options.services.map((elm, index) =>
                      props.data.pds.pds_options.services[index + 1]
                        ? elm.name + " , "
                        : elm.name
                    )}
                  </p>
                </div>
              )}

            <div className="other_info">
              <h1>Experience :</h1>
              <div className="title"></div>
              {props.data.pds.occupied_posts.map((elm) => (
                <div className="exp_doc_info">
                  {props.data.pds.occupied_posts.photo && <Image src={Stage} />}
                  <div className="other_info">
                    <h1
                      style={{
                        margin: "0.5rem 0",
                      }}
                    >
                      Work :
                    </h1>
                    <p>{elm.name}</p>
                    <p>
                      {elm.start}-{elm.end}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
InterfaceDoctor.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  set_doc: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  isLogin: state.auth.isLogin,
  data: state.doc.data,
});
export default connect(mapStateToProps, { set_doc })(InterfaceDoctor);
