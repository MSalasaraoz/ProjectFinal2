import React from 'react'
import './carta.css'
import famousPeople from './arrayCartas'

function CardFamous(props) {
    function cardDesignVariant(rarity) {
        switch (rarity) {
            case "rare.png":
                return "card-design-rare"
            case "medium-rare.png":
                return "card-design-medium-rare"
            case "common.png":
                return "card-design-common"
            default:
                return ""
        }
    }
    function cardTitleVariant(rarity) {
        switch (rarity) {
            case "rare.png":
                return "card-title-rare"
            case "medium-rare.png":
                return "card-title-medium-rare"
            case "common.png":
                return "card-title-common"
            default:
                return ""
        }
    }
    function cardTypeVariant(rarity) {
        switch (rarity) {
            case "rare.png":
                return "card-type-rare"
            case "medium-rare.png":
                return "card-type-medium-rare"
            case "common.png":
                return "card-type-common"
            default:
                return ""
        }
    }
    function cardPowerVariant(rarity) {
        switch (rarity) {
            case "rare.png":
                return "card-power-rare"
            case "medium-rare.png":
                return "card-power-medium-rare"
            case "common.png":
                return "card-power-common"
            default:
                return ""
        }
    }
        
    const ShowCard = 
        <div className="flex-cards">
            {famousPeople.map((vipCard) =>
                <div className={cardDesignVariant(vipCard.rarity)}>
                <p className={cardTitleVariant(vipCard.rarity)}>
                    {vipCard.name}
                </p>
                <img className="card-image" src={vipCard.img} alt=""></img>
                <div className="description-flex">
                    <div className={cardTypeVariant(vipCard.rarity)}>{vipCard.type}</div>
                    <img className="card-rarity" src={vipCard.rarity} alt=""></img>
                </div>
                <div className={cardPowerVariant(vipCard.rarity)}>
                    {vipCard.power}
                </div>
            </div>)} 
        </div>

    return(
        ShowCard
    );
};

export default CardFamous;
