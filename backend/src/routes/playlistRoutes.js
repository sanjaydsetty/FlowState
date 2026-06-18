import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  createPlaylist,
  getPlaylists,
  getPlaylistById,
  deletePlaylist,
} from "../controllers/playlistController.js";

const router = express.Router();

router.post(
  "/",
  protect,
  createPlaylist
);

router.get(
  "/",
  protect,
  getPlaylists
);

router.get(
  "/:id",
  protect,
  getPlaylistById
);

router.delete(
  "/:id",
  protect,
  deletePlaylist
);

export default router;