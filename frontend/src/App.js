import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//? import screens
import Home from "./screens/Home/Home.jsx";
import Blood from "./screens/Blood/Blood.jsx";

//? import slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blood" component={Blood} />
      </Switch>
    </Router>
  );
}

export default App;
