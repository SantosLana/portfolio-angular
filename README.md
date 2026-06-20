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

## Como rodar a API:

**Instalar o MariaDB e o PHP**

sudo apt-get update
sudo apt-get install -y mariadb-server php-cli php-mysql

**Iniciar o MariaDB e conferir o ambiente**

sudo service mariadb start

/usr/bin/php -m | grep -i pdo_mysql

Saída esperada: pdo_mysql

**Criar o banco, usuário e as tabelas**
sudo mariadb

CREATE DATABASE dwii_db;
CREATE USER 'dwii_user'@'localhost' IDENTIFIED BY 'dwii2026';
GRANT ALL PRIVILEGES ON dwii_db.* TO 'dwii_user'@'localhost';
FLUSH PRIVILEGES;

USE dwii_db;

CREATE TABLE projetos (
    id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome          VARCHAR(120) NOT NULL,
    descricao     TEXT NOT NULL,
    tecnologias   VARCHAR(200) NOT NULL,
    link_github   VARCHAR(300) NULL DEFAULT NULL,
    ano           YEAR NOT NULL,
    status        ENUM('rascunho','publicado','arquivado') NOT NULL DEFAULT 'rascunho',
    criado_em     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    atualizado_em DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tecnologias (
    id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome        VARCHAR(100) NOT NULL,
    categoria   VARCHAR(50) NOT NULL,
    descricao   TEXT,
    ano_criacao INT,
    status      ENUM('ativo','inativo') NOT NULL DEFAULT 'ativo',
    criado_em   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SHOW TABLES;

USE dwii_db;

INSERT INTO projetos (nome, descricao, tecnologias, link_github, ano, status) VALUES
('Portfolio Pessoal',            'Site de portfolio responsivo com PHP, PDO e MariaDB, painel admin e login.', 'PHP, MariaDB, CSS, Git',   'https://github.com/usuario/portfolio',  2026, 'publicado'),
('Sistema de Biblioteca',        'CRUD de acervo e emprestimos, com busca e relatorios.',                      'PHP, MariaDB, Bootstrap',  'https://github.com/usuario/biblioteca', 2025, 'publicado'),
('App de Tarefas',               'Lista de tarefas com categorias, prazos e filtro por status.',               'JavaScript, HTML, CSS',    'https://github.com/usuario/tarefas',    2025, 'publicado'),
('Loja Virtual (prototipo)',     'Catalogo de produtos com carrinho e checkout simulado.',                     'PHP, MariaDB, JavaScript', 'https://github.com/usuario/loja',       2024, 'publicado'),
('API de Clima',                 'Microsservico que consome uma API publica e devolve a previsao em JSON.',    'PHP, REST',                'https://github.com/usuario/clima',      2026, 'publicado'),
('Jogo da Velha (em construcao)','Jogo da velha local - ainda em desenvolvimento.',                            'JavaScript, HTML',         NULL,                                    2026, 'rascunho');

INSERT INTO tecnologias (nome, categoria, descricao, ano_criacao) VALUES
('HTML',       'Frontend',       'Linguagem de marcacao para estrutura de paginas.', 1993),
('CSS',        'Frontend',       'Linguagem de estilos para apresentacao visual.',   1996),
('JavaScript', 'Frontend',       'Linguagem de programacao para o navegador.',       1995),
('PHP',        'Backend',        'Linguagem server-side para web dinamica.',         1994),
('MariaDB',    'Banco de Dados', 'SGBD relacional open-source.',                     2009),
('Git',        'DevOps',         'Sistema de controle de versao distribuido.',       2005);

SELECT id, nome, ano, status FROM projetos;

**Subir o servidor e testar no navegador**
/usr/bin/php -S 0.0.0.0:8000