import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  addSong,
  deleteSong,
} from "../controllers/songController.js";

const router = express.Router();

router.post(
  "/:playlistId",
  protect,
  addSong
);

router.delete(
  "/:songId",
  protect,
  deleteSong
);

export default router;