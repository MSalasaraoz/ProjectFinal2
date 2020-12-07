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
      <Router> 
        <Example/>
        </Router>
    </>
  );
}

export default App;
