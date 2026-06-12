const Navbar = () => {

  return (

    <nav
      className="
        w-full
        px-8
        py-5
        flex
        justify-between
        items-center
        border-b
        border-green-500/10
        bg-[#020617]
        backdrop-blur-lg
      "
    >

      {/* Logo */}

      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        <div
          className="
            text-green-400
            text-3xl
            font-bold
          "
        >
          ♫
        </div>

        <div>

          <h1
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            MMMD
          </h1>

          <p
            className="
              text-xs
              text-zinc-400
            "
          >
            Multimodal Music Detector
          </p>

        </div>

      </div>

      {/* Navigation */}

      <div
        className="
          hidden
          md:flex
          gap-8
          text-zinc-300
        "
      >

        <button className="hover:text-green-400 transition">
          Audio
        </button>

        <button className="hover:text-green-400 transition">
          Text
        </button>

        <button className="hover:text-green-400 transition">
          Image
        </button>

        <button className="hover:text-green-400 transition">
          About
        </button>

      </div>

      {/* Right Side */}

      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        <button
          className="
            px-5
            py-2
            rounded-xl
            border
            border-green-500/20
            text-zinc-300
            hover:border-green-400
          "
        >
          Sign In
        </button>

        <button
          className="
            px-5
            py-2
            rounded-xl
            bg-green-500
            text-black
            font-semibold
            hover:bg-green-400
            transition
          "
        >
          Get Started
        </button>

      </div>

    </nav>

  );

};

export default Navbar;