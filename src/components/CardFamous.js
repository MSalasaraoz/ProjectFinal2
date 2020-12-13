import React from 'react'
import './card.css'
import famousPeople from './famousPeople'
function CardFamous() {
  

    //this is the functions were the rarity of the cards modify the design
    function cardDesignVariant(rarity) {
        switch (rarity) {
            case "images/rare.png":
                return "card-design-rare"
                break;
            case "images/medium-rare.png":
                return "card-design-medium-rare"
                break;
            case "images/common.png":
                return "card-design-common"
                break;
            default:
                return ""
                break;
        }
    }
    function cardTitleVariant(rarity) {
        switch (rarity) {
            case "images/rare.png":
                return "card-title-rare"
                break;
            case "images/medium-rare.png":
                return "card-title-medium-rare"
                break;
            case "images/common.png":
                return "card-title-common"
                break;
            default:
                return ""
                break;
        }
    }
    function cardTypeVariant(rarity) {
        switch (rarity) {
            case "images/rare.png":
                return "card-type-rare"
                break;
            case "images/medium-rare.png":
                return "card-type-medium-rare"
                break;
                case "images/common.png":
                    return "card-type-common"
                    break;
            default:
                return ""
        }
    }
    function cardPowerVariant(rarity) {
        switch (rarity) {
            case "images/rare.png":
                return "card-power-rare"
                break;
            case "images/medium-rare.png":
                return "card-power-medium-rare"
                break;
            case "images/common.png":
                return "card-power-common"
                break;
            default:
                return ""
        }
    }
    //this is were the cards find the final design
        
    const ShowCards = <div className="flex-cards">
        {famousPeople.map((VIP) =>
        <div className={cardDesignVariant(VIP.rarity)}>
        <p className={cardTitleVariant(VIP.rarity)}>{VIP.name}</p>
        <img className="card-image" src={VIP.img} alt=""></img>
        <div className="description-flex">
            <div className={cardTypeVariant(VIP.rarity)}>{VIP.type}</div>
            <img className="card-rarity" src={VIP.rarity} alt=""></img>
        </div>
        <div className={cardPowerVariant(VIP.rarity)}>{VIP.power}</div>
    </div>)} </div>
    


    return(
        ShowCards
        );

};
export default CardFamous;