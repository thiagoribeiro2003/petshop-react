import { useState, useEffect } from "react"; // Hooks do React

import serverApi from "../../api/server-api";
import estilos from "./ListaPosts.module.css";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
import ArtigoPost from "../ArtigoPost/ArtigoPost";
const ListaPosts = () => {
  /* Iniciamos o state do componente com um array vazio, 
  para posteriormente "preenchê-lo" com os dados vindos da API.
  Esta atribuição será feita com auxílio do setPosts. */

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(serverApi);

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${serverApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
  }, []);

  if (loading) {
    return <LoadingDesenho />;
  }

  /* Sobre o userEffect
  Este hook visa permitir um maior controle sobre "efeitos colaterais" na execução do componente.
  
  Receve dois parâmetros:
  1ª: Função callback com o que será executado 
  2ª: lista de dependências que indicarão ao useEffect quando ele deverá funcionar
  
  -Se não passar a lista (ou seja, se deixae sem []), useEffect executará toda vez 
  que o componente for renderizado. Portanto, o callback se torna um loop infinito. 
  
  - Se passar a lista vazia (ou seja, deixar o [] vazio), useEffect executará somente
  no momento que o componente é renderizado a primeira vez evitando o loop infinito do callback */

  return (
    <div className={estilos.lista_posts}>
      {/* Versão Desestruturado */}
      {posts.map(({ id, titulo, subtitulo }) => (
        <ArtigoPost
          key={id}
          titulo={titulo}
          subtitulo={subtitulo}
          classe={estilos.post}
        />
      ))}
    </div>
  );
};

export default ListaPosts;
