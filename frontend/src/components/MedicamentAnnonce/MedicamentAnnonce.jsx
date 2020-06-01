import React ,{useState,useEffect} from "react";
import { Grid, Checkbox, Input } from "semantic-ui-react";

//? import css
import "./MedicamentAnnonce.css";

//? import components
import SidebarDons from "../../components/SidebarDons/SidebarDons.jsx";
import CardDon from "../../components/CardDon/CardDon.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Axios from "axios";

//? redux settings
import { get_drugs } from "../../actions/drugsActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const MedicamentAnnonce = (props) => {
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const [name,setName] = useState("");
 // const [isLoading,setIsLoading] = useState(false);
  const handleChange = (e, { value, name }) => {
    switch (name) {
      case "wilaya":
        setWilaya(value);
        break;
      case "commune":
        setCommune(value);
        break;
      case "name":
        setName(value);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const instance = Axios.create({
      baseURL:"https://sihaclik.com/api/",
      responseType:"json",
      headers:{
        "Content-Type":"application/json"
      }
    });
    //TODO add sort and filter b wilaya w commune w name
    instance.get(`public/donnation/drugs/${name}/all/all/0/10`).then(res=>{
      props.get_drugs(res.data)
    })
    .catch(err=>{
      console.log(err.response)
    })
  }, [wilaya,name,commune,props])
  return (
    <div className="blood_annonce medicament_annonce">
      <SidebarDons isBlood={false} commune={commune}
      handleChange={handleChange}
      name={name}
        wilaya={wilaya}/>
      <div className="table_blood">
        <Input
          action={{ icon: "search" }}
          placeholder="Chercher ton professionnelle de santé."
        />
        <div className="blood_filter">
          <div className="_checkbox type_content blue">
            <Checkbox radio label="A - Z Filter" className="this" />
            <Checkbox radio label="Par Distance" checked />
          </div>
        </div>
        <div className="grid_center">
          <Grid columns={4}>
            {props.data_drugs && props.data_drugs.map((elm,index)=>
            <Grid.Column key={index}>
            <CardDon activeItem="Médicament" data={elm}/>
          </Grid.Column>
            )}
          </Grid>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

MedicamentAnnonce.propTypes = {
  data_drugs: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  data_drugs: state.drugs.data_drugs,
});
export default connect(mapStateToProps, { get_drugs })(withRouter(MedicamentAnnonce))
