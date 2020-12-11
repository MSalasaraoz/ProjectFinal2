import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import logo from './Components/logo.png';
import FormNewUser from './Components/NewUserComponents/FormNewUser';
// import AdminUser from './Components/NewUserComponents/AdminUser';
//Ver donde colocamos la administracion de usuarios
import Inicio from './Components/Inicio';
import Nosotros from './Components/Nosotros';
import LogIn from './Components/LogIn';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'

function App(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Router>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/"><img src={logo}></img></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/nosotros">Nosotros</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Personajes
              </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Ricardo Fort
                </DropdownItem>
                  <DropdownItem>
                    Graciela Alfano
                </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Link to="/login">
            <Button>Login</Button>
            </Link>
            <Link to="/formnewuser">
              <Button>Registro</Button>
            </Link>
          </Collapse>
        </Navbar>
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
