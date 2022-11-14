import { QueryResult } from "pg";
import connection from "../database/db.js";
import { Movie, Movie_entity, Watch } from "../types/movies_types.js";

function insert_movie(movie: Movie, platform_id: number): void {
  connection.query(
    `
        INSERT INTO movies (title, platform_id, genre, was_assisted, movie_review) 
        VALUES ($1, $2, $3, $4, $5);
    `,
    [
      movie.title,
      platform_id,
      movie.genre,
      movie.was_assisted,
      movie.movie_review,
    ]
  );
}

async function get_movies(): Promise<QueryResult<Movie_entity>> {
  return await connection.query(`
      SELECT
      movies.id,
      movies.title,
      movies.was_assisted,
      movies.genre,
      movies.movie_review,
      platforms.name AS platform
      FROM movies
      JOIN platforms ON movies.platform_id = platforms.id;
  `);
}

async function query_movie_title(
  title: string
): Promise<QueryResult<Movie_entity>> {
  return await connection.query(
    `
        SELECT * FROM movies WHERE title = $1;
    `,
    [title]
  );
}

function watch_movie(id: number, watch: Watch): void {
  connection.query(
    `
      UPDATE movies
      SET was_assisted = TRUE,
      movie_review = $1
      WHERE id = $2;
  `,
    [watch.movie_review, id]
  );
}

async function query_movie_id(id: number): Promise<QueryResult<Movie_entity>> {
  return await connection.query(
    `
        SELECT * FROM movies WHERE id = $1;
    `,
    [id]
  );
}

function remove_movie(id: number): void {
  connection.query(
    `
      DELETE FROM movies 
      WHERE id = $1;
  `,
    [id]
  );
}

async function get_filtred_by_platform(): Promise<QueryResult> {
  return await connection.query(`
      SELECT 
      COUNT(*) AS "movies_amount",
      platforms.name AS platform
      FROM movies
      JOIN platforms ON movies.platform_id = platforms.id
      GROUP BY platform;
  `);
}

export {
  insert_movie,
  get_movies,
  query_movie_title,
  watch_movie,
  query_movie_id,
  remove_movie,
  get_filtred_by_platform,
};
