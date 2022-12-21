# redfox-backend

Trabalho para conclusão de curso Bootcamp Labenu 2022 feito a partir do [Teste de Backend REDFOX](https://github.com/RedFoxTech/vaga-backend-teste)

 Esta API permite a inserção de dados de pokemons enviados em um arquivo xlsx ao banco de dados. Esses dados podem ser pesquisados e filtrados por queries como "id", "name" ou "geração", ordenados por ordem crescente "ASC" ou descrescente "DESC"
 


 ## Como rodar a aplicação localmente
### Instalando as dependências
 `npm install:`
 Instala as dependências listadas no  `package.json`.
 
 ### Inserindo o arquivo de dados
 O arquivo `data.xlsx` deve ser inserido no diretório `src/data`
 
 
 ### Criando o arquivo .env:
 Criar o arquivo `.env` e configurar com as informações de seu banco de dados.
 
 ```
 PORT: 3003
 DB_HOST = host
 DB_USER = usuario
 DB_PASSWORD = senha
 DB_DATABASE = nome-do-banco-de-dados
 ```
 
 ### Criando as tabelas no banco de dados
Executar o comando `npm run migrations` para que as tabelas sejam criadas na database
 
 ### Executar o projeto:
 `npm run dev`:
 Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` quando o projeto for alterado e salvo.


 ## Funcionalidades
 **1. Inserção de pokemons**
 
* **Método 1:** `POST `
* **Caminho:** `/pokemons/new `
* **Entrada:**  esse endpoint não possui entradas, o arquivo xlsx com os pokemons deverá estar no caminho "redfox-backend/src/data" com o nome data.xlsx
 * **Saída:** "Pokemons adicionados com sucesso" caso não haja um pokemon cadastrado com a mesma id ou erro em caso de duplicidade: "já há um pokemon cadastrado com a ID {pokemon ID}: {pokemon Name}"

<br/>
 
 **2. Busca por pokemons**
 
* **Método:** `GET `
* **Caminho:** `/products`
* **Entrada:**  queries opcionais de search, sort e order
* **Saída:** um objeto 'pokemons' que inclui uma lista com todos os pokemons encontrados
   
<br/>

## Documentação
[Postman](https://documenter.getpostman.com/view/21553413/2s8Z6u3aBT)
 
 <br/>
 
 ## Tecnologias Utilizadas
 * NodeJS
 * TypeScript
 * MySQL
 * Knex
 * Express
 * Cors
 * JWT
 * Markdown
 * Jest
