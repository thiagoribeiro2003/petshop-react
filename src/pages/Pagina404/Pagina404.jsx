import estilos from "./Pagina404.module.css";
import imagem404 from "../../assets/images/404.svg";

const Pagina404 = () => {
  return (
    <section className={estilos.pagina404}>
      <h2 className={estilos.titulo_secao}>Au, au, au, foi mal!</h2>

      <div id="pagina404">
        <h3>Ops! Página não encontrada!</h3>
        <img
          src={imagem404}
          className={estilos.imagem404}
          alt="Ilustração cachorrinho bunitinho"
        />
      </div>
    </section>
  );
};

export default Pagina404;
