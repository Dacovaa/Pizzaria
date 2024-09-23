# Pizzaria do Bahia - Web Server

Este projeto implementa um servidor web funcional para uma pizzaria fictícia chamada **Pizzaria do Bahia**. O servidor permite que os clientes montem pizzas através de uma interface interativa e naveguem por páginas de menu, pedido, e mensagens de erro, utilizando o método HTTP para transmitir dados entre páginas.

## 🚀 Funcionalidade do Projeto

O projeto tem como principal objetivo permitir que os usuários façam pedidos de pizza diretamente em uma página web, selecionando tamanho, sabor, borda e ingredientes extras. Os dados são transmitidos via HTTP de uma página para outra, onde os detalhes do pedido são resumidos.

## 📂 Estrutura de Arquivos

O projeto é composto por arquivos JavaScript para manipulação do servidor e das interações de pedido, além de páginas HTML que servem como interface para o usuário. Abaixo estão os principais componentes:

### **Arquivos principais:**

1. **app.js**: Arquivo principal que configura o servidor HTTP, faz a leitura das páginas HTML e trata as rotas (como `/`, `/cardapio` e `/pedido`). 
2. **appPizzaria.js**: Script que monta as pizzas no lado do cliente, captura as seleções do usuário e redireciona os dados para a página de pedido.
3. **package.json**: Define as dependências do projeto, incluindo `nodemon` para reinicialização automática do servidor durante o desenvolvimento e `dotenv` para gerenciar variáveis de ambiente.

### **Páginas HTML:**

1. **index.html**: Página inicial do projeto, onde os clientes podem acessar o menu da pizzaria.
2. **cardapio.html**: Apresenta o cardápio da pizzaria, permitindo que o cliente selecione os ingredientes e monte a pizza.
3. **pedido.html**: Mostra um resumo do pedido com os detalhes selecionados pelo usuário.
4. **error404.html**: Página exibida quando a rota solicitada não existe.
5. **error500.html**: Página exibida em caso de erro interno no servidor.

## 📜 Dependências

Este projeto utiliza as seguintes dependências, todas gerenciadas pelo `npm`:

- **[dotenv](https://www.npmjs.com/package/dotenv)**: Gerenciamento de variáveis de ambiente.
- **[express](https://www.npmjs.com/package/express)**: Framework para manipulação de requisições HTTP (embora o código atual utilize o módulo `http`, esta dependência pode ser expandida para melhorar o desenvolvimento).
- **[nodemon](https://www.npmjs.com/package/nodemon)**: Reinicializa automaticamente o servidor ao detectar mudanças nos arquivos durante o desenvolvimento.

### Como instalar:

1. **Instalação das dependências**:  
   Execute o comando abaixo no diretório raiz do projeto para instalar as dependências:
   ```bash
   npm install
   ```
2. **Execução do Servidor**
   Execute o Comando abaixo no diretório raiz do projeto para iniciar:
   ```bash
   npm start
   ```
3. **Inicializar Node**
   Após istalar o node na sua maquina, no terminal da sua IDE digite o código abaixo:
   ```bash
   node app.js
   ```
   ## 🔧 Tecnologias Utilizadas

- **Node.js**: Plataforma para execução do código JavaScript no lado do servidor.
- **HTML**: Estrutura das páginas da aplicação.
- **CSS**: Estilos básicos aplicados nas páginas.
- **JavaScript**: Manipulação de eventos no lado do cliente.

## 🌐 Roteamento

O roteamento básico do servidor é feito através de condições `if` para determinar a página HTML que deve ser servida com base na URL. O servidor também identifica requisições para arquivos `.js` para carregar os scripts adequados.

### Rotas principais:

- **/**: Página inicial.
- **/cardapio**: Página que mostra o cardápio da pizzaria.
- **/pedido**: Página de resumo do pedido.
- **Erro 404**: Página de erro exibida quando uma rota inválida é acessada.

## 📋 Licença

Este projeto foi Desenvolvido na matéria de Desenvolvimento Web da Fatec-Zona-Sul

## :bust_in_silhouette: Integrantes

- Daniel Martins da Silva
- Matheus Macedo Guimarães
- Marília Paiva Martins da Silva
- Vitor Gabriel Rossignolli.
   
