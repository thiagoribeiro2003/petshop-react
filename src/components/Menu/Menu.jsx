import { NavLink } from "react-router-dom";
import estilos from "./Menu.module.css";
const Menu = () => {
  return (
    <nav>
      <NavLink activeClassName={estilos.ativo} exact to="/">
        Blog
      </NavLink>
      <NavLink activeClassName={estilos.ativo} to="/produtos">
        Produtos
      </NavLink>
      <NavLink activeClassName={estilos.ativo} to="/sobre">
        Sobre
      </NavLink>
      <NavLink activeClassName={estilos.ativo} to="/contato">
        Contato
      </NavLink>
    </nav>
  );
};

export default Menu;
