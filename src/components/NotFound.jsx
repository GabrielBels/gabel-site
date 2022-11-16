import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

export default props => {
    return (
        <>
            <Header />
            
            <h1>Página {window.location.pathname} não encontrada!</h1>
            Clique <Link to="/">aqui</Link> para voltar à página inicial.
        </>
    )
}