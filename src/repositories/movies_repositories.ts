import connection from "../database/db.js";
import { Movie } from "../types/movies_types.js";

function insertMovie(movie: Movie, platform_id: number): void {
  connection.query(
    `
        INSERT INTO movies (title, platform_id, genre, status, note) 
        VALUES ($1, $2, $3, $4, $5);
    `,
    [movie.title, platform_id, movie.genre, movie.status, movie.note]
  );
}

export { insertMovie };
