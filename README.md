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

## Justificativa: uso de Services para acesso aos dados - Aula 18

Neste projeto, o acesso aos dados da API foi implementado nos **Services** (`ProjetoService` e `TecnologiaService`), enquanto os componentes ficaram responsáveis apenas por exibir as informações na tela.

Essa separação segue uma boa prática do Angular, conhecida como **separação de responsabilidades**. Dessa forma:

* Os componentes ficam responsáveis pela interface e pela interação com o usuário.
* Os services concentram toda a lógica de comunicação com a API, utilizando o `HttpClient`.
* Caso a URL da API ou a forma de acesso aos dados precise ser alterada, a mudança é feita apenas no service, sem necessidade de modificar os componentes.
* O código torna-se mais organizado, reutilizável e de fácil manutenção, já que diferentes componentes podem utilizar o mesmo service.

Por esses motivos, o acesso aos dados foi implementado nos services, mantendo os componentes mais simples e focados apenas na apresentação das informações.

## 🎯 Autoavaliação

**Conceito pretendido: [ A ]**

### Justificativa (cite o arquivo de cada critério)

* **Consumo da API (Projetos):**

  * `projeto.service.ts`: implementação do `HttpClient` e método `listar()` utilizando `GET`.
  * `projetos.ts`: consumo da API através de `this.service.listar().subscribe(...)`.
  * `projetos.html`: exibição dos dados retornados pela API.

* **Consumo da API (Catálogo/Tecnologias):**

  * `tecnologia.service.ts`: implementação do `HttpClient` e método `listar()` utilizando `GET`.
  * `catalogo.ts`: consumo da API através de `this.service.listar().subscribe(...)`.
  * `catalogo.html`: exibição das tecnologias retornadas pela API.

* **Botão "Ver no GitHub":**

  * `projetos.html`: utilização de **Property Binding** com `[href]="p.link_github"` para abrir o repositório do projeto em uma nova aba, exibindo o botão apenas quando o link existe.

* **Tratamento de erro:**

  * `projetos.ts`: tratamento do erro na requisição com `error` no `subscribe`, exibindo uma mensagem ao usuário.
  * `catalogo.ts`: tratamento do erro na requisição com `error` no `subscribe`, exibindo uma mensagem ao usuário.
  * `projetos.html` e `catalogo.html`: exibição da mensagem de erro quando necessário.

* **Boas práticas:**

  * O acesso aos dados e às URLs da API foi centralizado nos arquivos `projeto.service.ts` e `tecnologia.service.ts`.
  * Os componentes (`projetos.ts` e `catalogo.ts`) ficaram responsáveis apenas pela lógica de apresentação e atualização da interface, seguindo a separação de responsabilidades recomendada pelo Angular.

* **Iniciativa própria (conceito A):**

  * O README contém uma seção justificando por que o acesso aos dados foi implementado nos **services**, e não diretamente nos componentes, explicando os benefícios de organização, reutilização de código, manutenção e separação de responsabilidades.

* **Autoavaliação:**

  * Esta seção foi incluída no `README.md`, indicando o conceito pretendido e justificando onde cada requisito foi atendido no projeto.



**Por que o acesso a dados vive no service, não no componente?**

O acesso aos dados foi centralizado nos services para separar a responsabilidade de comunicação com a API da responsabilidade de apresentação dos componentes. Dessa forma, os componentes ficam responsáveis pela interface e os services pela obtenção dos dados, facilitando manutenção, reutilização e testes.


## 🎯 Autoavaliação
Conceito pretendido: [ A ]
Escolhi o Nível A — Excelente, pois implementei os requisitos dos níveis C e B e também acrescentei uma iniciativa própria, justificando no README a decisão de manter o acesso aos dados nos services, em vez de realizar as requisições diretamente nos componentes.
Como iniciativa própria, escolhi a opção de justificar no README por que o acesso aos dados vive nos services, e não nos componentes.

- Por que o acesso aos dados fica nos services?

- Decidi manter as requisições à API nos services porque essa organização separa melhor as responsabilidades da aplicação.

- Os services ficam responsáveis pela comunicação com a API e pelo acesso aos dados. Por exemplo, o ProjetoService concentra a URL da API e a chamada HTTP para buscar os projetos:

- private url = '.../api/projetos.php';

listar(): Observable<Projeto[]> {
  return this.http.get<Projeto[]>(this.url).pipe(
    catchError(() => {
      console.error('Falha ao carregar os projetos.');
      return of([]);
    })
  );
}

- Da mesma forma, o TecnologiaService concentra o acesso à API de tecnologias.

- Os componentes, por outro lado, ficam responsáveis principalmente pela apresentação dos dados e pelo comportamento da interface, como controlar os estados de carregamento e erro e disponibilizar os dados para os templates.

- Essa separação traz algumas vantagens:

- Organização: cada parte da aplicação possui uma responsabilidade específica.
Reutilização: diferentes componentes podem utilizar o mesmo service para acessar os dados.
Manutenção: se a URL ou a forma de acesso à API mudar, a alteração pode ser feita no service sem precisar modificar todos os componentes.
Separação de responsabilidades: o componente não precisa conhecer detalhes de comunicação com a API.
Facilidade de evolução: a aplicação fica mais preparada para receber novas telas ou funcionalidades que utilizem os mesmos dados.

- Portanto, escolhi essa estrutura para evitar que a lógica de acesso aos dados fique espalhada pelos componentes e para deixar o código mais organizado, reutilizável e fácil de manter.

**Por que o mesmo endereço api/projetos.php consegue fazer quatro coisas diferentes?**

A API usa o mesmo endereço para várias funções porque o método da requisição indica qual ação deve ser realizada.
Dessa forma, GET, POST, PUT e DELETE permitem consultar, cadastrar, modificar ou remover projetos usando a mesma rota.

## 🎯 Autoavaliação — Nível A (Excelente)

Declaro como conceito pretendido o **Nível A — Excelente**.

### Aproveitamento dos erros vindos do back-end

No arquivo `src/app/contato/contato.ts`, o callback `error` do `subscribe` recebe um parâmetro tipado como `HttpErrorResponse`. A implementação verifica `err.error?.erros` e exibe as mensagens retornadas pela API, utilizando uma mensagem genérica apenas como alternativa caso o back-end não envie a lista de erros.

**Arquivo:** `src/app/contato/contato.ts`
**Trecho:** callback `error` do método `onSubmit()`.

### Acessibilidade e UX (DUA)

No arquivo `src/app/contato/contato.html`, cada campo possui um `<label>` associado ao respectivo controle por meio dos atributos `for` e `id`, facilitando a identificação dos campos por tecnologias assistivas.

Também são exibidas mensagens de erro em texto quando os campos estão inválidos e foram tocados. Dessa forma, a cor não é utilizada como único sinal de erro.

No arquivo `src/app/contato/contato.ts`, quando o formulário é inválido, os campos são marcados como tocados e o foco é direcionado para o primeiro campo inválido, facilitando a correção do formulário.

**Arquivos:**

* `src/app/contato/contato.html`
* `src/app/contato/contato.ts`

### Estados de envio

O formulário apresenta o estado visual `Enviando...` enquanto a requisição está em andamento e mantém o botão desabilitado durante o envio.

Em caso de sucesso, uma mensagem é exibida, o formulário é resetado e o estado de envio é encerrado.

Em caso de erro, a mensagem retornada pela API é exibida e o botão é reabilitado.

**Arquivo:** `src/app/contato/contato.ts`

### Validação dos campos

O formulário utiliza Reactive Forms e possui validações para nome, e-mail e mensagem, incluindo tamanho mínimo e formato de e-mail.

**Arquivo:** `src/app/contato/contato.ts`

### Conclusão

Considero que o projeto atende ao **Nível A — Excelente**, pois além dos requisitos básicos de validação e envio, possui tratamento dos erros retornados pelo back-end, preocupação com acessibilidade e UX e documentação da implementação no README.

## Verificação dos erros da API

Para conferir o comportamento da API em situações inválidas, foram realizados testes utilizando curl.

**400 — Cadastro sem informar o nome**

**400 Bad Request**
**{"erro":"Informe pelo menos o nome do projeto"}**

**400 — Atualização sem informar o ID**

**400 Bad Request**
**{"erro":"PUT exige o id na URL: ?id=NN"}**

**404 — Exclusão de um projeto inexistente**

**404 Not Found**
**{"erro":"Projeto nao encontrado"}**

**405 — Utilização de um método não implementado**

**405 Method Not Allowed**
**{"erro":"Metodo nao permitido"}**


## Antecipação — cliques consecutivos no botão de adicionar

Caso o usuário tente clicar várias vezes no botão de Adicionar projeto enquanto o cadastro ainda está sendo processado, existe o risco de mais de um POST ser enviado. Para reduzir essa possibilidade, utilizo a variável salvando, que assume o valor true durante o envio e mantém o botão desativado até a conclusão da operação.

## Comparação — comportamento da lista após as operações

No cadastro ou na edição, após a resposta positiva da API, o método carregar() é executado novamente. Assim, a aplicação consulta o banco outra vez e apresenta a lista atualizada. Na exclusão, a estratégia é diferente: após a confirmação da API, o projeto é retirado diretamente da lista local com filter(), sem precisar fazer uma nova consulta ao servidor.

## 🎯 Autoavaliação — Nível A

### ⭐⭐⭐ Nível A — Excelente: aplicação completa e justificativa técnica

Para este portfólio, busquei atender aos requisitos do Nível A, indo além do funcionamento básico do CRUD e acrescentando cuidados relacionados à experiência do usuário, comunicação com a API e justificativas técnicas.

#### 1. Tratamento de erros nas operações

A aplicação apresenta mensagens diretamente na interface quando ocorre algum problema durante a comunicação com a API.

Na tela de projetos, o carregamento possui tratamento de erro em `projetos.ts`, utilizando `subscribe()` com os blocos `next` e `error`. Dessa forma, uma falha na requisição não deixa a página sem informação para o usuário.

Na área de gestão, o mesmo princípio foi aplicado em `gestao.ts`:

* carregamento dos projetos;
* criação de um projeto;
* atualização de um projeto;
* exclusão de um projeto.

As mensagens são armazenadas na propriedade `erro` e exibidas pelo template `gestao.html`, permitindo que o usuário saiba que a operação não foi concluída.

Exemplos de mensagens utilizadas:

* `Não foi possível carregar os projetos.`
* `Não foi possível salvar o projeto.`
* `Não foi possível excluir o projeto. Tente de novo.`

Assim, o erro não fica restrito ao console do navegador: ele também é comunicado visualmente na própria tela.

---

#### 2. Estado específico para lista sem projetos

Também foi criado um tratamento para quando a API retorna uma lista vazia.

Em `projetos.html`, quando não existem projetos disponíveis, é apresentada uma mensagem informando essa situação:

```html
@if (!carregando && projetos.length === 0 && !erro) {
  <p>Nenhum projeto publicado ainda.</p>
}
```

Na tela de gestão, existe um tratamento semelhante:

```html
@if (!carregando && projetos.length === 0 && !erro) {
  <p>Nenhum projeto cadastrado ainda.</p>
}
```

Essa melhoria evita que o usuário encontre apenas um espaço vazio e fique sem saber se os dados ainda estão carregando, se ocorreu um erro ou se realmente não existem registros.

Como referência para essa melhoria, consultei a documentação oficial do Angular sobre o controle de fluxo nos templates, especialmente a utilização do `@if` para exibir conteúdo de forma condicional.

**Fonte consultada:** documentação oficial do Angular — *Control flow*.

---

#### 3. Verificação do preflight CORS

Antes de considerar a comunicação com a API concluída, também foi realizado o teste de preflight utilizando `OPTIONS`.

Comando executado:

```bash
curl -i -X OPTIONS https://humble-potato-97vx57v4rggp3jwv-8000.app.github.dev/api/projetos.php
```

O servidor respondeu:

```text
HTTP/2 204
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS
access-control-allow-origin: *
access-control-allow-headers: Content-Type
x-powered-by: PHP/8.3.6
```

O status `204` confirma que o servidor respondeu ao preflight sem conteúdo, enquanto o cabeçalho `Access-Control-Allow-Methods` informa que a API aceita `GET`, `POST`, `PUT`, `DELETE` e `OPTIONS`.

Essa etapa é importante porque o navegador pode realizar uma requisição `OPTIONS` antes de determinadas operações, como `DELETE`, para verificar se a comunicação entre o frontend e a API está autorizada. Só depois dessa confirmação a requisição principal pode ser realizada.

---

#### 4. Comparação das estratégias de atualização dos dados

Existem duas formas principais de manter a lista sincronizada depois de uma alteração:

1. Fazer uma nova requisição `GET` para buscar novamente os dados da API.
2. Alterar diretamente a lista que já está armazenada no componente.

Neste projeto, as duas abordagens aparecem em situações diferentes.

Depois de criar ou editar um projeto, o método `salvar()` chama `carregar()`, realizando uma nova consulta à API. Essa opção tem como vantagem garantir que a lista apresentada seja novamente obtida do servidor.

Já na exclusão, após o `DELETE` ser concluído com sucesso, o projeto é retirado diretamente do array local:

```ts
this.projetos = this.projetos.filter(x => x.id !== p.id);
```

Essa segunda estratégia economiza **uma viagem à rede**, pois não é necessário executar outro `GET` apenas para atualizar a lista depois da exclusão.

Por outro lado, atualizar somente o estado local pode deixar a tela desatualizada caso outra pessoa altere o banco de dados, outro navegador modifique os registros ou ocorra uma alteração diretamente no banco. Nesse cenário, os dados exibidos permaneceriam diferentes dos dados existentes na API até que uma nova consulta fosse realizada.

---

#### 5. Objeção sobre o uso de `(click)`

Uma possível objeção seria:

> “Usar `(click)` é mais complicado. Um `<a href=".../projetos.php?id=5">Excluir</a>` já faria a exclusão e seria mais simples.”

Minha resposta é que o `<a href>` realiza uma navegação/requisição `GET`, enquanto a exclusão da aplicação utiliza explicitamente o método HTTP `DELETE`. Isso mantém cada operação com sua finalidade correta e permite que o Angular controle a ação antes de enviá-la à API.

No código de `gestao.ts`, o botão chama:

```html
<button type="button" (click)="excluir(p)">Excluir</button>
```

e o serviço executa:

```ts
return this.http.delete<void>(`${this.url}?id=${id}`);
```

O teste de preflight também comprova que a API está preparada para receber esse método:

```text
access-control-allow-methods: GET, POST, PUT, DELETE, OPTIONS
```

Dessa maneira, o uso do `(click)` não é apenas uma complicação: ele permite executar uma ação controlada pelo Angular e realizar a operação de exclusão utilizando o método HTTP adequado.

---

### ✅ Conclusão

Considero que este projeto atende ao **Nível A**, pois além das funcionalidades de cadastro, edição e exclusão, foram implementados tratamentos visíveis de erro, estado específico para listas vazias, validação da configuração CORS por meio de preflight, comparação das estratégias de atualização dos dados e uma justificativa técnica para o uso de eventos do Angular na exclusão.

As decisões adotadas também foram documentadas para demonstrar não apenas que a aplicação funciona, mas que as escolhas de implementação foram compreendidas e justificadas.

## 🔁 Puxando o que já era seu

* **Método:** `DELETE`
* **Status:** `204 No Content`
* **Content-Type:** `application/json; charset=utf-8`
* **Explicação:** A exclusão retorna `204` porque o recurso foi removido com sucesso e não há conteúdo adicional para retornar na resposta; já a criação utiliza `201` para indicar que um novo recurso foi criado.





