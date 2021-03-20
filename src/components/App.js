import React from "react";
import "../styles/App.css";
import "../styles/NavBar.css";
import NavBar from "../components/NavBar";
import Properties from "../components/Properties";
import AddProperty from "../components/AddProperty";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import SideBar from "./SideBar";

function App() {
  const ourHistory = createBrowserHistory();
  return (
    <>
      <Router history={ourHistory}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Properties />
            <SideBar />
          </Route>
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
