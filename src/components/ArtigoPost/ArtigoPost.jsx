import estilos from "./ArtigoPost.module.css";

const ArtigoPost = (props) => {
  return (
    <article className={props.classe}>
      <h3>{props.titulo}</h3>
      <p>{props.subtitulo}</p>
    </article>
  );
};

export default ArtigoPost;
