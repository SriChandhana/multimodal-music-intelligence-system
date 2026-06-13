export const formatDuration = (
  totalSeconds: number
) => {

  if (
    totalSeconds === undefined ||
    totalSeconds === null ||
    isNaN(totalSeconds)
  ) {
    return "N/A";
  }

  const minutes =
    Math.floor(totalSeconds / 60);

  const seconds =
    totalSeconds % 60;

  return `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
};