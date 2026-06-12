interface SongData {

  genre?: string;

  language?: string;

  artist?: string;

  title?: string;

  album?: string;

  label?: string;

  artistGenres?: string[];

}

const containsJapanese = (
  text: string
) => {

  return /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(text);

};

const containsKorean = (
  text: string
) => {

  return /[\uac00-\ud7af]/.test(text);

};

const containsIndianScript = (
  text: string
) => {

  return /[\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F]/.test(text);

};

export const classifyMusic = (
  song: SongData
) => {

  const genre =
    song.genre?.toLowerCase() || "";

  const language =
    song.language?.toLowerCase() || "";

  const artist =
    song.artist?.toLowerCase() || "";

  const title =
    song.title?.toLowerCase() || "";

  const album =
    song.album?.toLowerCase() || "";

  const label =
    song.label?.toLowerCase() || "";

  const artistGenres =
    song.artistGenres || [];

  const combined = `
    ${genre}
    ${language}
    ${artist}
    ${title}
    ${album}
    ${label}
  `.toLowerCase();

  // ------------------------------
  // Script Detection
  // ------------------------------

  if (
    containsJapanese(title)
  ) {

    return {
      category: "Japanese"
    };

  }

  if (
    containsKorean(title)
  ) {

    return {
      category: "Korean"
    };

  }

  if (
    containsIndianScript(title)
  ) {

    return {
      category: "Indian"
    };

  }

  // ------------------------------
  // Indian Artist Genres
  // ------------------------------

  const hasIndianArtistGenres =
    artistGenres.some(
      genre =>

        genre.toLowerCase().includes("indian") ||

        genre.toLowerCase().includes("bollywood") ||

        genre.toLowerCase().includes("desi") ||

        genre.toLowerCase().includes("carnatic") ||

        genre.toLowerCase().includes("hindustani")

    );

  // ------------------------------
  // Indian Metadata Indicators
  // ------------------------------

  const indianIndicators = [

    "bollywood",
    "tollywood",
    "kollywood",

    "hindustani",
    "carnatic",

    "desi",
    "filmi",

    "indian",

    "films/games",
    "soundtrack",

    "t-series",
    "saregama",
    "des records",
    "zee music",
    "sony music india",
    "aditya music",
    "lahari music",

  ];

  if (

    hasIndianArtistGenres ||

    indianIndicators.some(
      indicator =>
        combined.includes(
          indicator
        )
    )

  ) {

    return {
      category: "Indian"
    };

  }

  // ------------------------------
  // Indian Language Keywords
  // ------------------------------

  const indianLanguageKeywords = [

    "telugu",
    "tamil",
    "hindi",
    "kannada",
    "malayalam",
    "punjabi",
    "bengali",
    "marathi",
    "urdu"

  ];

  if (

    indianLanguageKeywords.some(
      lang =>
        combined.includes(
          lang
        )
    )

  ) {

    return {
      category: "Indian"
    };

  }
// ------------------------------
// Indian Artist Indicators
// ------------------------------

const indianArtists = [

  "chandrabose",

  "arijit singh",

  "sid sriram",

  "anirudh",

  "anirudh ravichander",

  "devi sri prasad",

  "s. thaman",

  "thaman",

  "shreya ghoshal",

  "a.r. rahman",

  "ar rahman",

  "sp balasubrahmanyam",

  "s. p. balasubrahmanyam",

  "armaan malik"

];

if (

  indianArtists.some(
    a =>
      artist.includes(a)
  )

) {

  return {
    category: "Indian"
  };

}
  // ------------------------------
  // Japanese
  // ------------------------------

  if (

    genre.includes("j-pop") ||

    language.includes("japanese")

  ) {

    return {
      category: "Japanese"
    };

  }

  // ------------------------------
  // Korean
  // ------------------------------

  if (

    genre.includes("k-pop") ||

    language.includes("korean")

  ) {

    return {
      category: "Korean"
    };

  }

  // ------------------------------
  // Classical
  // ------------------------------

  if (

    genre.includes("classical")

  ) {

    return {
      category: "Classical"
    };

  }

  // ------------------------------
  // Default
  // ------------------------------

  return {
    category: "Western"
  };

};