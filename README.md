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
