import React from "react";

import Header from "../partials/Header";
import Calendly from "../partials/Calendly";
import ContactBar from "../partials/SocialMediasBar";
import Background from "../partials/Background";
import ContactContent from "../partials/ContactContent";

export default props => {
    return (
        <>
        <Header/>
        <Background isColor={true} color="#000" />
        <ContactContent />
        <ContactBar />
        <Calendly />
        </>
    )
}