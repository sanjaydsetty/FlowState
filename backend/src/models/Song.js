import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    artist: {
      type: String,
      required: true
    },

    album: {
      type: String,
      default: ""
    },

    duration: {
      type: Number,
      default: 0
    },

    playlist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Playlist",
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Song = mongoose.model(
  "Song",
  songSchema
);

export default Song;