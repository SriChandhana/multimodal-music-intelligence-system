import { Request, Response } from "express";

import { identifySong }
from "../services/audio/acrcloud.service";

import { normalizeMusicMetadata }
from "../services/metadata/metadataAggregator";

import { enrichMetadata }
from "../services/metadata/enrichMetadata";

import { classifyMusic }
from "../services/classifier/musicClassifier";

import {
  resolveIndianMetadata
}
from "../services/indian/indianMetadataResolver";

import {
  buildMusicResponse
}
from "../utils/buildMusicResponse";

export const identifyAudioController =
async (
  req: Request,
  res: Response
) => {

  try {

    if (!req.file) {

      return res.status(400).json({

        success: false,

        message:
          "No audio uploaded"

      });

    }

    const result =
      await identifySong(
        req.file.buffer
      );

    const normalizedData =
      normalizeMusicMetadata(
        result
      );

    const enrichedData =
      await enrichMetadata(
        normalizedData
      );

    const classification =
      classifyMusic({

        genre:
          enrichedData.genre,

        language: "",

        artist:
          enrichedData.artist,

        title:
          enrichedData.title,

        album:
          enrichedData.album,

        label:
          enrichedData.label,

        artistGenres:
          enrichedData.spotify
            ?.artist_genres

      });

    // Always resolve Indian metadata
    const indianMetadata =
  resolveIndianMetadata({

    title:
      enrichedData.title,

    releaseDate:
      enrichedData.release_date,

    artist:
      enrichedData.artist,

    album:
      enrichedData.album,

    genre:
      enrichedData.genre,

    label:
      enrichedData.label,

    credits:
      enrichedData.credits

  });

if (

  indianMetadata?.raaga ||

  indianMetadata?.system

) {

  classification.category =
    "Indian";

}
    const response =
      buildMusicResponse(

        enrichedData,

        classification,

        indianMetadata

      );

    return res.status(200).json({

      success: true,

      data: response

    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      message:
        "Audio identification failed"

    });

  }

};