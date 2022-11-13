import Joi from "joi";

const create_movie_schema = Joi.object({
  title: Joi.string().required(),
  platform: Joi.string().required(),
  genre: Joi.string().required(),
  status: Joi.boolean(),
  note: Joi.number(),
});

export { create_movie_schema };
