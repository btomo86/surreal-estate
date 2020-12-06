import React from "react";
import "../styles/App.css";
import "../styles/NavBar.css";
import NavBar from "../components/NavBar";
import Properties from "../components/Properties";
import AddProperty from "../components/AddProperty";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </>
  );
}

export default App;
