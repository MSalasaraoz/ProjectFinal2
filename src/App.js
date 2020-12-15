import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormNewUser from "./Components/NewUserComponents/FormNewUser";
// import AdminUser from './Components/NewUserComponents/AdminUser';
//Ver donde colocamos la administracion de usuarios
import Inicio from "./Components/Inicio";
import Nosotros from "./Components/Nosotros";
import LogIn from "./Components/LogIn";
import "bootstrap/dist/css/bootstrap.css";
import NavbarPiola from "./Components/navbar";

function App(props) {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Router>
                <NavbarPiola></NavbarPiola>
                <Switch>
                    <Route path="/" exact>
                        <Inicio />
                    </Route>
                    <Route path="/nosotros">
                        <Nosotros />
                    </Route>
                    <Route path="/formnewuser">
                        <FormNewUser />
                    </Route>
                    <Route path="/login">
                        <LogIn />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
export default App;
