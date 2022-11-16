import React, { useEffect, useState, useRef } from "react";


import worldVideo from '../img/world.mp4';
import '../css/typing.css';

export default props => {
    const adjectivesArr = ["damos nosso máximo", "somos comprometidos com a sua satisfação",
        "somos criativos", "somos experts em inovação", "nos importamos com seu negócio", "somos Gabel Tech"];

    const [adjective, setAdjective] = useState(adjectivesArr[0]);

    // Method to change adjectives of Gabel
    useEffect(() => {
        const adjIndex = adjectivesArr.indexOf(adjective);

        if (adjIndex == adjectivesArr.length - 1) {
            setTimeout(() => {

                setAdjective(adjectivesArr[0]);
            }, 5000);
        } else {
            setTimeout(() => {

                setAdjective(adjectivesArr[adjIndex + 1]);
            }, 1500);
        }
    }, [adjective]);

    return (
        <div className="divTypingRoot">
            <video autoPlay muted loop id="worldVideo">
                <source src={worldVideo} type="video/mp4"></source>
            </video>
            <div className="divTyping">

                <h1 className="h1Adjectives" >
                    Nós <span className="weAreAdjectives">{adjective}</span>
                </h1>
            </div>
        </div >
    )
}