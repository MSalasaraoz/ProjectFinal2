import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./NewUserComponents/StyleNewUser.css";
import "./NewUserComponents/font-register.css";

function CardCelebrity() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState({
    cardName: "",
    img: "",
    type: "",
    rarity: "",
    power: "",
  });
  return (
    <>
      <h1>Soy la pagina del cartas</h1>
      <CardCelebrity
        setCard={setCard}
        card={card}
        cards={cards}
        setCards={setCards}
      />
    </>
  );
}
export default CardCelebrity;
