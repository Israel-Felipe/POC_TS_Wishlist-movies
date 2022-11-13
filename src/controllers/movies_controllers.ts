import { Request, Response } from "express";
import {
  insert_movie,
  get_movies,
  watch_movie,
} from "../repositories/movies_repositories.js";
import { Movie, Watch } from "../types/movies_types.js";

async function create_movie(req: Request, res: Response) {
  const movie = req.body as Movie;
  const platform_id = res.locals.platform_id;

  try {
    await insert_movie(movie, Number(platform_id));
    return res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function read_movies(req: Request, res: Response) {
  try {
    const movies_list = (await get_movies()).rows;
    return res.status(200).send(movies_list);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function update_movie(req: Request, res: Response) {
  const { id } = req.params;
  const watch = req.body as Watch;

  try {
    await watch_movie(Number(id), watch);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export { create_movie, read_movies, update_movie };
