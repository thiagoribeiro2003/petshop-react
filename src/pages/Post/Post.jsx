import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import serverApi from "../../api/server-api";

import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";
import LoadingDesenho from "../../components/LoadingDesenho/LoadingDesenho";

const Post = () => {
  /* useParams() -> hook do react-router que permite acesso/manipulação
  de parâmetros vindos da URL */
  const { id } = useParams();

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  /* Hook do react-router que permite utilizar recursos
  de navegação no histórico do navegador */
  let history = useHistory();

  useEffect(() => {
    async function getPost() {
      try {
        const resposta = await fetch(`${serverApi}/posts/${id}`);
        const dados = await resposta.json();
        setPost(dados);
        setLoading(false);

        /* Verificando se o resultado do objeto de dados
        possui tamanho zero (ou seja, se ele está vazio, sem dados nenhum) */
        if (Object.keys(dados).length === 0) {
          /* Estando, forçamos o redirecionamento numa rota de primeiro nível
          que não existe. Com isso, na prática, o router traz o pagina404. */
          history.push("/404"); // ou /nao-encontrado
        }
      } catch (error) {
        console.log("Deu ruim na busca do post: " + error.message);
      }
    }
    getPost();
  }, [id]); /* id é uma dependência para o useEffect */

  if (loading) return <LoadingDesenho texto="conteúdo do post..." />;

  return (
    <section>
      <h2 className={estilos.titulo_secao}> {post.titulo} </h2>

      <Caixa>
        <h3>{post.categoria}</h3>
        <p>{post.descricao}</p>
      </Caixa>
    </section>
  );
};

export default Post;
