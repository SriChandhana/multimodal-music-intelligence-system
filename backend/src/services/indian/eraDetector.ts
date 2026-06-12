export const detectEra = (
  releaseDate?: string
) => {

  if (!releaseDate) {
    return null;
  }

  const year =
    Number(
      releaseDate.substring(
        0,
        4
      )
    );

  if (year >= 2020)
    return "2020s";

  if (year >= 2010)
    return "2010s";

  if (year >= 2000)
    return "2000s";

  if (year >= 1990)
    return "1990s";

  return "Classic";
};