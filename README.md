# React: Projeto PetShop

Projeto iniciado através do [CRA - Create React App](https://github.com/facebook/create-react-app).

Obs: Este projeto poderia ser criado também a partir do Vite.

## Execução do App

Na 1ª vez, é necessário `npm install` para gerar node_modules (com dependências etc).
E para executar, sempre use `npm start` e acesse o `localhost:3000`.

- Dica: desabilitar Compact Folders do VSCode em Configurações/Settings.

## Sobre Módulos CSS

O uso de módulos CSS garante escopo de estilos, ou seja, o CSS criado em módulos só é aplicado no componente em que o módulo foi importado.

Arquivos de módulos devem ser nomeados como `Componente.module.css`.

A importação de módulos CSS deve ser feita com `import nome from "caminho-do-modulo"`.

## Sobre Media Query

### Mobile First

telas a partir de X tamanho (min-width)

### Desktop First

Telas a partir até o tamanho X (max-width)

- Dica: site para pegar emojis: `https://getemoji.com/`
- Dica: Tags HTML ficam fora do Switch na hora de colocar as rotas (Fica somente dentro do BrowserRouter)

---

## Uso de roas com a lib react-router-dom (versão 5)

### Instalando

`npm install react-router-dom@5`

### App.jsx

1. Realizar a importação dos recursos da lib
   `import { BrowserRouter, Route, Switch } from "react-router-dom";`

2. Envolver todo o conteúdo do App.jsx dentro do **BrowserRouter**

3. Cada componente que funciona como "página ou tela" deve estar dentro de um `<Route>`.

4. Os `<Route>` devem estar dentro de um `<Switch>` para que aconteça a troca entre componentes ao navegar.

**Obs.:** não coloque nada além de `<Route>` no `<Switch>`

### Menu.jsx

1. Importar o NavLink
   `import { NavLink } from "react-router-dom";`

2. Substituir a tag `<a>` pelo `<NavLink>` e o atributo `href` por `to`

### Criação de um componente de interface chamado Caixa

Em vez de usar uma `div` em cada página agrupando conteúdos diferentes, isolamos, ela num componente, genérico (Caixa), aplicamos o CSS uma única vez usando módulo do componente, e programamos atráves de `props` o carregamento dinamico do conteúdo (**children**) e de classes adicionais (**listaDeClasse**).

**Dica:** voce pode usar **destructuring** de objetos nas `props` (não é obrigatório).

---

## Usando uma api fake para simular processos de consumo de dados dinâmicos

### **_Instalação global do pacote JSON-SERVER_**

`npm install -g json-server`

Obs.: se tiver problemas ao executar o arquivo, utilize o **Node.js command prompt**

É necessário criar um **arquivo.json** em qualquer pasta em sua máquina (no nosso caso, usamos a própria pasta raiz do petshop). Este arquivo deve ser composto por um grande objeto contendo arrays com outros objetos.

### **_Execução do servidor da API_**

1. Usando de preferência o **Node.js comand prompt**, acesse a pasta onde está o **nome-do-arquivo.json**

2. Execute o comando `json-server --watch nome-do-arquivo.json --port 2112`

Obs.: o número da porta deve ser diferente da 3000(que é padrão do json server) pois esta porta ja estará sendo usada pelo app **React**

Dica: no **package.json** do seu app adicione em `scripts` uma nova propriedade chamada `api` valendo `json-server --watch nome-do-arquivo.json --port 2112`. Desta forma, você podera executar o server da API digitando simplismente `npm run api`.

Após a execução da API, cada array de objetos contido no **arquivo.json** se torna um `endpoint` da API , acessível através da URL _localhost:porta/nome-do/endpoint_

Exemplos:

`https://localhost:2112/categorias`

`https://localhost:2112/posts`

`https://localhost:2112/contatos`
