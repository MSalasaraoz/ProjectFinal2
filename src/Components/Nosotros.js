import React from 'react';
import './carta/carta.css';
import arrayNosotros from './arrayNosotros';
function Nosotros(){
    function cardDesignVariant(rarity) {
        switch (rarity) {
            case "rare.png":
                return "card-design-rare"
                break;
            case "medium-rare.png":
                return "card-design-medium-rare"
                break;
            case "common.png":
                return "card-design-common"
                break;
            default:
                return ""
                break;
        }
    }
    function cardTitleVariant(rarity) {
        switch (rarity) {
            case "rare.png":
                return "card-title-rare"
                break;
            case "medium-rare.png":
                return "card-title-medium-rare"
                break;
            case "common.png":
                return "card-title-common"
                break;
            default:
                return ""
                break;
        }
    }
    function cardTypeVariant(rarity) {
        switch (rarity) {
            case "rare.png":
                return "card-type-rare"
                break;
            case "medium-rare.png":
                return "card-type-medium-rare"
                break;
                case "common.png":
                    return "card-type-common"
                    break;
            default:
                return ""
        }
    }
    function cardPowerVariant(rarity) {
        switch (rarity) {
            case "rare.png":
                return "card-power-rare"
                break;
            case "medium-rare.png":
                return "card-power-medium-rare"
                break;
            case "common.png":
                return "card-power-common"
                break;
            default:
                return ""
        }
    }
    //this is were the cards find the final design  
    const ShowMembers = <div className="flex-cards">
        {arrayNosotros.map((VIP) =>
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
        ShowMembers
        );
}
export default Nosotros;