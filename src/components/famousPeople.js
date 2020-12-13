import React from 'react'
import CardFamous from './CardFamous'


  //this is the array of objects with the data of the cards
    const famousPeople = [
        {
            id: 0,
            name: 'Graciela Alfano',
            img: "/images/6RK4M7OUSBGEBDHRI6S4Z3E2ZU.jpg",
            type: 'Artes oscuras',
            rarity: 'images/rare.png',
            power: "Hechicera: una vez que elije un oponente y sacrificando una carta. Elimina la carta oponente"
        },
        {
            id: 1,
            name: 'Santiago del Moro',
            img: "images/Santiago del moro.jpg",
            type: 'Artes dramaticas',
            rarity: 'images/rare.png',
            power: 'Poderes telekineticos: elige una carta oponente del enemigo e indaga en sus problemas de la infancia hasta que lo hace llorar.'
        },
        {
            id: 2,
            name: 'Guido Kafka',
            img: "images/Guido Kafka.png",
            type: "Artes bufonicas",
            rarity: "images/rare.png",
            power: 'Encantamientos: distrae hasta a tres cartas del oponente en un concurso de comer sandwich picantes. 2 quedan eliminadas del juego al azar'
        },
        {
            id: 3,
            name: 'Marcelo Tinelli',
            img: "images/marcelo tinelli.jpg",
            type: "Artes mediaticas",
            rarity: "images/rare.png",
            power: 'Cuando esta carta es jugada. tus cartas ganan fama haciendolas mas poderosas. Gana fuerza si la invocas con la carta magica "Reidores" '
        },
        {
            id: 4,
            name: 'Mirtha Legrand',
            img: "images/Mirta legrand.jpg",
            type: "Artes longevas",
            rarity: "images/rare.png",
            power: "esta carta tiene el poder de hacer preguntas incomodas. disminuye la fuerza de los oponentes. indestructible y eterna en el campo de juego."
        },
        {
            id: 5,
            name: 'La Bomba Tucumana',
            img: "images/Gladys la bomba tucumana.jpg",
            type: "Disciplinas tropicales",
            rarity: "images/medium-rare.png",
            power: "cuando es jugada con la carta magica 'pollera amarilla' las cartas del oponente enloquecen y quedan inutilizadas por un turno"
        },
        {
            id: 6,
            name: 'Marixa Balli',
            img: "images/marixa balli.jpg",
            type: "Disciplinas Cachaqueanas",
            rarity: "images/medium-rare.png",
            power: "Una vez que entra al juego se invoca la carta magica 'la cachaca' cada oponente debe cantar el estribillo sino debe sacrificar dos cartas"
        },
        {
            id: 7,
            name: 'Fernando Burlando',
            img: "images/Fernando Burlando.png",
            type: "Disciplinas legales",
            rarity: "images/medium-rare.png",
            power: "Puede salvar de los efectos de las cartas contrarias a las cartas propias. Para ello hay que sacrificar una carta y pagar 5000 dolares."
        },
        {
            id: 8,
            name: 'Karina la princesita',
            img: "images/karina la princesita.jpg",
            type: "Disciplinas cumbieras",
            rarity: "images/medium-rare.png",
            power: "una vez que esta carta esta en la mesa puede reaccionar a la voz de la carta oponente. la carta que recibe un 1 va al telefono y es eliminada a los dos turnos."
        },
        {
            id: 9, 
            name: 'Kun Agüero',
            img: "images/kun aguero.jpg",
            type: "Disciplinas Twicheras",
            rarity: "images/medium-rare.png",
            power: "la partida solo empieza con el jugador que tenga en su poder esta carta. Al colocar debe decir un hecho tragico reciente y terminar con 'bueno vamo a juga'."
        },
        {
            id: 10,
            name: "Maradona",
            img: "images/Diego maradona.jpg",
            type: "Artes futbolisticas",
            rarity: "images/rare.png",
            power: "ganas el juego si podes pegarle con la mano al oponente. perdes si el oponente puede hacerte un antidoping"
        },
        {
            id: 11,
            name: "Marianela Mirra",
            img: "images/marianela mirra.jpg",
            type: "Tecnicas Granhermanisticas",
            rarity: "images/common.png",
            power: "elige dos cartas del oponente para hacerle una espontanea. por dos turnos la cartas desaparecen. Alguien le grita de lejos al oponente que paso y se elimina esta carta."
        },
        {
            id: 12,
            name: "Marco Canevaro",
            img: "images/marco canevaro.jpg",
            type: "Tecnicas Codeadoras",
            rarity: "images/common.png",
            power: "expero en back-end pero por una quebradura de la back debe hacer sentadillas para levantar cosas del piso. una vez jugada, tu codigo compila."
        },
        {
            id: 13,
            name: "Fabrizio Tonín",
            img: "images/Fabrizio tonin.jpg",
            type: "Tecnicas Codeadoras ",
            rarity: "images/common.png",
            power: "una vez jugada puede conseguirte las apis mas exclusivas del mercado... del mercado de jujuy... con unos buñuelos."
        },
        {
            id: 14,
            name: "John C",
            img: "images/John C.jpg",
            type: "Tecnicas Trapeadoras",
            rarity:"images/common.png",
            power: "Una vez que esta carta es jugada, las cartas del oponente no pueden ir al pary porque no tienen una c90. quedan inutilizadas por un turno." 
        },
        {
            id: 15,
            name: 'Damian Kuc',
            img: "images/damien kuc.jpg",
            type: "tecnicas gugleativas",
            rarity: "images/common.png",
            power: "elige la carta de un oponente y puedes describir datos de la vida de ese personaje de manera erronea. Desde ese turno, esa información es verdad"
        }
    ]

export default famousPeople;