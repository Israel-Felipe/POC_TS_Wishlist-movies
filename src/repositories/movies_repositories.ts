import { QueryResult } from "pg";
import connection from "../database/db.js";
import { Movie, Movie_entity } from "../types/movies_types.js";

function insert_movie(movie: Movie, platform_id: number): void {
  connection.query(
    `
        INSERT INTO movies (title, platform_id, genre, status, note) 
        VALUES ($1, $2, $3, $4, $5);
    `,
    [movie.title, platform_id, movie.genre, movie.status, movie.note]
  );
}

async function get_movies(): Promise<QueryResult<Movie_entity>> {
  return await connection.query(`
      SELECT
      movies.id,
      movies.title,
      movies.status,
      movies.genre,
      movies.note,
      platforms.name AS platform
      FROM movies
      JOIN platforms ON movies.platform_id = platforms.id;
  `);
}

async function query_movies(title: string): Promise<QueryResult<Movie_entity>> {
  return await connection.query(
    `
        SELECT * FROM movies WHERE title = $1;
    `,
    [title]
  );
}

export { insert_movie, get_movies, query_movies };
