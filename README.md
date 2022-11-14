<div align="center">
  <h1>WISHLIST MOVIES</h1>
  <br>
  Esta é uma API que faz um CRUD de uma aplicação web para gerenciar sua lista de filmes favoritos
  <br>
  <br>
</div>
<br>
  
# Funcionalidades
- Criar uma lista de filmes que deseja assistir
- Adicionar ou remover um filme quando quiser
- Atualizar o status do filme quando o tiver assistido, adicionando uma resenha ou crítica ao filme
- Listar a quantidade de filmes por plataforma
<br>
<br>

# Documentação

- POST: "/movies"

```json
{
  "title": "título do filme",
  "genre": "gênero do filme",
  "platform": "nome da plataforma (Netflix, Disney, HBO...)"
}
```

- GET: "/movies" ---> lista com todos os filmes

- PUT: "/movies/:id"

```json
{
  "note": "resenha ou crítica para o filme (opcional)"
}
```

- DELETE: "/movies/:idDoFilme"

- GET: "/movies/filter-by-platform"

<br><br>

# Tecnologias utilizadas

- NODE.JS
- TYPESCRIPT
- EXPRESS
- CORS
- POSTGRES
- DOTENV
- GIT
- GITHUB

<br><br>

# Como rodar

1. Faça um clone deste repositório

2. Crie o banco de dados com o auxílio do dump.sql

3. Instale as dependências:

```bash
npm i
```

4. Configure o .env com base no .env.example

5. Rode o projeto:

```bash
npx nodemon ./src/server.ts
```
