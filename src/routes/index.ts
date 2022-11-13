import express from "express";

import { create_movie } from "../controllers/movies_controllers.js";
import { validate_create_movie } from "../middlewares/movies_middlewares.js";

const router = express.Router();

router.post("/movies", validate_create_movie, create_movie);

export default router;
