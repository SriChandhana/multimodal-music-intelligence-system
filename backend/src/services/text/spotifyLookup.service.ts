import {
  searchSpotifyTrack
}
from "../metadata/spotify.service";

export const lookupSpotifySong =
async (
  query: string
) => {

  try {

    const track =
      await searchSpotifyTrack(
        query
      );

    if (!track) {

      return null;

    }

    return {

      title:
        track.name,

      artist:
        track.artists
          ?.map(
            (a: any) => a.name
          )
          .join(", "),

      album:
        track.album?.name,

      releaseDate:
        track.album
          ?.release_date,

      popularity:
        track.popularity,

      spotifyUrl:
        track.external_urls
          ?.spotify,

      image:
        track.album
          ?.images?.[0]?.url

    };

  } catch {

    return null;

  }

};