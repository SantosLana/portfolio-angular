**Portfolio Angular**

Portfólio pessoal desenvolvido com Angular 21, com foco na apresentação de perfil profissional, projetos, competências técnicas e informações de contato. O projeto foi construído utilizando a versão mais recente do ecossistema Angular, adotando componentes standalone, Angular Material e boas práticas de organização para aplicações SPA (Single Page Application).

**📖 Sobre o Projeto**

Este projeto tem como objetivo servir como uma vitrine profissional para demonstrar conhecimentos em desenvolvimento Front-end com Angular, além de reunir informações relevantes sobre experiência, habilidades e projetos desenvolvidos.

**🚀 Tecnologias Utilizadas**
Front-end
Angular 21
TypeScript 5.9
Angular Router
Angular Forms
RxJS 7.8
Angular Material
Angular CDK
Ferramentas de Desenvolvimento
Angular CLI 21.2.14
npm 11.9.0
Vitest
Prettier
JSDOM
**⚙️ Ambiente Reproduzível**
Versões Utilizadas
Ferramenta	Versão
Angular	21.2.x
Angular CLI	21.2.14
Angular Material	21.2.14
Angular CDK	21.2.14
TypeScript	5.9.2
RxJS	7.8.x
npm	11.9.0
Node.js	Compatível com Angular 21 (recomenda-se registrar a versão exata utilizada)

Para garantir total reprodutibilidade do ambiente, recomenda-se utilizar a mesma versão do Node.js empregada durante o desenvolvimento.

**📂 Estrutura do Projeto**
portfolio-angular/
├── public/
├── src/
│   ├── app/
│   ├── assets/
│   ├── material-theme.scss
│   ├── styles.css
│   └── main.ts
├── angular.json
├── package.json
├── tsconfig.app.json
└── README.md
**🛠️ Instalação**
1. Clonar o repositório
git clone https://github.com/SantosLana/portfolio-angular.git
2. Acessar a pasta do projeto
cd portfolio-angular
3. Instalar as dependências
npm install
**▶️ Executando o Projeto**

Inicie o servidor de desenvolvimento:

npm start

ou

ng serve

A aplicação ficará disponível em:

http://localhost:4200

**🎨 Tematização**

O projeto utiliza:

Angular Material
Angular CDK
Tema customizado definido em:
src/material-theme.scss

**👨‍💻 Autora**

Lana Santos

GitHub: https://github.com/SantosLana

## ✨ Funcionalidades Implementadas

Na Aula 16, o projeto deixou de possuir apenas uma tela estática e passou a funcionar como uma aplicação SPA (Single Page Application) completa. Foram criados os componentes **Início**, **Sobre**, **Projetos** e **Contato**, organizando o conteúdo em seções independentes e reutilizáveis. Também foi configurado o **Angular Router**, permitindo a navegação entre as páginas sem recarregar o navegador.

Além disso, foi implementada uma barra de navegação utilizando **Angular Material**, proporcionando uma interface moderna e intuitiva para acessar cada seção do portfólio. O componente **Home** recebeu um cartão de apresentação com **MatCard**, melhorando a organização visual e a experiência do usuário.

### Recursos adicionados nesta etapa

* Criação dos componentes:

  * Home (Início)
  * Sobre
  * Projetos
  * Contato

* Configuração de rotas com Angular Router.

* Navegação dinâmica entre páginas sem recarregamento da aplicação.

* Implementação de menu de navegação com Angular Material.

* Utilização de `routerLink` e `routerLinkActive` para navegação e destaque da página atual.

* Estruturação do projeto seguindo a arquitetura baseada em componentes standalone do Angular.

* Criação da página inicial com apresentação pessoal utilizando o componente `MatCard`.
