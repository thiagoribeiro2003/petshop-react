import { Button, TextField } from "@mui/material";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";

const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa>
        <form method="post">
          <div>
            <TextField
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
            <Button type="submit" variant="contained">
              Enviar Mensagem
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
