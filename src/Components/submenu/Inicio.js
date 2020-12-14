import React from 'react';
import  './MainStyle.css'
import CardFamous from './CardFamous';

function Inicio(){
    return(
        <div className="Home-flex">
        <p className="title">Bienvenido a Project Finale</p>
        <p className="Main-Body"> Aquí podras adquirir las mejores cartas del juego de rol que revoluciono las mesas de las casas y los programas de chimentos. Toda habilidad de la fama y el estrellato condensadas en poderes en este intrincado pero emocionante juego de rol donde la fama no garantiza que salgas victorioso. puedes comprar aquí cartas de manera al azar para luego combinarlas en estrategias que te hagan el ganador. Buena Suerte y no te olvides, no metas el cutucuchillo ahí ;).</p>
        <p className="Buy-Button">Comprar X1 Carta</p>
        <CardFamous/>
        </div>)
}
export default Inicio;