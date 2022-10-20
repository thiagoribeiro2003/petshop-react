import estilos from "./Home.module.css";
import ListaPosts from "../../components/ListaPosts/ListaPosts";
const Home = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Pet Notícias</h2>

      <ListaPosts />
    </section>
  );
};

export default Home;
