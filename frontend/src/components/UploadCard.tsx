import {
  useState
} from "react";

import {
  identifyAudio
} from "../services/api";

type Props = {

  setMusicData:
    React.Dispatch<
      React.SetStateAction<any>
    >;

  setLoading:
    React.Dispatch<
      React.SetStateAction<boolean>
    >;

};

export default function UploadCard({

  setMusicData,

  setLoading

}: Props) {

  const [
    fileName,
    setFileName
  ] = useState("");

  const handleUpload =
  async (
    e: any
  ) => {

    try {

      const file =
        e.target.files?.[0];

      if (!file)
        return;

      setFileName(
        file.name
      );

      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "audio",
        file
      );

      const response =
        await identifyAudio(
          formData
        );

      setMusicData(
        response.data.data
      );

    }

    catch (
      error
    ) {

      console.error(
        error
      );

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div
      className="
        w-full
        max-w-xl
        bg-[#0b1220]
        border
        border-green-500/20
        rounded-3xl
        p-8
        backdrop-blur-lg
        shadow-xl
      "
    >

      <div
        className="
          flex
          flex-col
          items-center
          text-center
        "
      >

        <div
          className="
            w-20
            h-20
            rounded-full
            bg-green-500/10
            flex
            items-center
            justify-center
            text-4xl
            text-green-400
            mb-6
          "
        >
          🎵
        </div>

        <h2
          className="
            text-2xl
            font-bold
            mb-3
            text-white
          "
        >
          Upload Audio
        </h2>

        <p
          className="
            text-zinc-400
            mb-4
          "
        >
          Upload MP3, WAV or M4A files
        </p>

        {
          fileName && (

            <p
              className="
                text-green-400
                text-sm
                mb-6
              "
            >
              Selected:
              {" "}
              {fileName}
            </p>

          )
        }

        <label
          className="
            cursor-pointer
            px-6
            py-3
            rounded-xl
            bg-green-500
            hover:bg-green-400
            text-black
            font-semibold
            transition
          "
        >

          Browse Files

          <input
            type="file"
            accept="audio/*"
            onChange={
              handleUpload
            }
            className="hidden"
          />

        </label>

      </div>

    </div>

  );

}