import axios from "axios";
import FormData from "form-data";
import CryptoJS from "crypto-js";

export const identifySong = async (
  audioBuffer: Buffer
) => {

  try {

    const host = process.env.ACR_HOST!;
    const accessKey = process.env.ACR_ACCESS_KEY!;
    const accessSecret = process.env.ACR_ACCESS_SECRET!;

    const httpMethod = "POST";
    const httpUri = "/v1/identify";
    const dataType = "audio";
    const signatureVersion = "1";
    const timestamp = Math.floor(Date.now() / 1000);

    const stringToSign = [
      httpMethod,
      httpUri,
      accessKey,
      dataType,
      signatureVersion,
      timestamp
    ].join("\n");

    const signature = CryptoJS.HmacSHA1(
      stringToSign,
      accessSecret
    ).toString(CryptoJS.enc.Base64);

    const form = new FormData();

    form.append("sample", audioBuffer, {
      filename: "audio.mp3"
    });

    form.append("access_key", accessKey);
    form.append("sample_bytes", audioBuffer.length);
    form.append("timestamp", timestamp);
    form.append("signature", signature);
    form.append("data_type", dataType);
    form.append("signature_version", signatureVersion);

    const response = await axios.post(
      `https://${host}/v1/identify`,
      form,
      {
        headers: form.getHeaders()
      }
    );

    return response.data;

  } catch (error) {

    console.error(error);

    throw new Error(
      "ACRCloud identification failed"
    );

  }

};