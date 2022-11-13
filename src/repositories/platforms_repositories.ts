import { QueryResult } from "pg";
import { Platform } from "../types/movies_types.js";
import connection from "../database/db.js";

async function create_platform(
  platform: string
): Promise<QueryResult<Platform>> {
  await connection.query(
    `
        INSERT INTO platforms (name) VALUES ($1)
    `,
    [platform]
  );
  /* ver depois se não tem um jeito mais resumido de fazer este return */
  return await connection.query(
    `
        SELECT * FROM platforms WHERE name = $1
    `,
    [platform]
  );
}

async function query_platform(
  platform: string
): Promise<QueryResult<Platform>> {
  return await connection.query(
    `
        SELECT * FROM platforms WHERE name = $1
    `,
    [platform]
  );
}

export { create_platform, query_platform };
