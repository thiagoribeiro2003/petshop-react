import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Sobre.module.css";

const Sobre = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Sobre nosso PetShop</h2>

      <Caixa id="sobre">
        <h3>Missão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus itaque
          fugiat harum maxime, rerum consectetur eaque soluta? Itaque quibusdam
          impedit veniam officiis culpa, qui mollitia minus et repudiandae ex
          amet.
        </p>
        <h3>Visão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem iste veniam laudantium, provident in, qui nihil,
          corporis beatae impedit nam quaerat deserunt magnam necessitatibus
          harum! Tenetur magnam eos sequi excepturi.
        </p>
        <h3>valores</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ab
          eaque, omnis ullam amet quod dolorum fugiat, provident blanditiis
          inventore, necessitatibus error soluta tenetur ipsa aut esse
          repellendus quae culpa.
        </p>
      </Caixa>
    </section>
  );
};

export default Sobre;
