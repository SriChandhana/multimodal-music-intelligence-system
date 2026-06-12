import {
  getSpotifyTrackData,
  getSpotifyArtistData,
  searchSpotifyTrack
}
from "./spotify.service";

import {
  resolveCredits
}
from "./creditResolver";

export const enrichMetadata =
async (metadata: any) => {

  try {

    let trackId =
      metadata.spotify?.track_id;

    // Spotify fallback search

    if (!trackId) {

      const searchQuery =
        `track:${metadata.title} artist:${metadata.artist}`;

      const searchResult =
        await searchSpotifyTrack(
          searchQuery
        );

      trackId =
        searchResult?.id || null;

    }

    // Credits should be fetched
    // regardless of Spotify availability

    const credits =
      await resolveCredits(
        metadata.title,
        metadata.artist
      );

    // No Spotify match found

    if (!trackId) {

      return {

        ...metadata,

        spotify: {},

        credits

      };

    }

    const spotifyData =
      await getSpotifyTrackData(
        trackId
      );

    const artistId =
      spotifyData?.artists?.[0]?.id;

    let artistGenres: string[] = [];

    if (artistId) {

      const artistData =
        await getSpotifyArtistData(
          artistId
        );

      artistGenres =
        artistData?.genres || [];

    }

    return {

      ...metadata,

      spotify: {

        ...metadata.spotify,

        track_id:
          trackId,

        artist_id:
          artistId || null,

        artist_genres:
          artistGenres,

        popularity:
          spotifyData?.popularity || null,

        preview_url:
          spotifyData?.preview_url || null,

        external_url:
          spotifyData?.external_urls
            ?.spotify || null,

        album_image:
          spotifyData?.album
            ?.images?.[0]?.url || null

      },

      credits

    };

  } catch (error) {

    console.error(
      "Enrichment Error:",
      error
    );

    return {

      ...metadata,

      credits: {

        composer: null,

        lyricist: null,

        writers: []

      }

    };

  }

};