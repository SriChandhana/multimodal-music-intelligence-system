import axios from "axios";

export const getSpotifyAccessToken =
async () => {

  const clientId =
    process.env.SPOTIFY_CLIENT_ID!;

  const clientSecret =
    process.env.SPOTIFY_CLIENT_SECRET!;

  const authString = Buffer.from(
    `${clientId}:${clientSecret}`
  ).toString("base64");

  const response = await axios.post(

    "https://accounts.spotify.com/api/token",

    "grant_type=client_credentials",

    {
      headers: {
        Authorization: `Basic ${authString}`,
        "Content-Type":
          "application/x-www-form-urlencoded"
      }
    }
  );

  return response.data.access_token;

};
export const getSpotifyTrackData =
async (
  trackId: string
) => {

  const token =
    await getSpotifyAccessToken();

  const response = await axios.get(

    `https://api.spotify.com/v1/tracks/${trackId}`,

    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  

  return response.data;

};
export const getSpotifyArtistData =
async (
  artistId: string
) => {

  const token =
    await getSpotifyAccessToken();

  const response = await axios.get(

    `https://api.spotify.com/v1/artists/${artistId}`,

    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;

};
export const searchSpotifyTrack =
async (
  query: string
) => {

  const token =
    await getSpotifyAccessToken();

  const response =
    await axios.get(

      "https://api.spotify.com/v1/search",

      {

        headers: {
          Authorization:
            `Bearer ${token}`
        },

        params: {
          q: query,
          type: "track",
          limit: 1
        }

      }

    );

  return response.data
    ?.tracks
    ?.items?.[0] || null;

};
