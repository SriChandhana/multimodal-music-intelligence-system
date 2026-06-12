import { useState } from "react";

import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import UploadCard from "../components/UploadCard";
import TextSearch from "../components/TextSearch";
import ResultCard from "../components/ResultCard";
import IndianPanel from "../components/IndianPanel";
import LoadingSpinner from "../components/LoadingSpinner";
import SimilarSongsCard
from "../components/SimilarSongsCard";

import SummaryCard
from "../components/SummaryCard";

const Home = () => {

  const [musicData, setMusicData] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  const [activeTab, setActiveTab] =
    useState("audio");
console.log(
  "MUSIC DATA:",
  musicData
);
  return (
    <div
      className="
        min-h-screen
        overflow-hidden
        relative
        bg-[#020617]
        text-white
      "
    >

      {/* Background Glow */}

      <div
  className="
    absolute
    top-[-150px]
    left-[-100px]
    w-[400px]
    h-[400px]
    bg-green-500/10
    blur-[120px]
    rounded-full
  "
/>

      <div
        className="
          absolute
          bottom-[-150px]
          right-[-100px]
          w-[400px]
          h-[400px]
          bg-green-500/20
          blur-[120px]
          rounded-full
        "
      />

      <Navbar />

      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          px-6
          pt-10
        "
      >

        {/* Hero */}

        <div className="text-center">

          <h1
            className="
              text-5xl
              md:text-6xl
              font-extrabold
              mb-4
              leading-tight
            "
          >

            Detect Music

<span
  className="
    block
    text-green-400
  "
>
  Intelligently
</span>

          </h1>

          <p
            className="
              text-zinc-400
              text-lg
              mb-12
            "
          >
           Analyze audio, text and images
using multimodal music intelligence.
          </p>

        </div>

        {/* Tabs */}

        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Audio Tab */}

        {
          activeTab === "audio" && (

            <UploadCard
              setMusicData={setMusicData}
              setLoading={setLoading}
            />

          )
        }

        {/* Text Tab */}

        {
          activeTab === "text" && (

            <TextSearch
              setMusicData={setMusicData}
              setLoading={setLoading}
            />

          )
        }

        {/* Image Tab */}

        {
  activeTab === "image" && (

    <div
      className="
        mt-8
        bg-[#0b1220]
        border
        border-green-500/20
        rounded-3xl
        p-10
        text-center
      "
    >

      <h3
        className="
          text-xl
          text-green-400
          font-semibold
        "
      >
        Image Recognition
      </h3>

      <p
        className="
          text-zinc-400
          mt-3
        "
      >
        Coming Soon
      </p>

    </div>

  )
}
        {/* Loader */}

        {
          loading && (

            <div className="mt-10">

              <LoadingSpinner />

            </div>

          )
        }

        {/* Results */}
{
  musicData && !loading && (

    <div
      className="
        mt-12
        w-full
        max-w-7xl
        grid
        lg:grid-cols-2
        gap-6
      "
    >

      <ResultCard
        music={musicData}
      />

      <IndianPanel
        music={musicData}
      />

      <SimilarSongsCard
  songs={
    Array.isArray(
      musicData?.similarSongs
    )
      ? musicData.similarSongs
      : []
  }
/>
      <SummaryCard
        summary={
          musicData?.summary
        }
      />

    </div>

  )
}

      </div>

    </div>

  );

};

export default Home;