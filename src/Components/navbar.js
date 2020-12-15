import React from "react";
import logo from "./logo.png";
import "./navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "./submenu/Inicio";
import OwnCards from "./submenu/OwnCards";
import Us from "./submenu/Us";
import SignUp from "./submenu/SignUp";
import Admin from "./Admin";
import UserPage from "./NewUserComponents/UserPage";
import CardCelebrity from "./CardCelebrity";

function Navbar() {
  return (
    <Router>
      <div className="Navbar-background">
        <div className="flex-item-1">
          <a href="/">
            <img className="Logo" src={logo} alt=""></img>
            <img src="projectfinale.png" class="Logo-text" alt=""></img>{" "}
          </a>
          <a href="/Own-Cards" className="sub-menu">
            Tus Cartas
          </a>
          <a href="/Us" className="sub-menu">
            Nosotros
          </a>
        </div>
        <div className="flex-item-2">
          <a href="/newuser" className="sign-up">
            Registro
          </a>
        </div>
        <div className="flex-item-2">
          <a href="/Admin" className="sign-up">
            Administrar
          </a>
        </div>
        <div className="flex-item-2">
          <a href="/CardCelebrity" className="sign-up">
            Crear cartas
          </a>
        </div>
        <div className="flex-item-2">
          <a href="/SignUp" className="sign-up">
            Inicia Sesión
          </a>
        </div>
      </div>

      <Switch>
        <Route path="/" exact>
          <Inicio />
        </Route>
        <Route path="/Own-Cards">
          <OwnCards />
        </Route>
        <Route path="/Us">
          <Us />
        </Route>
        <Route path="/newuser">
          <UserPage />
        </Route>
        <Route path="/CardCelebrity">
          <CardCelebrity />
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
