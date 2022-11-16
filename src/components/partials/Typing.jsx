import React, { useEffect, useState, useRef } from "react";

import '../../css/typing.css';

export default props => {
    const adjectivesArr = ["creative", "compromised", "innovative", "passionate", "curious", "Gabel Tech"];

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
            <div className="divTyping">
                <h1 className="h1Adjectives" >
                    We are <span className="weAreAdjectives">{adjective}</span>
                </h1>
            </div>
        </div >
    )
}