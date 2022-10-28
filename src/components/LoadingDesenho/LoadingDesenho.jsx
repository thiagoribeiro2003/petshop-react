import imagemLoading from "../../assets/images/loading.svg";
import estilos from "./LoadingDesenho.module.css";

const LoadingDesenho = (props) => {
  return (
    <div className={estilos.loading}>
      <h2>
        <i>Carregando {props.texto}</i>
      </h2>
      <img src={imagemLoading} alt="" />
    </div>
  );
};

export default LoadingDesenho;
