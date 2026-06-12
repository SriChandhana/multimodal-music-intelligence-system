import { formatDuration }
from "../../utils/formatDuration";

export const normalizeMusicMetadata = (
  acrData: any
) => {

  const music =
    acrData.metadata?.music?.[0];

  if (!music) {
    return null;
  }

  return {

    id:
      music.external_metadata
        ?.spotify?.track?.id || null,

    type: "track",

    title:
      music.title,

    artist:
      music.artists?.[0]?.name
      || "Unknown",

    album:
      music.album?.name
      || "Unknown",

    genre:
      music.genres?.[0]?.name
      || "Unknown",

    release_date:
      music.release_date
      || "Unknown",

    label:
      music.label
      || "Unknown",

    duration:
      formatDuration(
        music.duration_ms || 0
      ),

    recognition_confidence:
      music.score,

    spotify: {

      track_id:
        music.external_metadata
          ?.spotify?.track?.id,

      track_name:
        music.external_metadata
          ?.spotify?.track?.name,

      album_id:
        music.external_metadata
          ?.spotify?.album?.id

    }

  };

};