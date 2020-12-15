import React from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./StyleNewUser.css";
import "./font-register.css";
import { Form, Button } from "react-bootstrap";
import "./containerform.css";
// import NewCard from './NewCard';

const CardCelebrity = ({ setCard, card, cards, setCards }) => {
  function handleChange(event) {
    setCard({
      ...card,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    console.log(card);
    event.preventDefault();
    console.log(card);
    FormCompleto();
    if (FormCompleto()) {
      setCards([...cards, card]);
      setCard({
        ...card,
      });
    } else {
      alert("El formulario tiene que estar completo");
    }
    console.log("formulario completo", FormCompleto());
  }
  function FormCompleto() {
    if (
      card.cardName !== "" ||
      card.img !== "" ||
      card.type !== "" ||
      card.rarity !== "" ||
      card.power !== ""
    ) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit} name="formNewCard">
        <Form.Group controlId="cardName">
          <Form.Label>Nombre de carta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de carta"
            onChange={handleChange}
            name="cardName"
            value={card.cardName}
          />
        </Form.Group>
        <Form.Group controlId="cardImg">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Imagen"
            onChange={handleChange}
            name="cardImg"
            value={card.img}
          />
        </Form.Group>
        <Form.Group controlId="cardType">
          <Form.Label>Tipo de Carta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tipo de Carta"
            onChange={handleChange}
            name="cardType"
            value={card.type}
          />
        </Form.Group>
        <Form.Group controlId="cardRarity">
          <Form.Label>Rareza</Form.Label>
          <Form.Control
            type="text"
            placeholder="Rareza"
            onChange={handleChange}
            name="cardRarity"
            value={card.rarity}
          />
        </Form.Group>
        <Form.Group controlId="cardPower">
          <Form.Label>Poder</Form.Label>
          <Form.Control
            type="text"
            placeholder="Poder"
            onChange={handleChange}
            name="cardPower"
            value={card.power}
          />
        </Form.Group>
        <Button className="w-100" variant="warning" type="submit">
          Crear
        </Button>
      </Form>
    </>
  );
};
export default withRouter(CardCelebrity);
