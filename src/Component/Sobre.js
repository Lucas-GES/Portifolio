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
                    <h3>Olá meu nome é Lucas Gabriel do Espirito Santo, 
                    me formei em Engenharia de Software no ano de 2022 na UniFil.
                    Mesmo com o fim da faculdade não se pode parar os estudos, 
                    porque nessa área se não se atualizar fica para trás.
                    De experiência atual posso colocar meu ultimo ano de estágio, 
                    pois nesse ano desenvolvi um sistema que tem como função gerar trabalhos acadêmicos 
                    ja formatados nas normas da ABNT. 
                    Para o desenvolvimento utilizei os frameworks Laravel para o backend, 
                    VueJs para o frontend e no banco PostreSql e tendo para a comunicação entre
                    front e back o InertiaJs.<br/>
                    Trabalhar com essas tech foi complicado de inicio por não ter o contato, 
                    mas nada que uma boa documentação 
                    nos ajude a aprender uma nova tecnologia que ainda não tivemos contato.<br/>
                    Durante os estudos na faculdade tive bastante contato com a linguagem Java, 
                    uma boa base que foi ensinado, com MySql
                    tambem com uma bela base de ensino e um pouco de Python, 
                    principalmente na disciplina de Inteligência Artificial.<br/>
                    Além dessa base da faculdade, conclui um curso de HTML e CSS 
                    e outro de JavaScript na plataforma da Udemy. 
                    Aprendi um pouco de React, por meio de tutoriais, 
                    documentação e com pequenos projetos pessoais incluindo esse portifólio feito todo em React.<br />
                    Abaixo estão algumas de minhas skills:</h3>
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