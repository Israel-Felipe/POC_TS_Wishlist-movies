import Joi from "joi";

const create_movie_schema = Joi.object({
  title: Joi.string().required(),
  platform: Joi.string().required(),
  genre: Joi.string().required(),
  was_assisted: Joi.boolean(),
  movie_review: Joi.number(),
});

export { create_movie_schema };
