import raagaDB
from "../../../data/raagas.json";

export interface RaagaInfo {

  raaga: string;

  taala: string;

  system: string;

  composer: string;

  rasa: string;

  language: string;

  aaroh?: string;

  avaroh?: string;

}

export const getRaagaInfo = (
  title: string
): RaagaInfo | null => {

  const normalizedTitle =
    title
      .toLowerCase()
      .replace(/\(.*?\)/g, "")
      .replace(/-.*$/g, "")
      .replace(/\s+/g, " ")
      .trim();

  const entries =
    Object.entries(raagaDB);

  for (
    const [key, value]
    of entries
  ) {

    const normalizedKey =
      key
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();

    if (

      normalizedTitle.includes(
        normalizedKey
      )

      ||

      normalizedKey.includes(
        normalizedTitle
      )

    ) {

      return value as RaagaInfo;

    }

  }

  return null;

};