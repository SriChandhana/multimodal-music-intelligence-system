 import { formatDuration }
from "../../../backend/src/utils/formatDuration";
 type Props = {
    music: any;
  };

  const ResultCard = ({
    music
  }: Props) => {
if (music?.type === "artist") {

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

      <h2
        className="
          text-3xl
          font-bold
          text-green-400
          mb-4
        "
      >
        {music.response.artist}
      </h2>

      <h3
        className="
          text-xl
          text-white
          mb-4
        "
      >
        Top Songs
      </h3>

      <div className="space-y-3">

        {music.response.topSongs.map(
          (song: string) => (

            <div
              key={song}
              className="
                bg-[#111827]
                rounded-xl
                p-3
                text-white
              "
            >
              🎵 {song}
            </div>

          )
        )}

      </div>

    </div>

  );

}
    const data =

      music?.basicMetadata ||

      music?.response ||

      music;

    const title =

      data?.title ||

      data?.trackName ||

      data?.raaga ||

      data?.composer ||

      "Unknown Title";

    const image =

      music?.spotify?.albumImage ||

      data?.image;

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
              text-white
            "
          >
            Song Information
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
            Detected
          </div>

        </div>

        {
          image && (

            <img
              src={image}
              alt="album"
              className="w-full h-64 object-contain"
            />

          )
        }

        <h3
          className="
            text-3xl
            font-bold
            text-white
            mb-4
          "
        >
          {title}
        </h3>

        <div
          className="
            grid
            gap-3
          "
        >

          {
            data?.artist && (

              <div
                className="
                  bg-[#111827]
                  rounded-xl
                  p-3
                "
              >
                <span className="text-zinc-400">
                  Artist
                </span>

                <p className="text-white">
                  {data.artist}
                </p>
              </div>

            )
          }

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
            data?.album && (

              <div
                className="
                  bg-[#111827]
                  rounded-xl
                  p-3
                "
              >
                <span className="text-zinc-400">
                  Album
                </span>

                <p className="text-white">
                  {data.album}
                </p>
              </div>

            )
          }

          {
            data?.genre && (

              <div
                className="
                  bg-[#111827]
                  rounded-xl
                  p-3
                "
              >
                <span className="text-zinc-400">
                  Genre
                </span>

                <p className="text-white">
                  {data.genre}
                </p>
              </div>

            )
          }

          {
  data?.duration && (

    <div
      className="
        bg-[#111827]
        rounded-xl
        p-3
      "
    >
      <span className="text-zinc-400">
        Duration
      </span>

      <p className="text-white">
        {formatDuration(data.duration)}
      </p>
    </div>

  )
}

          {
            data?.releaseDate && (

              <div
                className="
                  bg-[#111827]
                  rounded-xl
                  p-3
                "
              >
                <span className="text-zinc-400">
                  Release Date
                </span>

                <p className="text-white">
                  {data.releaseDate}
                </p>
              </div>

            )
          }

        </div>

      </div>

    );

  };

  export default ResultCard;