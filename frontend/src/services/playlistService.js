import axios from "../api/axios";

export const getPlaylists = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    "/playlists",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const createPlaylist = async (
  name
) => {
  const token = localStorage.getItem("token");

  const response = await axios.post(
    "/playlists",
    { name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getPlaylistById =
  async (playlistId) => {

    const token =
      localStorage.getItem(
        "token"
      );

    const response =
      await axios.get(
        `/playlists/${playlistId}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};

export const addSong = async (
  playlistId,
  songData
) => {

  const token =
    localStorage.getItem("token");

  const response =
    await axios.post(
      `/songs/${playlistId}`,
      songData,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

  return response.data;
};

export const deleteSong = async (
  songId
) => {

  const token =
    localStorage.getItem("token");

  const response =
    await axios.delete(
      `/songs/${songId}`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

  return response.data;
};

export const deletePlaylist =
  async (playlistId) => {

    const token =
      localStorage.getItem(
        "token"
      );

    const response =
      await axios.delete(
        `/playlists/${playlistId}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return response.data;
};