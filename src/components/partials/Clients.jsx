import React, { useEffect, useState, useRef } from "react";

import '../../css/clients.css';

import aguiarLogo from '../../img/clients/aguiar.jpg'
import contselfLogo from '../../img/clients/contself.png'
import federiciLogo from '../../img/clients/federici.png'
import itineranceLogo from '../../img/clients/itinerance.png'
import market4uLogo from '../../img/clients/market4u.png'
import weopenLogo from '../../img/clients/weopen.jpg'

import CustomerIcon from "./CustomerIcon";

export default props => {
    const [customers, setCustomers] = useState(["iconAguiarRacoes", "iconContself", "iconFederici", "iconItinerance", "iconMarket4u",
        "iconWeopen"]);

    const [isComputerViewport, setIsComputerViewport] = useState(window.matchMedia("(min-width: 768px)").matches);

    function dropIconjQuery(index) {
        setTimeout(() => {
            window.dropIcon(customers[index]);

            dropIconjQuery(index + 1);
        }, 10);
    }

    useEffect(() => {
        dropIconjQuery(0);
    }, [])

    return (
        <>
            <div className="titleOurClients">
                <h1>Meet Our Clients</h1>
                <hr />
            </div>
            <div className="divOurClients">
                <CustomerIcon id="iconAguiarRacoes" src={aguiarLogo} bgColor="white" customerName="Aguiar Racoes" />
                <CustomerIcon id="iconContself" src={contselfLogo} bgColor="white" customerName="ContSelf" />
                {!isComputerViewport ? <div className="break"></div> : ""}
                <CustomerIcon id="iconFederici" src={federiciLogo} customerName="Federici.vip" />
                {isComputerViewport ? <div className="break"></div> : ""}
                <CustomerIcon id="iconItinerance" src={itineranceLogo} customerName="Itinerance Buffet" />
                {!isComputerViewport ? <div className="break"></div> : ""}
                <CustomerIcon id="iconMarket4u" src={market4uLogo} customerName="Market4u" />
                <CustomerIcon id="iconWeopen" src={weopenLogo} customerName="We Open" />
            </div>
        </>
    )
}