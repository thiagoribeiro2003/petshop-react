import { useState, useEffect } from "react"; // Hooks do React
import serverApi from "../../api/server-api";
import ArtigoPost from "../ArtigoPost/ArtigoPost";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
import estilos from "./ListaPosts.module.css";
const ListaPosts = ({ url }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getPosts() {
      try {
        // const resposta = await fetch(`${serverApi}/posts`);

        // Solução Guilherme
        // const resposta = await fetch(`${serverApi}/${url || "posts"}`);

        // Solução Adriel
        /* const resposta = await fetch(
          `${serverApi}/${url != undefined ? url : "posts"}`
        ); */

        const resposta = await fetch(`${serverApi}/posts.json`);
        const dados = await resposta.json(); // OBJETÃO DE DADOS

        let listaDePosts = [];

        for (const post in dados) {
          const objetoPost = {
            id: post, // a chave/string gerada pelo Firebase será como um id
            titulo: dados[post].titulo,
            subtitulo: dados[post].subtitulo,
            descricao: dados[post].descricao,
            categoria: dados[post].categoria,
          };
          listaDePosts.push(objetoPost);
        }

        setPosts(listaDePosts);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
    /* É necessário indicar a url como dependência pois
    ela muda toda vez em que uma categoria é clicada.
    
    Desta forma, o useEffect "entende" que ele deve executar novamente
    as suas ações (neste caso, executar novamente o fetch na API) */
  }, [url]);

  if (loading) {
    return <LoadingDesenho texto="posts..." />;
  }

  if (posts.length === 0) {
    return <h2 style={{ textAlign: "center" }}> Não há posts!</h2>;
  }

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <ArtigoPost
          key={id}
          id={id}
          titulo={titulo}
          subtitulo={subtitulo}
          classe={estilos.post}
        />
      ))}
    </div>
  );
};

export default ListaPosts;
