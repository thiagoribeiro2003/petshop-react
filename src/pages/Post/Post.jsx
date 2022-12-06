import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import serverApi from "../../api/server-api";

import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";
import LoadingDesenho from "../../components/LoadingDesenho/LoadingDesenho";

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  let history = useHistory();

  useEffect(() => {
    async function getPost() {
      try {
        /* É necessário adicionar ".json" após o id para que o recurso/documento 
        de dados do RealTime Database seja lido como um objeto */
        const resposta = await fetch(`${serverApi}/posts/${id}.json`);
        const dados = await resposta.json();
        setPost(dados);
        setLoading(false);

        if (!dados) {
          history.push("/404");
        }
      } catch (error) {
        console.log("Deu ruim na busca do post: " + error.message);
      }
    }
    getPost();
  }, [id, history]);

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
