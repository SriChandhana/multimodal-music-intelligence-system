type Props = {
  music: any;
};

const IndianPanel = ({ music }: Props) => {
  const data = music?.response || music || {};
  const indian = music?.indianMetadata || {};

  // Merge both objects
  const merged = {
    ...data,
    ...indian,
  };

  const isIndian =
  merged?.system === "Carnatic" ||
  merged?.system === "Hindustani" ||
  merged?.raaga ||
  merged?.taala ||
  merged?.aaroh ||
  merged?.avaroh;

  if (!isIndian) return null;

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
          {merged?.musicType || merged?.system || "Indian"}
        </div>
      </div>

      <div className="grid gap-3">
        {merged?.composer && (
          <div className="bg-[#111827] rounded-xl p-3">
            <span className="text-zinc-400">Composer</span>
            <p className="text-white">{merged.composer}</p>
          </div>
        )}

        {merged?.raaga && (
          <div className="bg-[#111827] rounded-xl p-3">
            <span className="text-zinc-400">Raaga</span>
            <p className="text-green-400 font-semibold">
              {merged.raaga}
            </p>
          </div>
        )}

        {merged?.taala && (
          <div className="bg-[#111827] rounded-xl p-3">
            <span className="text-zinc-400">Taala</span>
            <p className="text-white">{merged.taala}</p>
          </div>
        )}

        {merged?.rasa && (
          <div className="bg-[#111827] rounded-xl p-3">
            <span className="text-zinc-400">Rasa</span>
            <p className="text-white">{merged.rasa}</p>
          </div>
        )}

        {merged?.system && (
          <div className="bg-[#111827] rounded-xl p-3">
            <span className="text-zinc-400">System</span>
            <p className="text-white">{merged.system}</p>
          </div>
        )}

        {merged?.language && (
          <div className="bg-[#111827] rounded-xl p-3">
            <span className="text-zinc-400">Language</span>
            <p className="text-white">{merged.language}</p>
          </div>
        )}

        {merged?.aaroh && (
          <div className="bg-[#111827] rounded-xl p-3">
            <span className="text-zinc-400">Aaroh</span>
            <p className="text-green-400 font-mono">
              {merged.aaroh}
            </p>
          </div>
        )}

        {merged?.avaroh && (
          <div className="bg-[#111827] rounded-xl p-3">
            <span className="text-zinc-400">Avaroh</span>
            <p className="text-green-400 font-mono">
              {merged.avaroh}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndianPanel;