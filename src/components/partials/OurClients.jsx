import React, { useEffect, useState, useRef } from "react";

import '../../css/ourclients.css';

import gabelLogo from '../../img/logo.png'
import aguiarLogo from '../../img/clients/aguiar.jpg'
import contselfLogo from '../../img/clients/contself.png'
import federiciLogo from '../../img/clients/federici.png'
import itineranceLogo from '../../img/clients/itinerance.png'
import market4uLogo from '../../img/clients/market4u.png'
import weopenLogo from '../../img/clients/weopen.jpg'

import CustomerIcon from "./CustomerIcon";

export default props => {

    return (
        <>
            <div className="titleOurClients">
                <h1>Meet Our Clients</h1>
                <hr/>
            </div>
            <div className="divOurClients">
                    <CustomerIcon src={aguiarLogo} bgColor="white" customerName="Aguiar Rações"/>
                    <CustomerIcon src={contselfLogo} bgColor="white" customerName="ContSelf"/>
                    <CustomerIcon src={federiciLogo} customerName="Federici.vip"/>
                    <div className="break"></div>
                    <CustomerIcon src={itineranceLogo} customerName="Itinerance Buffet"/>
                    <CustomerIcon src={market4uLogo} customerName="Market4u"/>
                    <CustomerIcon src={weopenLogo} customerName="We Open"/>
            </div>
        </>
    )
}