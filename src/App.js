import React, { useState } from "react";
import "./App.css";
import NavbarPiola from "./Components/comun/navbarPiola";
import { Container } from 'react-bootstrap'

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <NavbarPiola/>
        </div>
    );
}
export default App;
