import { NextFunction, Request, Response } from "express";
import {
  create_platform,
  query_platform,
} from "../repositories/platforms_repositories.js";

import { query_movies } from "../repositories/movies_repositories.js";

import { create_movie_schema } from "../schemas/movies_schemas.js";
import { Movie_entity } from "../types/movies_types.js";

async function validate_create_movie(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { platform, title } = req.body;

  const { error } = create_movie_schema.validate(req.body as Movie_entity);

  if (error) {
    return res.status(400).send({
      message: error.message,
    });
  }

  try {
    const title_movie_value = (await query_movies(title)).rows[0];
    if (title_movie_value) {
      return res.status(409).send({ message: "title already exists" });
    }

    const platform_value = (await query_platform(platform)).rows[0];

    if (!platform_value) {
      const platformId = (await create_platform(platform)).rows[0];

      res.locals.platform_id = platformId.id;
    } else {
      res.locals.platform_id = platform_value.id;
    }
    next();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export { validate_create_movie };
