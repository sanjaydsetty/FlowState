import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { FaMusic } from "react-icons/fa";
import { FiArrowLeft, FiTrash2 } from "react-icons/fi";
import { IoAddCircle } from "react-icons/io5";

import toast from "react-hot-toast";

import {
  getPlaylistById,
  addSong,
  deleteSong,
} from "../services/playlistService";

function PlaylistDetails() {
  const { id } = useParams();

  const [playlist, setPlaylist] = useState(null);
  const [songs, setSongs] = useState([]);

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [duration, setDuration] = useState("");

  const fetchPlaylist = async () => {
    try {
      const data = await getPlaylistById(id);

      setPlaylist(data.playlist);
      setSongs(data.songs);

    } catch (error) {
      console.log(error);

      toast.error(
        "Failed to load playlist"
      );
    }
  };

  useEffect(() => {
    fetchPlaylist();
  }, [id]);

  const handleAddSong = async (e) => {
    e.preventDefault();

    try {
      await addSong(id, {
        title,
        artist,
        album,
        duration: Number(duration),
      });

      toast.success(
        "Song Added"
      );

      setTitle("");
      setArtist("");
      setAlbum("");
      setDuration("");

      fetchPlaylist();

    } catch (error) {

      console.log(error);

      toast.error(
        error.response?.data?.message ||
        "Operation Failed"
      );

    }
  };

  const handleDeleteSong = async (songId) => {
    try {

      await deleteSong(songId);

      toast.success(
        "Song Deleted"
      );

      fetchPlaylist();

    } catch (error) {

      console.log(error);

      toast.error(
        error.response?.data?.message ||
        "Operation Failed"
      );

    }
  };

  if (!playlist) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h2 className="text-3xl font-bold">
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <div className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-6"
          >
            <FiArrowLeft />
            Back to Dashboard
          </Link>

          <h1 className="text-5xl font-bold">
            {playlist.name}
          </h1>

        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">

        {/* Add Song Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-10">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Add New Song
          </h2>

          <form
            onSubmit={handleAddSong}
            className="space-y-4"
          >

            <input
              type="text"
              placeholder="Song Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-green-500"
              required
            />

            <input
              type="text"
              placeholder="Artist"
              value={artist}
              onChange={(e) =>
                setArtist(e.target.value)
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-green-500"
              required
            />

            <input
              type="text"
              placeholder="Album"
              value={album}
              onChange={(e) =>
                setAlbum(e.target.value)
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-green-500"
              required
            />

            <input
              type="number"
              placeholder="Duration (seconds)"
              value={duration}
              onChange={(e) =>
                setDuration(e.target.value)
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-green-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition"
            >
              <IoAddCircle />
              Add Song
            </button>

          </form>

        </div>

        {/* Songs */}
        <div>

          <h2 className="text-3xl font-bold mb-6">
            Songs ({songs.length})
          </h2>

          {songs.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">

              <FaMusic
                size={50}
                className="mx-auto mb-4 text-slate-500"
              />

              <h3 className="text-xl font-semibold">
                No Songs Yet
              </h3>

              <p className="text-slate-400 mt-2">
                Add your first song above.
              </p>

            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {songs.map((song) => (
                <div
                  key={song._id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-500 transition"
                >

                  <FaMusic
                    className="text-green-400 mb-4"
                    size={28}
                  />

                  <h3 className="text-xl font-bold">
                    {song.title}
                  </h3>

                  <p className="text-slate-300 mt-2">
                    {song.artist}
                  </p>

                  <p className="text-slate-400">
                    Album: {song.album}
                  </p>

                  <p className="text-slate-400 mb-5">
                    Duration: {song.duration}s
                  </p>

                  <button
                    onClick={() =>
                      handleDeleteSong(
                        song._id
                      )
                    }
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2 transition"
                  >
                    <FiTrash2 />
                    Delete
                  </button>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default PlaylistDetails;