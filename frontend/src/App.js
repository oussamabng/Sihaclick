import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//? import screens
import Home from "./screens/Home/Home.jsx";
import Blood from "./screens/Blood/Blood.jsx";
import Medicament from "./screens/Medicament/Medicament.jsx";
import Doctor from "./screens/Doctor/Doctor.jsx";
import Annuaire from "./screens/Annuaire/Annuaire.jsx";
import Stage from "./screens/Stage/Stage.jsx";
import Blog from "./screens/Blog/Blog.jsx";
import Profile from "./screens/Profile/Profile.jsx";
import ProfileUpdate from "./components/ProfileUpdate/ProfileUpdate.jsx";
import ProfileDoc from "./components/ProfileDoc/ProfileDoc.jsx";
import ProfileRDVRecenet from "./components/ProfileRDVRecenet/ProfileRDVRecenet.jsx";
import ProfileRDVAttent from "./components/ProfileRDVAttent/ProfileRDVAttent.jsx";
import ProfileMedicament from "./components/ProfileMedicament/ProfileMedicament.jsx";
import ProfileBlood from "./components/ProfileBlood/ProfileBlood.jsx";
import ProfileStage from "./components/ProfileStage/ProfileStage.jsx";

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
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/profile" component={Profile} />
        <Route
          exact
          path="/profile/update"
          component={() => (
            <Profile active="update" componentChild={<ProfileUpdate />} />
          )}
        />{" "}
        <Route
          exact
          path="/profile/fav/doctor"
          component={() => (
            <Profile active="doc" componentChild={<ProfileDoc />} />
          )}
        />
        <Route
          exact
          path="/profile/rdv/recent"
          component={() => (
            <Profile
              active="rdv_recent"
              componentChild={<ProfileRDVRecenet />}
            />
          )}
        />
        <Route
          exact
          path="/profile/rdv/attent"
          component={() => (
            <Profile
              active="rdv_attent"
              componentChild={<ProfileRDVAttent />}
            />
          )}
        />
        <Route
          exact
          path="/profile/medicament"
          component={() => (
            <Profile
              active="medicament"
              componentChild={<ProfileMedicament />}
            />
          )}
        />
        <Route
          exact
          path="/profile/blood"
          component={() => (
            <Profile active="blood" componentChild={<ProfileBlood />} />
          )}
        />
        <Route
          exact
          path="/profile/stage"
          component={() => (
            <Profile active="stage" componentChild={<ProfileStage />} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
