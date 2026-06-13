import { normalizeCredits }
from "../services/metadata/creditNormalizer";
import {
  generateSummary
}
from "../services/intelligence/generateSummary";
import {
  getSongInsights
}
from "../services/intelligence/songInsights.service";

import {
  getSimilarSongs
}
from "../services/intelligence/similarSongs.service";
import {
  getRaagaKnowledge
}
from "../services/intelligence/raagaKnowledge.service";

export const buildMusicResponse = (
  data: any,
  classification: any,
  indianMetadata: any
) => {

  const normalizedCredits =
    normalizeCredits({

      artist:
        data.artist,

      credits:
        data.credits,

      indianMetadata

    });

  const insights =
    getSongInsights(
      data.title
    );

  const similarSongs =
    getSimilarSongs(
      data.title
    );
    const summary =
  generateSummary(
    data,
    indianMetadata
  );
const raagaKnowledge =
  indianMetadata?.raaga
    ? getRaagaKnowledge(
        indianMetadata.raaga
      )
    : null;
  return {

    basicMetadata: {

      id:
        data.id,

      type:
        data.type,

      title:
        data.title,

      artist:
        data.artist,

      album:
        data.album,

      genre:
        data.genre,

duration:
  data.duration_ms
    ? Math.floor(
        data.duration_ms / 1000
      )
    : data.duration,

      releaseDate:
        data.release_date,

      label:
        data.label,

      recognitionConfidence:
        data.recognition_confidence

    },

    spotify: {

      trackId:
        data.spotify?.track_id,

      trackName:
        data.spotify?.track_name,

      albumId:
        data.spotify?.album_id,

      externalUrl:
        data.spotify?.external_url,

      albumImage:
        data.spotify?.album_image,

      popularity:
        data.spotify?.popularity

    },

    credits:
      normalizedCredits,

    classification: {

      category:
        classification.category

    },

    indianMetadata:
      indianMetadata
        ? {

            musicType:
              indianMetadata.musicType,

            language:
              indianMetadata.language,

            era:
              indianMetadata.era,

            raaga:
              indianMetadata.raaga,

            taala:
              indianMetadata.taala,

            classicalComposer:
              indianMetadata.classicalComposer,

            system:
              indianMetadata.system,

            rasa:
              indianMetadata.rasa,

            aaroh:
              indianMetadata.aaroh,

            avaroh:
              indianMetadata.avaroh

          }
        : {

            musicType: null,

            language: null,

            era: null,

            raaga: null,

            taala: null,

            classicalComposer: null,

            system: null,

            rasa: null,

            aaroh: null,

            avaroh: null

          },

    insights,

    similarSongs,
    summary,
    raagaKnowledge

  };

};