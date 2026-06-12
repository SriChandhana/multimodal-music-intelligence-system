export const detectLanguage = (
  title: string,
  artist: string,
  album: string
) => {

  const text = `
    ${title}
    ${artist}
    ${album}
  `.toLowerCase();

  if (
    text.includes("telugu")
  ) {
    return "Telugu";
  }

  if (
    text.includes("tamil")
  ) {
    return "Tamil";
  }

  if (
    text.includes("malayalam")
  ) {
    return "Malayalam";
  }

  if (
    text.includes("kannada")
  ) {
    return "Kannada";
  }

  return "Hindi";
};