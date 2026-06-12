import artistsDB from "../../../data/artists.json";

export const getArtistSongs = (
  artist: string
) => {
  const normalizedArtist =
    artist.toLowerCase().trim();

  return (
    artistsDB[
      normalizedArtist as keyof typeof artistsDB
    ] || []
  );
};