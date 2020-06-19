import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevoUser from "./components/auth/NuevoUser";
import AdminPanel from "./components/adminpanel/AdminPanel";
import Presentaciondocumental from "./components/presentaciondocumental/Presentaciondocumental";
import HacerRequerimientos from "./components/requerimientos/HacerRequerimientos";
import ResponderRequerimientos from "./components/requerimientos/ResponderRequerimientos";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/nuevo-user" component={NuevoUser} />
        <Route exact path="/admin" component={AdminPanel} />
      </Switch>
    </Router>
  );
}

export default App;
