import React, { useEffect, useState } from "react";
import { Grid, Checkbox, Button, Icon, Segment } from "semantic-ui-react";
import axios from "axios";

//? import css
import "./BloodAnnonce.css";

//? import components
import SidebarDons from "../../components/SidebarDons/SidebarDons.jsx";
import BloodCard from "../../components/BloodCard/BloodCard.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

//? redux settings
import { get_blood,sort_blood_distance } from "../../actions/bloodActions.js";
import {open} from "../../actions/authActions.js";
import {logout} from "../../actions/authActions.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const BloodAnnonce = (props) => {
  const [typeBlood, setTypeBlood] = useState("O");
  const [isPositive, setIsPositive] = useState(true);
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const [isClicked,setIsClicked] = useState(false);
  const [alphabet,setAlpha] = useState(false);
  const [distance,setDistance] = useState(false);

  const handleType = (e, { value }) => {
    setTypeBlood(value);
  };
  const handleSort = (e,{name})=>{
    switch (name) {
      case "az":
        setAlpha(prevState=>!prevState);
        break;
      case "distance":
        (props.isLogin)?setDistance(prevState=>!prevState):props.open()
        break;
      default:
        break;
    }
  }
  const handlePositive = () => {
    setIsPositive((prevState) => !prevState);
  };
  const handleChange = (e, { value, name }) => {
    switch (name) {
      case "wilaya":
        setWilaya(value);
        break;
      case "commune":
        setCommune(value);
        break;
      default:
        break;
    }
  };
 
  useEffect(() => { 
   if (isClicked ){
    setIsLoading(true)
    const instance1 = axios.create({
      baseURL:"https://sihaclik.com/api/",
      responseType:"json",
      headers:{
        "Content-Type": "application/json",
      }
    });
    const instance = axios.create({
      baseURL:"https://sihaclik.com/api/",
      responseType:"json",
      headers:{
        "Content-Type": "application/json",
      }
    })
    instance1.get("public/wilaya/")
    .then(res=>{
      setIsLoading(false)
      //? code of the wilaya
      let code = wilaya.length> 0 ?  res.data.filter(elm=>elm.nom.toLowerCase().includes(wilaya.toLowerCase()))[0].code :"all" 
      var codeCommune;
     res.data.map(elm=>{
      let communesX = elm.communes
      let com = (communesX.filter(elm=>elm.nom.toLowerCase().includes(commune.toLowerCase())))
      if(com.length>0) codeCommune = com[0]
      return true
      //? get code of commune and wilaya
     })
      instance.get(`public/donnation/blood/["${typeBlood}${isPositive?"+":"-"}"]/blood/all/${wilaya.length>0?code:commune.length>0?codeCommune.wilaya_id:"all"}/${commune.length>0?codeCommune.id:"all"}/0/12`)
      .then(res=>{
        props.get_blood(res.data);
        setIsClicked(false)
        setIsLoading(false)
      }).catch(err=>{
        console.log(err.response)
        setIsClicked(false)
      })
    })
    .catch(err=>{
      console.log(err)
      setIsClicked(false)
    })
   }
  }, [isClicked,commune,isPositive,props,typeBlood,wilaya]);
  useEffect(()=>{
    if (distance){
        props.sort_blood_distance(props.data_blood)
    }
  },[distance,props])
  return (
    <Segment loading={isLoading} className="blood_annonce">
      <SidebarDons
        commune={commune}
        wilaya={wilaya}
        handleChange={handleChange}
        isBlood
        handlePositive={handlePositive}
        handleType={handleType}
        isPositive={isPositive}
        typeBlood={typeBlood}
        setIsClicked={setIsClicked}
      />
      <div className="table_blood">
        <div className="blood_filter">
          <div className="_checkbox type_content">
            <Checkbox radio label="A - Z Filter" value={alphabet} checked={alphabet} onClick={handleSort} name="az"/>
            <Checkbox radio label="Par Distance" value={distance} checked={distance} onClick={handleSort} name="distance"/>
          </div>
          <Button>
            <Icon name="plus" color="white" />
            Ajouter annonce
          </Button>
        </div>
        <div className="grid_center">
          <Grid columns={3}>
            {props.data_blood.map((elm,index) => (
              <Grid.Column key={index}>
                <BloodCard data={elm} />
              </Grid.Column>
            ))}
          </Grid>
        </div>
        <Pagination />
      </div>
    </Segment>
  );
};

BloodAnnonce.propTypes = {
  data_blood: PropTypes.array.isRequired,
  sort_blood_distance : PropTypes.func.isRequired,
  get_blood : PropTypes.func.isRequired,
  open:PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  isOpen:PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  data_blood: state.blood.data_blood,
  isOpen:state.auth.isOpen,
  isLogin: state.auth.isLogin,
  token: state.auth.token,
});

export default connect(mapStateToProps, { get_blood ,sort_blood_distance,logout,open})(
  withRouter(BloodAnnonce)
);
