type Props = {

  activeTab: string;

  setActiveTab:
    (tab: string) => void;

};

export default function Tabs({

  activeTab,

  setActiveTab

}: Props) {

  return (

    <div
      className="
        flex
        items-center
        gap-3
        p-2
        rounded-2xl
        bg-[#0b1220]
        border
        border-green-500/10
        mb-10
      "
    >

      <button
        onClick={() =>
          setActiveTab("audio")
        }
        className={`
          px-6
          py-3
          rounded-xl
          font-medium
          transition-all

          ${
            activeTab === "audio"

              ? `
                bg-green-500
                text-black
                shadow-lg
                shadow-green-500/30
              `

              : `
                text-zinc-400
                hover:text-white
              `
          }
        `}
      >
        🎵 Audio
      </button>

      <button
        onClick={() =>
          setActiveTab("text")
        }
        className={`
          px-6
          py-3
          rounded-xl
          font-medium
          transition-all

          ${
            activeTab === "text"

              ? `
                bg-green-500
                text-black
                shadow-lg
                shadow-green-500/30
              `

              : `
                text-zinc-400
                hover:text-white
              `
          }
        `}
      >
        ✍️ Text
      </button>

      <button
        disabled
        className="
          px-6
          py-3
          rounded-xl
          text-zinc-600
          cursor-not-allowed
        "
      >
        🖼️ Image
      </button>

    </div>

  );

}