import { Link } from 'react-router-dom';
import '../../Css/Projetos/EstagioStyle.css';

const Dsmovie = () => {

    return(
        <>
            <div className="title">
                <Link to={'/projetos'} style={{textDecoration: 'none'}}><h3>Retornar</h3></Link>
                <h1>DsMovie</h1>
            </div>
            <div className="body">
                <div className="alinhar">
                    <p>
                        Esse projeto foi desenvolvido durante a "Semana Spring React", 
                        que foi um evento gratuito realizado pelo Nelio Alves e se trata 
                        de um catálogo de filmes, onde é possivel acessar determinado filme 
                        no catálogo e fazer a avaliação de 0 a 5 estrelas, onde é preciso o 
                        usuário informar seu email para ficar salva a avaliação. <br /> Para o 
                        desenvolvimento foi utilizado os frameworks React para o frontend 
                        e Springboot para o backend que utiliza a linguagem Java, para o 
                        banco de dados foi utilizado o PostgreSql. <br /> Ao finalizar o desenvolvimento 
                        foi feito o deploy do frontend no Netlify e o backend no Heroku, sendo 
                        migrado o banco tambem para o Heroku. <br />
                        Atualmente migrei o backend da aplicação para o Render porque o Heroku mudou o plano gratuito que haviam, 
                        e por se tratar de um plano gratuito a um certo delay para o carregamento dos dados, pois no plano gratuito 
                        a aplicação fica "hibernando" se não acessada. <br />
                        É possivel acessar a aplicação rodando através desse link: <a href={"https://luck-dsmovie.netlify.app/"} target="_blank" rel="noreferrer" >DSMovie</a> 
                    </p>
                </div>
                <div className="post">
                    <h3>Tela inicial com o Catálogo de Filmes</h3>
                    <div className="alinhar">
                        <p>O sistema faz uma busca dos filmes no backend e retorna uma página, 
                            um filtro de quantidade que deve ser retornado por página 
                            para não conter todos os filmes em apenas uma única, evitando uma poluição por  excesso de conteudo 
                            em apenas uma página.</p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_dsmovie/catalogo.jpg')} alt="catalogo" />
                    </div>
                </div>
                <div className="post">
                    <h3>Tela para avaliação do filme selecionado</h3>
                    <div className="alinhar">
                        <p>Ao selecionar um filme, o usuário vai para essa página 
                            que contém um card com um pequeno formulário de dois campos 
                            para inserir o email e selecionar o numero de estrelas para o filme, 
                            indo de 1 a 5 estrelas.
                        </p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_dsmovie/tela_avaliacao.jpg')} alt="tela_avaliacao" />
                    </div>
                </div>
            </div>
        </>
    );

}

export default Dsmovie;