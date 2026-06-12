import {
  searchRecording,
  getRecordingDetails,
  getWorkDetails
}
from "../musicbrainz/musicbrainz.service";

export const resolveCredits =
async (
  title: string,
  artist: string
) => {

  try {

    const recording =
      await searchRecording(
        title,
        artist
      );

    if (!recording) {

      return {

        composer: null,

        lyricist: null,

        writers: []

      };

    }

    const details =
      await getRecordingDetails(
        recording.id
      );

    if (!details) {

      return {

        composer: null,

        lyricist: null,

        writers: []

      };

    }

    const workRelation =
      details.relations?.find(

        (relation: any) =>

          relation.type ===
          "performance"

      );

    const workId =
      workRelation?.work?.id;

    if (!workId) {

      return {

        composer: null,

        lyricist: null,

        writers: []

      };

    }

    const work =
      await getWorkDetails(
        workId
      );

    if (!work) {

      return {

        composer: null,

        lyricist: null,

        writers: []

      };

    }

    let composer = null;

    let lyricist = null;

    const writers =
      new Set<string>();

    const relations =
      work.relations || [];

    for (
      const relation
      of relations
    ) {

      if (
        relation.type ===
        "composer"
      ) {

        composer =
          relation.artist?.name ||
          composer;

      }

      if (
        relation.type ===
        "lyricist"
      ) {

        lyricist =
          relation.artist?.name ||
          lyricist;

      }

      if (
        relation.artist?.name
      ) {

        writers.add(
          relation.artist.name
        );

      }

    }

    return {

      composer,

      lyricist,

      writers:
        Array.from(
          writers
        )

    };

  } catch (error) {

    console.error(
      "Credit Resolver Error:",
      error
    );

    return {

      composer: null,

      lyricist: null,

      writers: []

    };

  }

};