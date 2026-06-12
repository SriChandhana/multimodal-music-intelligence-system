import {
  searchSpotifyTrack
} from "../metadata/spotify.service";

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

      genre: null,

      duration:
        Math.floor(
          track.duration_ms / 1000
        ) + " sec",

      release_date:
        track.album?.release_date,

      credits: [],

      spotify: {

        track_id:
          track.id,

        track_name:
          track.name,

        album_image:
          track.album
            ?.images?.[0]?.url,

        external_url:
          track.external_urls
            ?.spotify,

        popularity:
          track.popularity

      }

    };

  } catch (error) {

    console.error(
      "Spotify Lookup Error:",
      error
    );

    return null;

  }

};