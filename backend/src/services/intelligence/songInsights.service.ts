import insightsDB
from "../../../data/songInsights.json";

export const getSongInsights = (
  title: string
) => {

  const normalizedTitle =
    title
      .toLowerCase()
      .replace(/\(.*?\)/g, "")
      .replace(/-.*$/g, "")
      .trim();

  return (

    insightsDB[
      normalizedTitle as keyof typeof insightsDB
    ]

    ||

    null

  );

};