import raagaKnowledge
from "../../../data/raagaKnowledge.json";

export const getRaagaKnowledge = (
  raaga: string
) => {

  if (!raaga) return null;

  return (
    raagaKnowledge[
      raaga.toLowerCase() as keyof typeof raagaKnowledge
    ] || null
  );

};