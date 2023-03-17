import React from "react";
import visa from '../assets/visa.svg'
import mastercard from '../assets/master_card.svg'
import boleto from '../assets/boleto.svg'
import hipercard from '../assets/hipercard.svg'

const Footer = () => {
    return(
        <div className="footer">
            <div className="footerTitle">
                <h4>Payment Method:</h4>
            </div>
            <div className="paymentsFooter">
                <img src={visa} alt='visa' />
                <img src={mastercard} alt='mastercard'/>
                <img src={boleto} alt='boleto'/>
                <img src={hipercard} alt='hipercard'/>
            </div>
        </div>
    )
}

export default Footer