import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";
import serverApi from "../../api/server-api";

const Contato = () => {
  /* Funções/Eventos para captura de digitação dos campos */
  const inputNome = (event) => setNome(event.target.value);
  const inputEmail = (event) => setEmail(event.target.value);
  const inputMensagem = (event) => setMensagem(event.target.value);

  /* Hook useState para manipular os estados dos dados do componente */
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarContato = async (event) => {
    event.preventDefault();
    console.log(nome, email, mensagem);

    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    /* Script para envio dos dados para a API */
    try {
      await fetch(`${serverApi}/contatos`, opcoes);
      alert("Dados enviados!");
    } catch (error) {
      console.log("Deu ruim: " + error.message);
    }
  };

  /* "Toggle" do botão: caso qualquer uma das variáveis seja undefined,
   desabilitdo se manterá true e com isso o botão ficará desabilitado
   
   Quando todas deixarem de ser undefined, desabilitado se tornará false e 
   com isso o botão será habilitado.*/

  let desabilitado = !nome || !email || !mensagem;
  //let desabilitado = nome === "" || email === "" || mensagem === "";

  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa>
        <form
          onSubmit={enviarContato}
          className={estilos.formulario}
          method="post"
        >
          <div>
            <TextField
              onChange={inputNome}
              type="text"
              label="Nome"
              variante="outlined"
              fullWidth
              required
              helperText="Campo obrigatório"
            />
          </div>

          <div>
            <TextField
              onChange={inputEmail}
              type="email"
              label="E-mail"
              variante="outlined"
              fullWidth
              required
              helperText="Insira um e-mail para contato"
            />
          </div>

          <div>
            <TextField
              onChange={inputMensagem}
              type="text"
              label="Mensagem"
              variante="outlined"
              fullWidth
              required
              helperText="Fale o que você quiser"
              multiline
              rows={6}
            />
          </div>

          <div>
            <Button type="submit" variant="contained" disabled={desabilitado}>
              Enviar Mensagem
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
