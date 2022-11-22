import React, { useEffect } from "react";

import Header from "../partials/Header";
import Calendly from "../partials/Calendly";
import Typing from "../partials/Typing"
import ContactBar from "../partials/SocialMediasBar";
import Background from "../partials/Background";

import worldVideo from '../../video/world.mp4';

export default props => {


    useEffect(() => {
        console.info("Hey! Here is my github URL: https://api.github.com/users/GabrielBels")
        console.info("And a list of my current public repos:")
        fetch('https://api.github.com/users/GabrielBels/repos?per_page=50&page=1').then(result => result.json())
            .then(data => {
                let result = data.reduce((prev, curr, i, arr) => {
                    return prev.concat([{ url: curr.html_url, name: curr.name }]);
                }, []);

                console.log(result);
            });
    }, []);

    return (
        <>
            <Header />
            <Typing />
            <Background src={worldVideo} isVideo={true} />
            <ContactBar />
            <Calendly />
        </>
    )
}