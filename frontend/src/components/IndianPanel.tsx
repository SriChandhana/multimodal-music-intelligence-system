type Props = {
  music: any;
};

const IndianPanel = ({
  music
}: Props) => {

  const data =
  music?.response ||
  music;

const indian =
  music?.indianMetadata;
const isIndian =

  data?.raaga ||

  data?.composer ||

  data?.system ||

  indian?.raaga ||

  indian?.language ||

  indian?.musicType;
  
  if (!isIndian)
    return null;

  return (

  <div
    className="
      bg-[#0b1220]
      border
      border-green-500/20
      rounded-3xl
      p-6
      backdrop-blur-lg
      shadow-xl
      h-full
    "
  >

    <div
      className="
        flex
        items-center
        justify-between
        mb-6
      "
    >

      <h2
        className="
          text-xl
          font-bold
          text-green-400
        "
      >
        Indian Music Analysis
      </h2>

      <div
        className="
          px-3
          py-1
          rounded-full
          bg-green-500/10
          text-green-400
          text-sm
        "
      >
        Classical
      </div>

    </div>

    <div
      className="
        grid
        gap-3
      "
    >

      {
        data?.composer && (

          <div
            className="
              bg-[#111827]
              rounded-xl
              p-3
            "
          >
            <span className="text-zinc-400">
              Composer
            </span>

            <p className="text-white">
              {data.composer}
            </p>
          </div>

        )
      }

      {
        data?.raaga && (

          <div
            className="
              bg-[#111827]
              rounded-xl
              p-3
            "
          >
            <span className="text-zinc-400">
              Raaga
            </span>

            <p className="text-green-400 font-semibold">
              {data.raaga}
            </p>
          </div>

        )
      }

      {
        data?.taala && (

          <div
            className="
              bg-[#111827]
              rounded-xl
              p-3
            "
          >
            <span className="text-zinc-400">
              Taala
            </span>

            <p className="text-white">
              {data.taala}
            </p>
          </div>

        )
      }

      {
        data?.rasa && (

          <div
            className="
              bg-[#111827]
              rounded-xl
              p-3
            "
          >
            <span className="text-zinc-400">
              Rasa
            </span>

            <p className="text-white">
              {data.rasa}
            </p>
          </div>

        )
      }

      {
        data?.system && (

          <div
            className="
              bg-[#111827]
              rounded-xl
              p-3
            "
          >
            <span className="text-zinc-400">
              System
            </span>

            <p className="text-white">
              {data.system}
            </p>
          </div>

        )
      }

      {
        data?.language && (

          <div
            className="
              bg-[#111827]
              rounded-xl
              p-3
            "
          >
            <span className="text-zinc-400">
              Language
            </span>

            <p className="text-white">
              {data.language}
            </p>
          </div>

        )
      }

      {
        data?.aaroh && (

          <div
            className="
              bg-[#111827]
              rounded-xl
              p-3
            "
          >
            <span className="text-zinc-400">
              Aaroh
            </span>

            <p
              className="
                text-green-400
                font-mono
              "
            >
              {data.aaroh}
            </p>
          </div>

        )
      }

      {
        data?.avaroh && (

          <div
            className="
              bg-[#111827]
              rounded-xl
              p-3
            "
          >
            <span className="text-zinc-400">
              Avaroh
            </span>

            <p
              className="
                text-green-400
                font-mono
              "
            >
              {data.avaroh}
            </p>
          </div>

        )
      }

    </div>

  </div>

);

};

export default IndianPanel;