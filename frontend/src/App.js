import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//? import screens
import Home from "./screens/Home/Home.jsx";
import Blood from "./screens/Blood/Blood.jsx";
import Medicament from "./screens/Medicament/Medicament.jsx";
import Doctor from "./screens/Doctor/Doctor.jsx";
import Annuaire from "./screens/Annuaire/Annuaire.jsx";
import Stage from "./screens/Stage/Stage.jsx";

//? import slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blood" component={Blood} />
        <Route exact path="/medicament" component={Medicament} />
        <Route exact path="/doctor" component={Doctor} />
        <Route exact path="/annuaire" component={Annuaire} />
        <Route exact path="/stage" component={Stage} />
      </Switch>
    </Router>
  );
}

export default App;
