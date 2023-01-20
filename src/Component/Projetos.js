import React from "react";
import '../Css/ProjetosStyle.css';
import {Link} from 'react-router-dom';

const Projetos = (url) => {

    return (
        <>
            <div className="container">
                <h1>Projetos</h1>
                <div className="projetos">
                    <ul>
                        <li>
                            <Link to='estagio'>E³: Easy Essay Editor - Projeto Estágio</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )

}
export default Projetos;