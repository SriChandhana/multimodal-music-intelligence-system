export interface AudioAnalysis {

  bpm: number | null;

  mood: string | null;

  energy: string | null;

  danceability: string | null;

  instruments: string[];

}