import React from "react";
import { Icon, Image ,Rating} from "semantic-ui-react";

//? import css
import "./DoctorInfo.css";

import Stage from "../../assets/stage.png";

import {connect} from "react-redux";
import PropTypes from "prop-types"
import {set_doc} from "../../actions/doctorAction";

const DoctorInfo = (props) => {
  return (
    <div className="doctor_info">
      <div className="header_part">
        <div
          className="doctor_img"
          style={{
            backgroundImage: `url(https://sihaclik.com/${props.data.photo.path})`,
          }}
        />
        <div className="label_part">
          <p>18 Km</p>
          <p>20 Vu</p> 
          <Rating icon='star' size="huge" defaultRating={0} maxRating={1} />
        </div>
      </div>
      <div className="info_doc">
        <div className="text_with_icon">
          <Icon name="user" />
          <h1>{props.data.name} {props.data.lastname}</h1>
        </div>
        <div className="text_with_icon">
          <Icon
            name="user outline"
            style={{
              visibility: "hidden",
            }}
          />
          <h4>{props.data.pds.name}</h4>
        </div>
        <div className="text_with_icon ">
          <Icon name="phone" />
          <div className="phones">
          {props.data.pds.fix && <h4>{props.data.pds.fix}</h4>}
            {props.data.pds.fax && <h4>{props.data.pds.fax}</h4>}
          </div>
        </div>
        <div className="text_with_icon mar">
          <Icon name="mail outline" />
          <h4>{props.data.email}</h4>
        </div>
        <div className="text_with_icon mar">
          <Icon name="map marker alternate" />
          <h4>{props.data.pds.address.address + " "+ props.data.pds.address.commune.nom + "," + props.data.pds.address.commune.wilaya.nom}</h4>
        </div>
      </div>
     
      <div className="other_info">
        <h1>Autre :</h1>
        <div className="title"></div>
        <p> Échographie</p>
      </div>
      { !props.data.pds.pds_options.structur.name
      ?
      <div className="other_info">
        <h1>Structure :</h1>
        <p>(
          {props.data.pds.pds_options.structur.map((elm,index)=>
            (props.data.pds.pds_options.structur[index+1])?
            elm.name+"/"
            :elm.name
          )}
          )</p>
      </div>
    :  
    <div className="other_info">
        <h1>Structure :</h1>
        <p>
          {props.data.pds.pds_options.structur.name}
          </p>
      </div>
    }
     
        {props.data.pds.pds_options.at_home && 
        <div className="other_info">
        {props.data.pds.pds_options.at_home===1 && <h1>Consultation a domicile</h1>}
        </div>
        }
      <div className="other_info">
        <h1>Ouvert après :</h1>
          <p>{props.data.pds.work_time[0].start_time.split(":")[0]+"h"} {props.data.pds.pds_options.holidays===1 && "ou jours fériés"}</p>
      </div>
      {props.data.pds.pds_options.convontions && props.data.pds.pds_options.convontions.length>0 &&
      <div className="other_info">
      <h1>Conventions :</h1> <p>
        (
      {props.data.pds.pds_options.convontions.map((elm,index)=>
      props.data.pds.pds_options.convontions[index+1] ? elm.name+"," : elm.name
      )}
        )
      </p>
    </div>
    }
     <div className="other_info">
        <h1>Activités bénévoles :</h1>
        <div className="title"></div>
        <div className="exp_doc_info">
          <Image src={Stage} />
          <div className="other_info">
            <h1>Group DIr El khir :</h1>
            <p>Nouriture et besoin pour</p>
            <p>les fammilles</p>
            <p>2004-2015</p>
          </div>
        </div>
      </div>
      <div className="other_info">
        <h1>Langue :</h1>
          <div className="other_info">{props.data.pds.languages.map(elm=>
            (
              <h3 style={{
                margin:"0.5rem 0"
              }}>
              {elm.name}
              </h3>
            ))}</div>
      </div>
    </div>
  );
};
DoctorInfo.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  set_doc : PropTypes.func.isRequired,
  data:PropTypes.array.isRequired
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
  isLogin: state.auth.isLogin,
  data :state.doc.data,
});
export default connect(mapStateToProps, { set_doc })(DoctorInfo) ;

