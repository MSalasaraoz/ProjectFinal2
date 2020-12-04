import React from 'react'
import './cards.css'
function Cards(){
    const famousPeople = {name: 'Graciela Alfano', img: "/images/6RK4M7OUSBGEBDHRI6S4Z3E2ZU.jpg",type: 'Artes oscuras', rarity: 'images/rare.png', power: "Hechicera: una vez que elije un oponente y sacrificando una carta. Elimina la carta oponente" };
    return(
        <div className="card-design">
            <p className="card-title">{famousPeople.name}</p>
            <img className="card-image" src={famousPeople.img} alt=""></img>
            <div className="description-flex">
                <div className="card-type">{famousPeople.type}</div>
                <img className="card-rarity" src={famousPeople.rarity} alt=""></img>
            </div>
            <div className="card-power">{famousPeople.power}</div>
        </div>)

}
export default Cards;