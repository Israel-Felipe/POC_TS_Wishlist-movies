import express from "express";

import {
  create_movie,
  read_movies,
  update_movie,
  delete_movie,
} from "../controllers/movies_controllers.js";
import {
  validate_create_movie,
  validate_update_and_delete_movie,
} from "../middlewares/movies_middlewares.js";

const router = express.Router();

router.post("/movies", validate_create_movie, create_movie);
router.get("/movies", read_movies);
router.put("/movies/:id", validate_update_and_delete_movie, update_movie);
router.delete("/movies/:id", validate_update_and_delete_movie, delete_movie);

export default router;
