export type Word = {
  word: string;
  translation: string;
};

export type Test = {
  time: any;
  result: number;
};

export type WordsState = {
  isLoading: boolean;
  fetchError: string;
  words: Array<Word>;
};
