import {
  useState
} from "react";

import {
  queryMusic
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

export default function TextSearch({

  setMusicData,

  setLoading

}: Props) {

  const [
    query,
    setQuery
  ] = useState("");

  const [
    result,
    setResult
  ] = useState<any>(
    null
  );

  const handleSearch =
async () => {

  try {

    if (!query.trim())
      return;

    setLoading(true);

    const response =
  await queryMusic(
    query
  );

console.log(
  "TEXT RESPONSE:"
);

console.log(
  JSON.stringify(
    response.data,
    null,
    2
  )
);

setResult(
  response.data.data.data
);

setMusicData(
  response.data.data.data
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
        gap-6
      "
    >

      <div>

        <h2
          className="
            text-2xl
            font-bold
            text-white
            mb-2
          "
        >
          Text Intelligence
        </h2>

        <p
          className="
            text-zinc-400
          "
        >
          Ask about songs,
          artists,
          raagas,
          composers
          and music theory.
        </p>

      </div>

      <input

        value={query}

        onChange={
          (e) =>
            setQuery(
              e.target.value
            )
        }

        placeholder="
          Tell me about Nagumomu
        "

        className="
          w-full
          bg-[#111827]
          border
          border-green-500/10
          rounded-xl
          px-4
          py-4
          text-white
          outline-none
          focus:border-green-400
        "

      />

      <button

        onClick={
          handleSearch
        }

        className="
          w-full
          bg-green-500
          hover:bg-green-400
          text-black
          font-semibold
          py-4
          rounded-xl
          transition
        "

      >

        Analyze Query

      </button>

    </div>

  </div>

);
}