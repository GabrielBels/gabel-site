import React from "react";

import '../../css/customericon.css';

export default props => {
    return (
        <>
            <div className="card" id={props.id}>
                <img src={props.src} style={{backgroundColor: props.bgColor ?? "none"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.customerName}</h5>
                    <p className="card-text">{props.customerDescription}</p>
                </div>
            </div>
        </>
    )
}