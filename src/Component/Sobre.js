import React from "react";
import '../Css/SobreStyle.css';

const Sobre = () => {
    return (
        <>
            <div className="sobreContainer">
                <div className="sobreImage">
                    <img src={require('../Images/eu.jpeg')} alt="me" />
                </div>
                <div className="sobreText">
                    <h3>Olá meu nome é Lucas Gabriel do Espirito Santo</h3>
                    <h3>Sou formado em Engenharia de Software</h3>
                    <h3>Eterno estudante, porque nessa área e na nossa vida, <br /> nunca paramos de aprender</h3>
                    <h3>Abaixo estão algumas de minhas skills:</h3>
                    <img style={{width: '30%'}} src={require('../Images/arrowdown.png')} alt="" />
                </div>
            </div>
            <div>
                <img style={{ width: '20%', margin: '5%' }} src={require('../Images/web.png')} alt="" />
                <img style={{ width: '8%', margin: '5%' }} src={require('../Images/python.png')} alt="" />
                <img style={{ width: '15%', margin: '5%' }} src={require('../Images/java.png')} alt="" />
                <img style={{ width: '15%', margin: '5%' }} src={require('../Images/react.png')} alt="" />
                <img style={{ width: '20%', margin: '5%' }} src={require('../Images/laravel.png')} alt="" />
                <img style={{ width: '10%', margin: '5%' }} src={require('../Images/vuejs.png')} alt="" />
                <img style={{ width: '10%', margin: '5%' }} src={require('../Images/mysql.png')} alt="" />
            </div>
        </>
    )

}
export default Sobre;