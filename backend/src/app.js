import express from "express";
import cors from "cors";
import helmet from "helmet";
import songRoutes
from "./routes/songRoutes.js";

import authRoutes from "./routes/authRoutes.js";
import playlistRoutes from "./routes/playlistRoutes.js";

const app = express();

app.use(cors());

app.use(
  helmet({
    crossOriginResourcePolicy: false
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "FlowState API Running"
  });
});

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/playlists",
  playlistRoutes
);

app.use(
  "/api/songs",
  songRoutes
);

export default app;