import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//? import screens
import Home from "./screens/Home/Home.jsx";

//! temp
import HeaderOnScroll from "./components/HeaderOnScroll/HeaderOnScroll.jsx";

//? import slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/test"
          component={() => <HeaderOnScroll isLogin header />}
        />
      </Switch>
    </Router>
  );
}

export default App;
