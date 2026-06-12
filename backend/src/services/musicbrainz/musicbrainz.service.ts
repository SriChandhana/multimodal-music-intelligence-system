import axios from "axios";

const BASE_URL =
  "https://musicbrainz.org/ws/2";

export const searchRecording =
async (
  title: string,
  artist: string
) => {

  try {

   const query =
  artist?.trim()

    ? `recording:${title} AND artist:${artist}`

    : `recording:${title}`;

    const response =
      await axios.get(

        `${BASE_URL}/recording`,

        {
          params: {
            query,
            fmt: "json"
          },
          headers: {
            "User-Agent":
              "MMMD/1.0"
          }
        }

      );

   console.log(
  "TOP RESULTS:",
  response.data.recordings
    ?.slice(0, 5)
);

const bestMatch =
  response.data.recordings
    ?.sort(
      (a: any, b: any) =>
        b.score - a.score
    )?.[0];
    console.log(
  "QUERY:",
  query
);

console.log(
  "BEST MATCH:",
  bestMatch?.title
);

console.log(
  "SCORE:",
  bestMatch?.score
);

return bestMatch;
    

  } catch {

    return null;

  }

};
export const getRecordingDetails =
async (
  recordingId: string
) => {

  try {

    const response =
      await axios.get(

        `${BASE_URL}/recording/${recordingId}`,

        {
          params: {
            inc:
              "artist-credits+work-rels",
            fmt: "json"
          },
          headers: {
            "User-Agent":
              "MMMD/1.0"
          }
        }

      );

    return response.data;

  } catch {

    return null;

  }

};
export const getWorkDetails =
async (
  workId: string
) => {

  try {

    const response =
      await axios.get(

        `${BASE_URL}/work/${workId}`,

        {
          params: {
            inc:
              "artist-rels",
            fmt: "json"
          },

          headers: {
            "User-Agent":
              "MMMD/1.0"
          }
        }

      );

    return response.data;

  } catch {

    return null;

  }

};