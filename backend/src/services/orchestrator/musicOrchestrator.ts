import {
  processMusicQuery
} from "../text/queryProcessor";
import {
  selectTool
}
from "./toolRouter";
export const orchestrateRequest =
async (
  payload: {
    type: "text" | "audio";
    query?: string;
    audioResult?: any;
  }
) => {

  switch (
    payload.type
  ) {

case "text":

  const tool =
    selectTool(
      payload.query || ""
    );

  return {

    source:
      tool,

    data:
      await processMusicQuery(
        payload.query || ""
      )

  };

    case "audio":

      return {

        source:
          "audio-engine",

        data:
          payload.audioResult

      };

    default:

      return {

        source:
          "system",

        error:
          "Unsupported input"

      };

  }

};