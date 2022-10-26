import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import serverApi from "../../api/server-api";
import estilos from "./ListaCategorias.module.css";

const ListaCategorias = () => {
  /* Atribuição do useSate para manipular os dados do componente
    1ª parâmetro: */
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function getCategorias() {
      try {
        // await =  Aguardue o termino do fetch (processamento) e depois atribui
        const resposta = await fetch(`${serverApi}/categorias`);
        const dados = await resposta.json();

        /* Precisamos passar os dados capturador da API
        para o state do componente via Setter (obrigatório) */
        setCategorias(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getCategorias();
  }, []);
  //   console.log(categorias);

  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {categorias.map(({ id, nome }) => (
          <li key={id}>
            <Link to={`/categorias/${nome}`}>{nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCategorias;
