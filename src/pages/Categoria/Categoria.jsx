import { useParams } from "react-router-dom";
import ListaCategorias from "../../components/ListaCategorias/ListaCategorias";
import ListaPosts from "../../components/ListaPosts/ListaPosts";
import estilos from "./Categoria.module.css";

const Categoria = () => {
  const { nome } = useParams();
  console.log(nome);

  return (
    <section>
      <h2 className={estilos.titulo_secao}>Categorias</h2>
      <ListaCategorias />
      <ListaPosts categoria={nome} />
    </section>
  );
};

export default Categoria;
