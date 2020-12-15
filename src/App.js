import React, { useState } from "react";
import "./App.css";
import NavbarPiola from "./Components/comun/navbarPiola";
import Footer from './Components/Footer'
function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <NavbarPiola/>
            <Footer/>
        </div>
    );
}
export default App;
