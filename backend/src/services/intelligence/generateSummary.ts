export const generateSummary = (
  data: any,
  indianMetadata: any
) => {

  if (!indianMetadata?.raaga) {

    return `${data.title} is performed by ${data.artist}.`;

  }

  return `${data.title} is a ${indianMetadata.system} composition based on Raaga ${indianMetadata.raaga} and ${indianMetadata.taala} Taala. It is associated with ${indianMetadata.classicalComposer || "traditional musicians"} and reflects ${indianMetadata.rasa || "classical"} aesthetics.`;

};