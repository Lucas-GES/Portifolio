import React from "react"
import { NavLink } from 'react-router-dom';
import '../Css/ListStyle.css';

const List = () => {

    return (
        <>
                <header>
                    <div className="container">
                        <nav>
                            <div className="list">
                                <NavLink to='/' className='listItem home'>Home</NavLink>
                                <NavLink to='/sobre' className='listItem'>Sobre</NavLink>
                                <NavLink to='/contato' className='listItem'>Contato</NavLink>
                                <NavLink to='/projetos' className='listItem'>Projetos</NavLink>
                            </div>
                        </nav>
                    </div>
                </header>
        </>
    )
}
export default List;