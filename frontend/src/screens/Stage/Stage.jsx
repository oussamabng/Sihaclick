import React, { useState, useEffect } from "react";
import axios from "axios";

import HeaderOnScroll from "../../components/HeaderOnScroll/HeaderOnScroll.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import HeroStage from "../../components/HeroStage/HeroStage.jsx";
import StageSimpleForm from "../../components/StageSimpleForm/StageSimpleForm.jsx";
import StageFixedForm from "../../components/StageFixedForm/StageFixedForm.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SidebarGeneral from "../../components/SidebarGeneral/SidebarGeneral.jsx";

const Stage = (props) => {
  //* handling the type of  stager
  const [type, setType] = useState("Status");
  const [data, setData] = useState([]);
  const [typeActor, setActor] = useState("Médecine");
  const [typeStageEtudiant, setTypeStaegEtudiant] = useState(
    "Stage de fin d’étude"
  );
  const [year, setChoosenYear] = useState();
  const [activeElement, setactiveElement] = useState(1);
  const [specialitiz, setSpecialitiz] = useState([]);
  const [speciality, setspeciality] = useState("");

  //? flexable
  const [flexable, setFlexable] = useState(false);
  const [flexableDate, setFlexableDate] = useState(new Date());
  const handleFlexable = () => {
    setFlexable((prevState) => !prevState);
  };
  //? adr
  const [wilayas, setWilayas] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const [communeId, setCommuneId] = useState([]);
  const [file, setFile] = useState(null);

  const handleChangeWilaya = (e, { value }) => {
    setWilaya(value);
  };
  const handleCommune = (e, { value }) => {
    setCommune(value);
  };
  useEffect(() => {
    //? get wilaya
    let instance = axios.create({
      baseURL: "https://sihaclik.com/api/",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
    instance
      .get("public/wilaya")
      .then((res) => {
        let tempArrWilaya = [];
        res.data.map((elm) => {
          tempArrWilaya.push({ key: elm.id, value: elm.nom, text: elm.nom });
          return true;
        });
        setWilayas(tempArrWilaya);
      })
      .catch((err) => {
        console.log(err.response);
      });

    //? get specialities
    let instance2 = axios.create({
      baseURL: "https://sihaclik.com/api/",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
    instance2
      .get("public/speciality")
      .then((res) => {
        let tempArrWilaya = [];
        res.data.map((elm) => {
          tempArrWilaya.push({ key: elm.id, value: elm.name, text: elm.name });
          return true;
        });
        setSpecialitiz(tempArrWilaya);
        setspeciality(tempArrWilaya[0].value);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  const handleSpec = (e, { value }) => {
    setspeciality(value);
  };
  useEffect(() => {
    if (wilaya.length > 0) {
      let instance = axios.create({
        baseURL: "https://sihaclik.com/api/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
      });
      instance
        .get("public/wilaya")
        .then((res) => {
          let tempArrCommunes = [];
          let adr = res.data.filter((elm) =>
            elm.nom.toLowerCase().includes(wilaya.toLowerCase())
          );
          if (adr.length > 0) {
            adr[0].communes.map((elm) => {
              tempArrCommunes.push({
                key: elm.id,
                text: elm.nom,
                value: elm.nom,
              });
              return true;
            });
            setCommunes(tempArrCommunes);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [wilaya]);
  //? months
  const [janvier, setJanvier] = useState(false);
  const [fevrier, setFevrier] = useState(false);
  const [mars, setMars] = useState(false);
  const [avril, setAvril] = useState(false);
  const [mai, setMai] = useState(false);
  const [juin, setJuin] = useState(false);
  const [juillet, setJuillet] = useState(false);
  const [aout, setAout] = useState(false);
  const [septembre, setSeptembre] = useState(false);
  const [octobre, setOctobre] = useState(false);
  const [novembre, setNovembre] = useState(false);
  const [december, setDecember] = useState(false);

  //? Duréé
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);
  const [nine, setNine] = useState(false);
  const [ten, setTen] = useState(false);
  const [eleven, setEleven] = useState(false);
  const [twelve, setTwelve] = useState(false);

  const handleDuree = (e, { name }) => {
    switch (name) {
      case "one":
        setOne(true);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(false);
        setSix(false);
        setSeven(false);
        setEight(false);
        setNine(false);
        setTen(false);
        setEleven(false);
        setTwelve(false);
        break;
      case "two":
        setOne(false);
        setTwo(true);
        setThree(false);
        setFour(false);
        setFive(false);
        setSix(false);
        setSeven(false);
        setEight(false);
        setNine(false);
        setTen(false);
        setEleven(false);
        setTwelve(false);
        break;
      case "three":
        setOne(false);
        setTwo(false);
        setThree(true);
        setFour(false);
        setFive(false);
        setSix(false);
        setSeven(false);
        setEight(false);
        setNine(false);
        setTen(false);
        setEleven(false);
        setTwelve(false);
        break;
      case "four":
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(true);
        setFive(false);
        setSix(false);
        setSeven(false);
        setEight(false);
        setNine(false);
        setTen(false);
        setEleven(false);
        setTwelve(false);
        break;
      case "five":
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(true);
        setSix(false);
        setSeven(false);
        setEight(false);
        setNine(false);
        setTen(false);
        setEleven(false);
        setTwelve(false);
        break;
      case "six":
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(false);
        setSix(true);
        setSeven(false);
        setEight(false);
        setNine(false);
        setTen(false);
        setEleven(false);
        setTwelve(false);
        break;
      case "seven":
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(false);
        setSix(false);
        setSeven(true);
        setEight(false);
        setNine(false);
        setTen(false);
        setEleven(false);
        setTwelve(false);
        break;
      case "eight":
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(false);
        setSix(false);
        setSeven(false);
        setEight(true);
        setNine(false);
        setTen(false);
        setEleven(false);
        setTwelve(false);
        break;
      case "nine":
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(false);
        setSix(false);
        setSeven(false);
        setEight(false);
        setNine(true);
        setTen(false);
        setEleven(false);
        setTwelve(false);
        break;
      case "ten":
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(false);
        setSix(false);
        setSeven(false);
        setEight(false);
        setNine(false);
        setTen(true);
        setEleven(false);
        setTwelve(false);
        break;
      case "eleven":
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(false);
        setSix(false);
        setSeven(false);
        setEight(false);
        setNine(false);
        setTen(false);
        setEleven(true);
        setTwelve(false);
        break;
      case "twelve":
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(false);
        setFive(false);
        setSix(false);
        setSeven(false);
        setEight(false);
        setNine(false);
        setTen(false);
        setEleven(false);
        setTwelve(true);
        break;
      default:
        break;
    }
  };
  const handleIntership = (e, { name }) => {
    setactiveElement(name);
  };
  const handleMonths = (e, { name }) => {
    switch (name) {
      case "janvier":
        setJanvier((prevState) => !prevState);
        break;
      case "février":
        setFevrier((prevState) => !prevState);
        break;

      case "mars":
        setMars((prevState) => !prevState);
        break;

      case "avril":
        setAvril((prevState) => !prevState);
        break;

      case "mai":
        setMai((prevState) => !prevState);
        break;

      case "juin":
        setJuin((prevState) => !prevState);
        break;

      case "juillet":
        setJuillet((prevState) => !prevState);
        break;

      case "août":
        setAout((prevState) => !prevState);
        break;

      case "septembre":
        setSeptembre((prevState) => !prevState);
        break;

      case "octobre":
        setOctobre((prevState) => !prevState);
        break;
      case "novembre":
        setNovembre((prevState) => !prevState);
        break;
      case "décembre":
        setDecember((prevState) => !prevState);
        break;
      default:
        break;
    }
  };
  const handleType = (e, { value }) => {
    setType(value);
    console.log(value);
  };
  const handleStageType = (e, { value }) => {
    console.log({ value });
    setTypeStaegEtudiant(value);
  };
  //* if the first form is confirmed or nah
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirmation = () => {
    setIsConfirmed((prevState) => !prevState);
  };
  const handleYear = (e, { value }) => {
    setChoosenYear(value);
  };
  useEffect(() => {
    let url = "https://sihaclik.com/api/public/intern_types";
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
  }, []);
  const postStage = () => {
    let instanceFile = axios.create({
      baseURL: "https://sihaclik.com/api/",
      responseType: "json",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${props.token}`,
      },
    });
    var formData = new FormData();
    formData.append("pdf", file);
    instanceFile
      .post("https://sihaclik.com/upload/pdf", formData)
      .then((res) => {
        let fileID = res.data.id;
        console.log(res);
        let intern_type = type === "Diplômé" ? 2 : type === "Résident" ? 3 : 1;
        let internship_field = data[intern_type].types.filter((elm) =>
          elm.name.toLowerCase().includes(typeActor.toLowerCase())
        )[0].id;
        let internship_type = activeElement;
        let months = [];
        janvier && months.push({ id: 1 });
        fevrier && months.push({ id: 2 });
        mars && months.push({ id: 3 });
        avril && months.push({ id: 4 });
        mai && months.push({ id: 5 });
        juin && months.push({ id: 6 });
        juillet && months.push({ id: 7 });
        aout && months.push({ id: 8 });
        septembre && months.push({ id: 9 });
        octobre && months.push({ id: 10 });
        novembre && months.push({ id: 11 });
        december && months.push({ id: 12 });

        for (let i = 0; i < communes.length; i++) {
          const element = communes[i];
          for (let j = 0; j < commune.length; j++) {
            const elm = commune[j];
            if (element.value.toLowerCase().includes(elm.toLowerCase())) {
              setCommuneId((prevState) => {
                let tempArray = prevState;
                tempArray.push({ id: element.key });
                return tempArray;
              });
            }
          }
        }

        let college_internship = {
          college_end:
            typeStageEtudiant === "Stage de fin d’étude" ? true : false,
          year:
            type === "Diplômé"
              ? year
              : typeStageEtudiant === "Stage de fin d’étude"
              ? parseInt(new Date().getFullYear() + 7 - parseInt(year) + 1)
              : null,
        };
        let flexible = flexable;
        let date = flexableDate;
        let period = one
          ? 1
          : two
          ? 2
          : three
          ? 3
          : four
          ? 4
          : five
          ? 5
          : six
          ? 6
          : seven
          ? 7
          : eight
          ? 8
          : nine
          ? 9
          : ten
          ? 10
          : eleven
          ? 11
          : twelve
          ? 12
          : 1;
        let spec = specialitiz.filter((elm) =>
          elm.value.toLowerCase().includes(speciality.toLowerCase())
        )[0].key;
        console.log({
          intern_type,
          internship_field,
          college_internship,
          months,
          period,
          internship_type,
          flexible,
          date,
          communeId,
          speciality,
          typeActor,
          type,
          spec,
        });

        if (type === "Etudiant") {
          var body = {
            internship: {
              intern_type: {
                id: intern_type,
              },
              internship_type: {
                id: internship_type,
              },
              internship_field: {
                id: internship_field,
              },
              period,
              flexible,
              date,
              months,
              commune: communeId,
              college_internship,
              cv: {
                id: fileID,
              },
            },
          };
        } else if (type === "Diplômé" || type === "Résident") {
          body = {
            internship: {
              intern_type: {
                id: intern_type,
              },
              internship_type: {
                id: internship_type,
              },
              internship_field: {
                id: internship_field,
              },
              period,
              flexible,
              date,
              commune: communeId,
              cv: {
                id: fileID,
              },
              specialist_internship: {
                speciality: {
                  id: spec,
                },
                year: year,
              },
            },
          };
        }
        let instance = axios.create({
          baseURL: "https://sihaclik.com/api/",
          responseType: "json",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${props.token}`,
          },
        });
        let urlType =
          type === "Etudiant"
            ? "student"
            : type === "Diplômé"
            ? "degre"
            : "residant";
        instance
          .post(`chaab/donnation/internship/${urlType}`, body)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err.response);
          });
      })
      .catch((err) => console.log(err));
  };
  const [visible, setVisible] = React.useState(false);
  const handleVisible = () => {
    setVisible((prevState) => !prevState);
  };
  return (
    <>
      <HeaderOnScroll
        handleVisible={handleVisible}
        header={false}
        isLogin={false}
      />
      <SidebarGeneral
        isFrench={true}
        handleVisible={handleVisible}
        visible={visible}
        navs={[
          { isDropdown: false, value: "Accueil", list: null },
          { isDropdown: false, value: "Annuaire", list: null },
          {
            isDropdown: true,
            value: "Echange",
            list: [
              { value: "Dons blood", link: "/blood" },
              { value: "Dons medicament", link: "/medicament" },
              { value: "Dons material", link: "/" },
            ],
          },
          { isDropdown: false, value: "Blog", list: null },
          { isDropdown: false, value: "Evenement", list: null },
          { isDropdown: false, value: "Contactez", list: null },
          { isDropdown: false, value: "A props de nous", list: null },
        ]}
      />
      <Navigation notLine={false} active="stage" />
      <HeroStage type={type} handleType={handleType} data={data} />
      <StageSimpleForm
        typeActor={typeActor}
        data={data}
        type={type}
        setActor={setActor}
        isConfirmed={isConfirmed}
        handleConfirmation={handleConfirmation}
        typeStageEtudiant={typeStageEtudiant}
        handleStageType={handleStageType}
        choosenYear={year}
        setChoosenYear={setChoosenYear}
        handleYear={handleYear}
        speciality={speciality}
        handleSpec={handleSpec}
        specialitiz={specialitiz}
      />
      <StageFixedForm
        setFile={setFile}
        isConfirmed={isConfirmed}
        postStage={postStage}
        handleMonths={handleMonths}
        janvier={janvier}
        fevrier={fevrier}
        mars={mars}
        avril={avril}
        mai={mai}
        juin={juin}
        juillet={juillet}
        aout={aout}
        septembre={septembre}
        octobre={octobre}
        novembre={novembre}
        december={december}
        handleDuree={handleDuree}
        one={one}
        two={two}
        three={three}
        four={four}
        five={five}
        six={six}
        seven={seven}
        eight={eight}
        nine={nine}
        ten={ten}
        eleven={eleven}
        twelve={twelve}
        activeElement={activeElement}
        handleIntership={handleIntership}
        flexable={flexable}
        handleFlexable={handleFlexable}
        flexableDate={flexableDate}
        setFlexableDate={setFlexableDate}
        commune={commune}
        handleCommune={handleCommune}
        handleChangeWilaya={handleChangeWilaya}
        wilaya={wilaya}
        wilayas={wilayas}
        communes={communes}
      />
      <Footer />
    </>
  );
};

Stage.propTypes = {
  token: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, {})(Stage);
