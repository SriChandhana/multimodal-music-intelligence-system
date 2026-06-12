import raagaKnowledge
from "../../../data/raagaKnowledge.json";

import raagaDB
from "../../../data/raagas.json";

import {
  getSimilarSongs
}
from "../intelligence/similarSongs.service";

import {
  getSongInsights
}
from "../intelligence/songInsights.service";

import {
  lookupSpotifySong
}
from "./spotifyLookup.service";

import {
  lookupSong
}
from "./songLookup.service";

export const processMusicQuery =
async (
  query: string
) => {

  const lower =
    query.toLowerCase();

  // -------------------
  // Tell me about
  // -------------------

  if (
    lower.startsWith(
      "tell me about"
    )
  ) {

    const item =
      lower
        .replace(
          "tell me about",
          ""
        )
        .trim();

    // -------------------
    // Indian Song Knowledge
    // -------------------
        type RaagaSong = {
  raaga: string;
  taala: string;
  system: string;
  composer: string;
  rasa: string;
  language: string;
  aaroh?: string;
  avaroh?: string;
};
    // -------------------
// Indian Song Knowledge
// -------------------

const songData =
  raagaDB[
    item as keyof typeof raagaDB
  ] as any;

console.log(
  "ITEM:",
  item
);

console.log(
  "SONG DATA:",
  songData
);

if (songData) {

  return {

    type:
      "carnatic_song",

    response: {

      title:
        item,

      composer:
        songData.composer,

      raaga:
        songData.raaga,

      taala:
        songData.taala,

      system:
        songData.system,

      rasa:
        songData.rasa,

      language:
        songData.language,

      aaroh:
        songData.aaroh ?? null,

      avaroh:
        songData.avaroh ?? null

    }

  };

}

    // -------------------
    // Raaga Knowledge
    // -------------------

    const raagaInfo =
      raagaKnowledge[
        item as keyof typeof raagaKnowledge
      ];

    if (raagaInfo) {

      return {

        type:
          "raaga_info",

        response: {

          raaga:
            item,

          system:
            raagaInfo.system,

          rasa:
            raagaInfo.rasa,

          description:
            raagaInfo.description,

          famousSongs:
            raagaInfo.famousSongs || []

        }

      };

    }

    // -------------------
    // Song Insights
    // -------------------

    const songInsight =
      getSongInsights(
        item
      );

    if (songInsight) {

      return {

        type:
          "song_info",

        response:
          songInsight

      };

    }

    // -------------------
    // Spotify
    // -------------------

    const spotifyData =
      await lookupSpotifySong(
        item
      );

    if (spotifyData) {

      return {

        type:
          "spotify_song",

        response:
          spotifyData

      };

    }

    // -------------------
    // MusicBrainz
    // -------------------

    const songMetadata =
      await lookupSong(
        item
      );

    if (songMetadata) {

      return {

        type:
          "song_metadata",

        response:
          songMetadata

      };

    }

    return {

      type:
        "not_found",

      response:
        "No information found."

    };

  }

  // -------------------
  // Who composed
  // -------------------

  if (
    lower.startsWith(
      "who composed"
    )
  ) {

    const song =
      lower
        .replace(
          "who composed",
          ""
        )
        .trim();

    const songData =
      raagaDB[
        song as keyof typeof raagaDB
      ];

    if (!songData) {

      return {

        type:
          "composer",

        response:
          "Composer not found."

      };

    }

    return {

      type:
        "composer",

      response:
        songData.composer

    };

  }

  // -------------------
  // Suggest Songs In Raaga
  // -------------------

  if (
    lower.startsWith(
      "suggest songs in"
    )
  ) {

    const raaga =
      lower
        .replace(
          "suggest songs in",
          ""
        )
        .trim();

    const info =
      raagaKnowledge[
        raaga as keyof typeof raagaKnowledge
      ];

    if (!info) {

      return {

        type:
          "songs",

        response:
          []

      };

    }

    return {

      type:
        "songs",

      response:
        info.famousSongs

    };

  }

  // -------------------
  // Similar Songs
  // -------------------

  if (
  lower.includes("similar")
) {

  let song = query;

  song = song
    .replace(
      /suggest similar songs to/i,
      ""
    )
    .replace(
      /similar songs like/i,
      ""
    )
    .replace(
      /songs like/i,
      ""
    )
    .replace(
      /similar to/i,
      ""
    )
    .trim();

  return {

    type:
      "similar_songs",

    response:
      getSimilarSongs(
        song
      )

  };



  }

  // -------------------
  // Direct Search
  // -------------------

  const spotifyData =
    await lookupSpotifySong(
      query
    );

  if (spotifyData) {

    return {

      type:
        "spotify_song",

      response:
        spotifyData

    };

  }

  const songMetadata =
    await lookupSong(
      query
    );

  if (songMetadata) {

    return {

      type:
        "song_metadata",

      response:
        songMetadata

    };

  }

  return {

    type:
      "unknown",

    response:
      "Query not supported yet."

  };

};