import { Link } from "react-router-dom";
import '../../Css/Projetos/EstagioStyle.css';

const Estagio = () => {

    return (
        <>
            <div className="title">
                <Link to={'/projetos'} style={{textDecoration: 'none'}}><h3>Retornar</h3></Link>
                <h1>Easy Essay Editor - E³</h1>
            </div>
            <div className="body">
                <div className="alinhar">
                    <p>
                        Esse sistema foi desenvolvido durante o estágio obrigatório para ser utilizado internamente na faculdade UniFil, 
                        e sua função é de gerar trabalhos acadêmicos formatados nas normas ABNT. 
                        Nele é possivel logar com um conta do Google mas apenas contas internas da UniFil, criar os documentos possuindo as um editor com as funções necessárias para criar um documento, 
                        salvar esse documento para editar depois, adicionar as referências bibliográficas, escolher entre os dois templates 
                        usados na universidade considerados obrigatório que são o de artigo científico e TCC (Trabalho de Conclusão de Curso) 
                        e por fim gerar esse trabalho formatado nas normas e recebe-lo no email que foi efetuado o login com o Google. 
                        Para realização desse sistema foi utilizado os frameworks Laravel, VueJs e InertiaJs para a ligação de ambos, para o banco de dados 
                        foi utilizado o PostgreSQL onde foi armazenado os textos adicionados pelo usuário em um sistema de árvore, onde um usuário tem um template, o template tem vários documentos, 
                        os documentos tem os capitulos e nos capitulos são salvos o conteudo, uma relação no banco de um para muitos. Para o Login com o Google foi utilizada a API do google com as credencias 
                        fornecidas no console e por fim a AWS para armazenamento dos documentos formatados.
                    </p>
                </div>
                <div className="post">
                    <h3>Login com Google</h3>
                    <div className="alinhar">
                        <p>O sistema conta com um Login com o Google em que o aluno utiliza a sua conta da Google da UniFil para poder se autenticar e acessar seus documentos</p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_estágio/login.jpeg')} alt="login" />
                    </div>
                </div>
                <div className="post">
                    <h3>Documentos</h3>
                    <div className="alinhar">
                        <p>Após efetuar o Login com sucesso, o aluno acessa a página principal onde é mostrado a lista com seus documentos já criados, informando o template usado na criação acima do card na lista.</p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_estágio/documentos.jpg')} alt="documentos" />
                    </div>
                </div>
                <div className="post">
                    <h3>Novo Documento</h3>
                    <div className="alinhar">
                        <p>Ao selecionar criar um novo documento na parte superior esquerda, 
                            o aluno pode escolher entre os dois template de trabalhos acadêmicos 
                            em uma modal lateral.
                        </p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_estágio/novo_documento.jpg')} alt="novo_documento" />
                    </div>
                </div>
                <div className="post">
                    <h3>Gerenciar Trabalho Acadêmico</h3>
                    <div className="alinhar">
                        <p>
                            Ao selecionar um documento o aluno acessa a pagina de gerenciamento do seu documento, 
                            podendo mudar o template do documento, editar os capitos do seu trabalho, gerenciar as referências, 
                            gerar o trabalho formatado ou deletar o documento.
                        </p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_estágio/gerenciar_trabalho.jpg')} alt="gerenciar_trabalho" />
                    </div>
                </div>
                <div className="post">
                    <h3>Editar Trabalho Acadêmico</h3>
                    <div className="alinhar">
                        <p>
                            Ao acessar editar trabalho acadêmico o aluno vai para a página com os capitulos adicionados 
                            no seu trabalho, podendo editar, adicionar ou deletar cada um.
                        </p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_estágio/gerenciar_trabalho_academico.jpg')} alt="gerenciar_trabalho_academico" />
                    </div>
                </div>
                <div className="post">
                    <h3>Atualizar informações</h3>
                    <div className="alinhar">
                        <p>
                            O aluno ao clicar no titulo do trabalho pode atualizar as informações do trabalho em uma modal lateral.
                        </p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_estágio/atualizar_informacoes.jpg')} alt="atualizar_informacoes" />
                    </div>
                </div>
                <div className="post">
                    <h3>Capitulo</h3>
                    <div className="alinhar">
                        <p>
                            Selecionando um capitulo é possivel editar com um editor de texto com as funções necessárias de edição, 
                            o editor usado foi o Quill Editor, uma biblioteca disponivel para o VueJs que possibilita 
                            o uso desse editor de texto.
                        </p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_estágio/capitulo.jpg')} alt="capitulo" />
                    </div>
                </div>
                <div className="post">
                    <h3>Adicionar Campo</h3>
                    <div className="alinhar">
                        <p>
                            Modal com opções do tipo de editor a ser adicionado, como um parágrafo, imagem ou titulo.
                        </p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_estágio/adicionar_campo.jpg')} alt="adicionar_campo" />
                    </div>
                </div>
                <div className="post">
                    <h3>Referências</h3>
                    <div className="alinhar">
                        <p>
                            Página com todas as referências adicionadas pelo aluno.
                        </p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_estágio/referencias.jpg')} alt="referencias" />
                    </div>
                </div>
                <div className="post">
                    <h3>Adicionar Referência</h3>
                    <div className="alinhar">
                        <p>
                            Página com um formulário para adicionar uma nova referência bibliográfica utilizada no trabalho.
                        </p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_estágio/adicionar_referencia.jpg')} alt="adicionar_referencia" />
                    </div>
                </div>
                <div className="post">
                    <h3>Gerar Trabalho Formatado</h3>
                    <div className="alinhar">
                        <p>
                            Quando o aluno seleciona gerar o trabalho formatado, o sistema pega todo conteudo salvo no banco e faz o processo 
                            de formatação todo por trás para não atrapalhar o usuário e então é salvo esse 
                            documento no serviço da AWS e pegando o link onde foi salvo esse documento, envia no email 
                            do usuário logado com a conta do Google. 
                        </p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_estágio/gerar_trabalho_formatado.jpg')} alt="gerar_trabalho_formatado" />
                    </div>
                </div>
                <div className="post">
                    <h3>Email enviado</h3>
                    <div className="alinhar">
                        <p>
                            Email com o link do documento formatado no template escolhido que nesse caso foi de artigo científico.
                        </p>
                    </div>
                    <div className="alinhar">
                        <img src={require('../../Images/telas_estágio/email_enviado.jpg')} alt="email_enviado" />
                    </div>
                    <div className="alinhar" style={{marginTop: '20px'}}>
                        <img src={require('../../Images/telas_estágio/pdf_formatado.jpg')} alt="pdf_formatado" />
                    </div>
                </div>
            </div>
        </>
    );

}

export default Estagio;