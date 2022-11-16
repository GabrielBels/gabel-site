import React from "react";

import logo from '../img/logo.png'
import { Link } from "react-router-dom";

import '../css/header.css'

export default props => {
    return (
        <>
            <header>
                <div className="headerLogo">
                    <Link to="/">
                        <img className="logoHeader" alt="Gabel Tech's logo" src={logo} width="40vw" height="40vh" />
                    </Link>
                </div>

                <div className="headerActButtons">
                    <Link to="/">Início</Link>
                    <Link to="/Clientes">Nossos clientes</Link>
                    <Link to="/Planos">Nossos planos</Link>
                    <Link to="/Contato">Contato</Link>
                </div>
            </header>
        </>
    )
}