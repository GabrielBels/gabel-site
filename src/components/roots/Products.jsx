import React from "react";

import Header from "../partials/Header";
import Calendly from "../partials/Calendly";
import ContactBar from "../partials/SocialMediasBar";
import Background from "../partials/Background";
import Products from "../partials/Products";

export default props => {
    return (
        <>
        <Header/>
        <Background isColor={true} color="#000" />
        <Products />
        <ContactBar />
        <Calendly />
        </>
    )
}