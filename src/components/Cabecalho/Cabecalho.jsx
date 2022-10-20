import { Link } from "react-router-dom";
import estilos from "./Cabecalho.module.css";
import logo from "../../assets/images/logo.png";
import Menu from "../Menu/Menu";

const Cabecalho = () => {
  return (
    <header className={estilos.topo}>
      <div className="limitador">
        <h1>
          <Link href="">
            <img src={logo} alt="Patinha dentro do coração" />
            PetShop
          </Link>
        </h1>

        <Menu />
      </div>
    </header>
  );
};
export default Cabecalho;
