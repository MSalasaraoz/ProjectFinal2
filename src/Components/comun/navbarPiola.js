import React, { useState } from "react";
import "./navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "../Inicio";
import Nosotros from "../Nosotros";
// import Admin from "./Admin";
import AltaUsuarioApp from "../abm/usuarios/AltaUsuarioApp";

function NavbarPiola() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Router>
            <div className="Navbar-background">
            <div className="flex-item-1">
                <a href="/">
                    <img className="Logo" src="logo.png" alt=""></img>
                    <img
                        src="projectfinale.png"
                        class="Logo-text"
                        alt=""
                    ></img>
                </a>
                <a href="/Nosotros" className="sub-menu">
                    Nosotros
                </a>
            </div>
            <div className="flex-item-2">
                {/* <a href="/SignUp" className="sign-up">
                    Inicia Sesión
                </a> */}
                <a href="/Registrarse" className="sign-up">
                    Registro
                </a>
            </div>
        </div>
        <Switch>
            <Route path="/" exact>
                <Inicio />
            </Route>
            <Route path="/Nosotros">
                <Nosotros />
            </Route>
            <Route path="/Registrarse">
                <AltaUsuarioApp/>
            </Route>
            {/* <Route path="/CardCelebrity">
                <CardCelebrity />
            </Route> */}
            {/* <Route path="/Admin">
                <Admin />
            </Route> */}
        </Switch>
        </Router>


        
    );
}

export default NavbarPiola;
