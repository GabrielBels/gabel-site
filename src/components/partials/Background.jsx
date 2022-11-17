import React from "react";

import '../../css/background.css';

export default props => {
    return (
        <>
            {!props.isColor ? (props.isVideo == true ? (<video playsInline controls={false} autoPlay muted loop id="bg-element"><source src={props.src} type="video/mp4"></source></video>) 
            : (<img id="bg-element" src={props.src}/>)) : (<div id="bg-element" style={{background: props.color}}></div>)}

            
        </>
    )
}