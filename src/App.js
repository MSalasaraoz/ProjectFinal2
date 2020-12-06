import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewUser from './Components/NewUserComponents/NewUser';
import AdminNewUser from './Components/Admin/AdminNewUser';
import Inicio from './Components/Inicio';
import Nosotros from './Components/Nosotros';
import Example from './Components/Home/Navbar'
import {ButtonGroup, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  return (
    <>
    <Example/>
      <Router>
        <div className="App">
          <ButtonGroup arial-label="Basic example">
            <Link to="/">
              <Button variant="danger">Inicio</Button>
            </Link>
            <Link to="/nosotros">
              <Button variant="danger">Nosotros</Button>
            </Link>
            <Link to="/newuser">
              <Button variant="danger">Nuevo Usuario</Button>
            </Link>
            <Link to="/admin">
              <Button variant="danger">Administrador</Button>
            </Link>
          </ButtonGroup>
        </div>
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/newuser">
            <NewUser />
          </Route>
          <Route path="/admin">
            <AdminNewUser />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
