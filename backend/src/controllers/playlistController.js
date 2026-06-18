import Playlist from "../models/Playlist.js";
import Song from "../models/Song.js";

export const createPlaylist = async (req, res) => {
  try {
    const { name } = req.body;

    const playlist = await Playlist.create({
      name,
      user: req.user._id
    });

    res.status(201).json({
      success: true,
      playlist
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

export const getPlaylists = async (req, res) => {
  try {

    const playlists = await Playlist.find({
      user: req.user._id,
    });

    const playlistsWithCounts =
      await Promise.all(
        playlists.map(
          async (playlist) => {

            const songCount =
              await Song.countDocuments({
                playlist:
                  playlist._id,
              });

            return {
              ...playlist.toObject(),
              songCount,
            };
          }
        )
      );

    res.json({
      success: true,
      playlists:
        playlistsWithCounts,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message,
    });

  }
};

export const getPlaylistById =
  async (req, res) => {

    try {

      const playlist =
        await Playlist.findById(
          req.params.id
        );

      if (!playlist) {
        return res.status(404).json({
          success: false,
          message:
            "Playlist not found",
        });
      }

      const songs =
        await Song.find({
          playlist:
            req.params.id,
        });

      res.json({
        success: true,
        playlist,
        songs,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }
};

export const deletePlaylist =
  async (req, res) => {

    try {

      const playlist =
        await Playlist.findById(
          req.params.id
        );

      if (!playlist) {
        return res.status(404).json({
          success: false,
          message:
            "Playlist not found",
        });
      }

      await Song.deleteMany({
        playlist:
          req.params.id,
      });

      await Playlist.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "Playlist deleted",
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });

    }
};