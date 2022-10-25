import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import serverApi from "../../api/server-api";
import LoadingDesenho from "../../components/LoadingDesenho/LoadingDesenho";

const Post = () => {
  /* useParams() -> hook do react-router que permite acesso/manipulação de parâmetros vindos da URL */
  const { id } = useParams();

  // pode ser qualquer nome os dois.
  const [UmPost, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  /* Hook do react-router que permite utilizar recursos 
  de navegação no histórico do navegador*/
  let history = useHistory();

  useEffect(() => {
    async function getPost() {
      try {
        const resposta = await fetch(`${serverApi}/posts/${id}`);
        const dados = await resposta.json();
        setPost(dados);
        setLoading(false);

        /* Verificando se o resultado do objeto de dado
        possui tamanho zero (ou seja, se ele está vazio, sem dados nenhum)*/
        if (Object.keys(dados).length === 0) {
          /* Estando, forçamos o redirecionamento numa rota de primeiro nível
            que não existe. Com isso, na prática, o router traz o pagina404*/
          history.push("/não-encontrado"); //nao encontrado
        }
      } catch (error) {
        console.log("Deu ruim na busca do post: " + error.message);
      }
    }
    getPost();
  }, [id]); /* id é uma dependência para o useEffect*/

  if (loading) {
    return <LoadingDesenho />;
  }

  return (
    <section>
      <h2 className={estilos.titulo_secao}>{UmPost.titulo}</h2>

      <Caixa>
        <h3>{UmPost.categoria}</h3>
        <p>{UmPost.descricao}</p>
      </Caixa>
    </section>
  );
};

export default Post;
