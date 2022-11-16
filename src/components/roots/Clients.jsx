import React from "react";

import Header from "../partials/Header";
import Calendly from "../partials/Calendly";
import ContactBar from "../partials/SocialMediasBar";
import OurClients from "../partials/OurClients";
import Background from "../partials/Background";

export default props => {
    return (
        <>
        <Header />
        <Background isColor={true} color="#000" />
        <OurClients />
        <ContactBar />
        <Calendly />
        </>
    )
}