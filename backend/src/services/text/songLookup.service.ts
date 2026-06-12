import {
  searchRecording
}
from "../musicbrainz/musicbrainz.service";

export const lookupSong =
async (
  title: string
) => {

  const result =
    await searchRecording(
      title,
      ""
    );

  if (!result) {

    return null;

  }

  return {

    title:
      result.title,

    artist:
      result["artist-credit"]
        ?.map(
          (a: any) => a.name
        )
        .join(", "),

    score:
      result.score

  };

};