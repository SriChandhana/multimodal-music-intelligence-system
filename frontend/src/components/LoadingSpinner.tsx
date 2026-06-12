export default function LoadingSpinner() {

  return (

    <div
      className="
        flex
        flex-col
        items-center
        gap-6
        py-10
      "
    >

      <div
        className="
          w-16
          h-16
          border-4
          border-green-500/20
          border-t-green-400
          rounded-full
          animate-spin
        "
      />

      <div
        className="
          text-center
        "
      >

        <h3
          className="
            text-xl
            font-semibold
            text-white
          "
        >
          Analyzing Music
        </h3>

        <p
          className="
            text-zinc-400
            mt-2
          "
        >
          Processing audio, metadata and
          musical intelligence...
        </p>

      </div>

    </div>

  );

}