export const selectTool = (
  query: string
) => {

  const lower =
    query.toLowerCase();

  if (
    lower.includes("raaga")
  ) {
    return "raaga-db";
  }

  if (
    lower.includes("similar")
  ) {
    return "recommendation-engine";
  }

  if (
    lower.includes("composed")
  ) {
    return "composer-engine";
  }

  if (
    lower.includes("tell me about")
  ) {
    return "text-engine";
  }

  return "text-engine";

};