import serverApi from "../../api/server-api";
import estilos from "./ListaPosts.module.css";
const ListaPosts = () => {
  console.log(serverApi);
  const postsTemp = [];

  const getPosts = async () => {
    try {
      const resposta = await fetch(`${serverApi}/posts`);
      const dados = await resposta.json();
      console.log(dados);
    } catch (error) {
      console.log("Deu ruim! " + error.message);
    }
  };

  getPosts();

  return (
    <div className={estilos.lista_posts}>
      {/* Versão Desestruturado */}
      {postsTemp.map(({ id, titulo, subtitulo }) => (
        <article className={estilos.post} key={id}>
          <h3>{titulo}</h3>
          <p>{subtitulo}</p>
        </article>
      ))}
    </div>
  );
};

export default ListaPosts;
