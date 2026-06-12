import axios from "axios";

export const identifySong = async (audioBuffer: Buffer) => {
  try {
    const base64Audio = audioBuffer.toString("base64");

    const response = await axios.post(
      "https://api.audd.io/",
      {
        api_token: process.env.AUDD_API_TOKEN,
        audio: base64Audio,
        return: "spotify,apple_music"
      }
    );

    return response.data;

  } catch (error) {
    console.error(error);
    throw new Error("Song identification failed");
  }
};