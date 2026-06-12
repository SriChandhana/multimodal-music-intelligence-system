import axios from "axios";

const API =
  axios.create({

    baseURL:
      "http://localhost:5000/api"

  });

export const queryMusic =
(
  query: string
) => {

  return API.post(

    "/orchestrator/process",

    {
      type: "text",
      query
    }

  );

};

export const identifyAudio =
(
  formData: FormData
) => {

  return API.post(

    "/audio/identify",

    formData,

    {
      headers: {
        "Content-Type":
          "multipart/form-data"
      }
    }

  );

};