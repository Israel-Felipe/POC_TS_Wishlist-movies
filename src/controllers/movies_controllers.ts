import { Request, Response } from "express";
import { insertMovie } from "../repositories/movies_repositories.js";
import { Movie } from "../types/movies_types.js";

async function create_movie(req: Request, res: Response) {
  const movie = req.body as Movie;
  const platform_id = res.locals.platform_id;

  try {
    await insertMovie(movie, Number(platform_id));
    return res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export { create_movie };
