import similarSongsDB
from "../../../data/similarSongs.json";

export const getSimilarSongs = (
  title: string
) => {

  const normalizedTitle =
    title
      .toLowerCase()
      .replace(/\(.*?\)/g, "")
      .replace(/-.*$/g, "")
      .trim();

  return (

    similarSongsDB[
      normalizedTitle as keyof typeof similarSongsDB
    ]

    ||

    []

  );

};