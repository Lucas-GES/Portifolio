import { Link } from 'react-router-dom';
import '../../Css/Projetos/EstagioStyle.css';

const Dsmeta = () => {

    return(
        <>
            <div className="title">
                <Link to={'/projetos'} style={{textDecoration: 'none'}}><h3>Retornar</h3></Link>
                <h1>DsMeta</h1>
            </div>
            <div className="body">
                <div className="alinhar">
                    <p>
                        Esse projeto foi desenvolvido durante a "Semana Spring React", 
                        que foi um evento gratuito realizado pelo Nelio Alves e se trata 
                        de uma tabela de vendedores contendo informações sobre suas vendas, 
                        onde há a possivilidade de enviar um sms para o número cadastrado no sistema 
                        informando sobre o vendedor e seus dados de venda. <br /> Para o 
                        desenvolvimento foi utilizado os frameworks React para o frontend 
                        e Springboot para o backend que utiliza a linguagem Java, para o 
                        banco de dados foi utilizado o PostgreSql, também foi feita 
                        uma integração com a API de comunicação sms, voz e video chamada Twilio.
                        <br />
                        Ao finalizar o desenvolvimento foi feito o deploy do frontend no Netlify 
                        e o backend no Heroku, sendo migrado o banco tambem para o Heroku. 
                        <br />
                        Atualmente migrei o backend da aplicação para o Render porque o Heroku mudou o plano gratuito que haviam, 
                        e por se tratar de um plano gratuito a um certo delay para o carregamento dos dados, pois no plano gratuito 
                        a aplicação fica "hibernando" se não acessada. <br />
                        É possivel acessar a aplicação rodando através desse link: <a href={"https://dsmeta-luck.netlify.app/"} target="_blank" rel="noreferrer" >DSMeta</a> 
                    </p>
                </div>
                <div className="post">
                    <h3>Tela inicial com as informações do vendedores</h3>
                    <div className="alinhar">
                        <p>O sistema faz uma busca dos vendedores e seus dados de vendas no banco e retorna 
                            essa lista, onde existe dois campos para fazer um filtro de período, que retorna 
                            apenas os vendedores e vendas feitas no intervalo selecionado.
                        </p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_dsmeta/dsmeta.jpg')} alt="dsmeta" />
                    </div>
                </div>
            </div>
        </>
    );

}

export default Dsmeta;