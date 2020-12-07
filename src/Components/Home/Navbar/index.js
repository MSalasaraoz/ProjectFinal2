import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {ButtonGroup, Button} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import logo from './logo.png';
import NewUser from '../../NewUserComponents/NewUser';



const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Router>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><img src={logo}></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Nosotros</NavLink>
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
              <Button>Login</Button>
            <Link to="/newuser">
            <Button>Registro</Button>
          </Link>
        </Collapse>
      </Navbar>
      <Switch>
            <Route path="/newuser">
            <NewUser />
          </Route>
            </Switch>
      </Router>
    </div>
  );
}

export default Example;