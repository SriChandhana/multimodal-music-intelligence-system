import { detectIndianMusicType }
from "../classifier/indianMetadata";

import {
  getRaagaInfo,
  RaagaInfo
}
from "./raaga.service";

import { detectLanguage }
from "./languageDetector";

import { detectEra }
from "./eraDetector";

interface IndianMetadataInput {

  title: string;

  artist: string;

  releaseDate: string;

  album: string;

  genre: string;

  label: string;

  credits?: {

    composer?: string | null;

    lyricist?: string | null;

    writers?: string[];

  };

}

export const resolveIndianMetadata = (
  data: IndianMetadataInput
) => {

  const raagaInfo: RaagaInfo | null =
    getRaagaInfo(
      data.title
    );

  const musicType =
    raagaInfo?.system ||

    detectIndianMusicType(

      data.genre,

      data.title,

      data.artist

    );

  const language =
    raagaInfo?.language ||

    detectLanguage(

      data.title,

      data.artist,

      data.album

    );

  const era =
    detectEra(
      data.releaseDate
    );

  return {

    musicType,

    language,

    era,

    raaga:
      raagaInfo?.raaga ||
      null,

    taala:
      raagaInfo?.taala ||
      null,

    classicalComposer:
      raagaInfo?.composer ||
      null,

    system:
      raagaInfo?.system ||
      null,

    rasa:
      raagaInfo?.rasa ||
      null,

    aaroh:
      raagaInfo?.aaroh ||
      null,

    avaroh:
      raagaInfo?.avaroh ||
      null

  };

};