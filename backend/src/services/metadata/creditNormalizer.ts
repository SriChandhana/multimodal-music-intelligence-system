interface CreditInput {

  artist: string;

  credits?: {

    composer?: string | null;

    lyricist?: string | null;

    writers?: string[];

  };

  indianMetadata?: {

    musicDirector?: string | null;

  };

}

export const normalizeCredits = (
  data: CreditInput
) => {

  const artists =
    Array.from(

      new Set(

        data.artist

          .split(/,|&/)

          .map(
            name => name.trim()
          )

          .filter(Boolean)

      )

    );

  return {

    composer:
      data.credits?.composer ||
      null,

    lyricist:
      data.credits?.lyricist ||
      null,

    musicDirector:
      data.indianMetadata
        ?.musicDirector ||
      null,

    artists,

    singers: [],

    writers:
      data.credits?.writers ||
      []

  };

};