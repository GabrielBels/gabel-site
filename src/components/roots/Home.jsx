import React from "react";

import Header from "../partials/Header";
import Calendly from "../partials/Calendly";
import Typing from "../partials/Typing"
import ContactBar from "../partials/SocialMediasBar";
import Background from "../partials/Background";

import worldVideo from '../../video/world.mp4';

export default props => {
    return (
        <>
        <Header/>
        <Typing />
        <Background src={worldVideo} isVideo={true}/>
        <ContactBar />
        <Calendly />
        </>
    )
}