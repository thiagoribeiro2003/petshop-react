import estilos from "./Caixa.module.css";

/* Versão com props desestruturada */
const Caixa = ({ children, listaDeClasses }) => {
  return (
    <div className={`${estilos.caixa} ${listaDeClasses || ""}`}>{children}</div>
  );
};

export default Caixa;
