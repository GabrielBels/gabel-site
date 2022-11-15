import React from "react";
import { Link } from "react-router-dom";


export default props => {
    return (
        <>
        <h1>Página não encontrada!</h1>
        Clique <Link to="/">aqui</Link> para voltar à página inicial.
        </>
    )
}