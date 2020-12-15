import React, { useState } from "react";
import "./navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "../Inicio";
import Nosotros from "../Nosotros";
import AltaUsuarioApp from "../abm/usuarios/AltaUsuarioApp";
import InicioSesionApp from "../abm/usuarios/InicioSesionApp";
import Admin from "../Admin";
function NavbarPiola() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Router>
            <div className="Navbar-background">
                <div className="flex-item-1">
                    <a href="/">
                        
                        <img
                            src="projectfinale.png"
                            class="Logo-text"
                            alt=""
                        ></img>
                    </a>
                    <a href="/Nosotros" className="sub-menu">
                        Nosotros
                    </a>
                    <a href="/Admin" className="sub-menu">
                        Admin
                    </a>
                </div>
                <div className="flex-item-2">
                    <a href="/login" className="sign-up">
                        Ingresar
                    </a>
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
                <Route path="/Admin">
                    <Admin />
                </Route>
                <Route path="/login">
                    <InicioSesionApp />
                </Route>
                <Route path="/Registrarse">
                    <AltaUsuarioApp/>
                </Route>
            </Switch>
        </Router>
    );
}
export default NavbarPiola;
