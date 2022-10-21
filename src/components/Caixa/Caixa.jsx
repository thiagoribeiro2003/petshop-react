import estilos from "./Caixa.module.css";

const Caixa = (props) => {
  return <div className={estilos.caixa}>{props.children}</div>;
};

export default Caixa;
