import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Cabecalho from "./components/Cabecalho/Cabecalho";
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos/Produtos";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import Pagina404 from "./pages/Pagina404/Pagina404";
import Post from "./pages/Post/Post";
import Categoria from "./pages/Categoria/Categoria";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />

        <main className="limitador">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            {/* Rota de redirecionamento (se o usuário cair em /posts), ele será redirecionado á rota raiz (onde está o nome) */}
            <Route exact path="/posts">
              <Redirect to="/" />
            </Route>

            <Route path="/posts/:id">
              <Post />
            </Route>

            {/* Estamos usando o :nome em vez de :id
              com o propósito de ter uma URL amigável (slug) */}
            <Route exact path="/categoria/:nome">
              <Categoria />
            </Route>

            <Route path="/produtos">
              <Produtos />
            </Route>
            <Route path="/sobre">
              <Sobre />
            </Route>
            <Route path="/contato">
              <Contato />
            </Route>
            <Route>
              <Pagina404 />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
