import React, { useEffect, useState } from "react";

import logo from '../../img/logo.png'
import { Link } from "react-router-dom";

import '../../css/header.css'

export default props => {
    const [buttons, setButtons] = useState([{ url: "/", name: "Home" }, { url: "/Clients", name: "Clients" },
    { url: "/Products", name: "Products" }, { url: "/Contact", name: "Contact" }]);

    useEffect(() => {
        setButtons(bt => bt.filter(x => x.url != window.location.pathname));
    }, []);

    return (
        <>
            <header>
                <div className="headerLogo">
                    <Link to="/">
                        <img className="logoHeader" alt="Gabel Tech's logo" src={logo} width="40vw" height="40vh" />
                    </Link>
                </div>

                <div className="headerActButtons">
                   {buttons.map(bt => <Link key={bt.name} to={bt.url}>{bt.name}</Link>)}
                </div>
            </header>
        </>
    )
}