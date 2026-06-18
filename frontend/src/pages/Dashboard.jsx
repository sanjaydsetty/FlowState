import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  FiLogOut,
  FiTrash2,
} from "react-icons/fi";

import { FaMusic } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";

import toast from "react-hot-toast";

import {
  getPlaylists,
  createPlaylist,
  deletePlaylist,
} from "../services/playlistService";

function Dashboard() {
  const [playlists, setPlaylists] =
    useState([]);

  const [playlistName, setPlaylistName] =
    useState("");

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  const [playlistToDelete, setPlaylistToDelete] =
    useState(null);

  const navigate = useNavigate();

  const userName =
    localStorage.getItem("userName");

  const fetchPlaylists =
    async () => {
      try {
        const data =
          await getPlaylists();

        setPlaylists(
          data.playlists
        );
      } catch (error) {
        console.log(error);

        toast.error(
          "Failed to load playlists"
        );
      }
    };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const handleCreatePlaylist =
    async (e) => {
      e.preventDefault();

      if (!playlistName.trim())
        return;

      try {
        await createPlaylist(
          playlistName
        );

        toast.success(
          "Playlist Created!"
        );

        setPlaylistName("");

        fetchPlaylists();
      } catch (error) {
        console.log(error);

        toast.error(
          "Failed to create playlist"
        );
      }
    };

  const handleDeletePlaylist = (
    e,
    playlist
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setPlaylistToDelete(
      playlist
    );

    setShowDeleteModal(
      true
    );
  };

  const confirmDeletePlaylist =
    async () => {
      try {
        await deletePlaylist(
          playlistToDelete._id
        );

        toast.success(
          "Playlist Deleted"
        );

        setShowDeleteModal(
          false
        );

        setPlaylistToDelete(
          null
        );

        fetchPlaylists();
      } catch (error) {
        console.log(error);

        toast.error(
          "Failed to delete playlist"
        );
      }
    };

  const handleLogout = () => {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "userName"
    );

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <div className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-4xl font-bold">
            FlowState
          </h1>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
          >
            <FiLogOut />
            Logout
          </button>

        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">

        {/* Welcome */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">
            Welcome Back,
            {userName
              ? ` ${userName}`
              : ""}
            👋
          </h2>

          <p className="text-slate-400">
            Manage your playlists and songs.
          </p>
        </div>

        {/* Create Playlist */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 mb-10">

          <h3 className="text-xl font-semibold mb-4">
            Create New Playlist
          </h3>

          <form
            onSubmit={
              handleCreatePlaylist
            }
            className="flex gap-3"
          >
            <input
              type="text"
              placeholder="Playlist Name"
              value={
                playlistName
              }
              onChange={(e) =>
                setPlaylistName(
                  e.target.value
                )
              }
              className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-green-500"
            />

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg flex items-center gap-2 transition"
            >
              <IoAddCircle />
              Create
            </button>
          </form>

        </div>

        {/* Playlists */}
        <div>

          <h2 className="text-2xl font-bold mb-6">
            Your Playlists
          </h2>

          {playlists.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">

              <FaMusic
                size={50}
                className="mx-auto mb-4 text-slate-500"
              />

              <h3 className="text-xl font-semibold">
                No Playlists Yet
              </h3>

              <p className="text-slate-400 mt-2">
                Create your first playlist above.
              </p>

            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {playlists.map(
                (playlist) => (
                  <div
                    key={
                      playlist._id
                    }
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-500 hover:-translate-y-1 transition duration-300"
                  >

                    <div className="flex justify-between items-start mb-4">

                      <FaMusic
                        size={32}
                        className="text-green-400"
                      />

                      <button
                        onClick={(e) =>
                          handleDeletePlaylist(
                            e,
                            playlist
                          )
                        }
                        className="text-red-400 hover:text-red-300"
                      >
                        <FiTrash2
                          size={20}
                        />
                      </button>

                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                      {playlist.name}
                    </h3>

                    <p className="text-slate-400 mb-4">
                      {playlist.songCount} Song
                      {playlist.songCount !== 1
                        ? "s"
                        : ""}
                    </p>

                    <Link
                      to={`/playlist/${playlist._id}`}
                      className="text-green-400 hover:text-green-300"
                    >
                      Open Playlist →
                    </Link>

                  </div>
                )
              )}

            </div>
          )}

        </div>

      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 w-full max-w-md">

            <h2 className="text-2xl font-bold mb-3">
              Delete Playlist
            </h2>

            <p className="text-slate-400 mb-6">
              Are you sure you want to delete
              <span className="text-white font-semibold">
                {" "}
                {playlistToDelete?.name}
              </span>
              ?
            </p>

            <div className="flex justify-end gap-3">

              <button
                onClick={() => {
                  setShowDeleteModal(
                    false
                  );

                  setPlaylistToDelete(
                    null
                  );
                }}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={
                  confirmDeletePlaylist
                }
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Dashboard;