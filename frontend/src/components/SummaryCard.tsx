type Props = {
  summary?: string;
};

const SummaryCard = ({
  summary
}: Props) => {

  if (!summary)
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
          AI Summary
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
          AI
        </div>

      </div>

      <div
        className="
          bg-[#111827]
          border
          border-green-500/10
          rounded-2xl
          p-5
        "
      >

        <p
          className="
            text-zinc-300
            leading-8
          "
        >
          {summary}
        </p>

      </div>

    </div>

  );

};

export default SummaryCard;