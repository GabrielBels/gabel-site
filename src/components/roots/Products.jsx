import React from "react";

import Header from "../partials/Header";
import Calendly from "../partials/Calendly";
import Typing from "../partials/Typing";
import ContactBar from "../partials/SocialMediasBar";

export default props => {
    return (
        <>
        <Header/>
        <Typing />
        <ContactBar />
        <Calendly />
        </>
    )
}