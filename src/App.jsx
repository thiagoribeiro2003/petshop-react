import Cabecalho from "./components/Cabecalho/Cabecalho";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <>
      <Cabecalho />
      <main className="limitador">
        <Home />
      </main>
    </>
  );
};

export default App;
