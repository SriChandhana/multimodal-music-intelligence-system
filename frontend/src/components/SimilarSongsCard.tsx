type Props = {
  songs: string[];
};

const SimilarSongsCard = ({
  songs
}: Props) => {

  if (
    !songs ||
    songs.length === 0
  )
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
            text-white
          "
        >
          Similar Songs
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
          {songs.length}
        </div>

      </div>

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >

        {
          songs.map(
            (
              song,
              index
            ) => (

              <div
                key={index}
                className="
                  bg-[#111827]
                  rounded-xl
                  p-4
                  border
                  border-green-500/10
                  hover:border-green-500/30
                  transition
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-green-500/10
                      flex
                      items-center
                      justify-center
                      text-green-400
                    "
                  >
                    ♪
                  </div>

                  <span
                    className="
                      text-white
                    "
                  >
                    {song}
                  </span>

                </div>

              </div>

            )
          )
        }

      </div>

    </div>

  );

};

export default SimilarSongsCard;