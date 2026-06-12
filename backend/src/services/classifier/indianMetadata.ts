const HINDUSTANI_KEYWORDS = [
  "khayal",
  "dhrupad",
  "thumri",
  "ghazal",
  "tarana",
  "hindustani"
];

const CARNATIC_KEYWORDS = [
  "kriti",
  "varnam",
  "tillana",
  "carnatic",
  "thyagaraja",
  "dikshitar"
];

const FILMI_KEYWORDS = [
  "bollywood",
  "filmi",
  "film",
  "movie",
  "tollywood",
  "kollywood",
  "soundtrack"
];

export const detectIndianMusicType = (
  genre: string,
  title: string,
  artist: string
) => {

  const combined =
    `${genre} ${title} ${artist}`
      .toLowerCase();

  if (
    FILMI_KEYWORDS.some(
      k => combined.includes(k)
    )
  ) {
    return "Filmi";
  }

  if (
    CARNATIC_KEYWORDS.some(
      k => combined.includes(k)
    )
  ) {
    return "Carnatic";
  }

  if (
    HINDUSTANI_KEYWORDS.some(
      k => combined.includes(k)
    )
  ) {
    return "Hindustani";
  }

  return "Indian";
};
const MUSIC_DIRECTORS: Record<string,string> = {

  "a.r. rahman": "A.R. Rahman",
  "ar rahman": "A.R. Rahman",
  "pritam": "Pritam",
  "amit trivedi": "Amit Trivedi",
  "anirudh": "Anirudh Ravichander",
  "devi sri prasad": "Devi Sri Prasad",
  "s thaman": "S. Thaman",
  "m.m. keeravani": "M.M. Keeravani"

};

export const detectMusicDirector = (
  text: string
) => {

  const lower =
    text.toLowerCase();

  for (
    const [key,value]
    of Object.entries(
      MUSIC_DIRECTORS
    )
  ) {

    if (
      lower.includes(key)
    ) {
      return value;
    }

  }

  return null;
};