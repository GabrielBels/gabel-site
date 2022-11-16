import React from "react";

import Header from "./Header";
import Calendly from "./Calendly";
import Typing from "./Typing";

export default props => {
    return (
        <>
        <Header/>
        <Typing />
        <Calendly />
        </>
    )
}