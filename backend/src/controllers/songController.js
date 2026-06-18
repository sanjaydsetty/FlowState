import Song from "../models/Song.js";
import Playlist from "../models/Playlist.js";

export const addSong = async (req, res) => {
  try {
    const { playlistId } = req.params;

    const {
      title,
      artist,
      album,
      duration,
    } = req.body;

    const playlist =
      await Playlist.findById(
        playlistId
      );

    if (!playlist) {
      return res.status(404).json({
        success: false,
        message: "Playlist not found",
      });
    }

    const song = await Song.create({
      title,
      artist,
      album,
      duration,
      playlist: playlistId,
    });

    res.status(201).json({
      success: true,
      song,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const deleteSong = async (
  req,
  res
) => {
  try {

    const { songId } =
      req.params;

    const song =
      await Song.findById(songId);

    if (!song) {
      return res.status(404).json({
        success: false,
        message: "Song not found",
      });
    }

    await song.deleteOne();

    res.json({
      success: true,
      message: "Song deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};