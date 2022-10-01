import { string } from "yup";

export type Word = {
  word: string;
  translation: string;
};

export type Test = {
  time: string;
  result: number;
};

export type WordsState = {
  isLoading: boolean;
  fetchError: string;
  newWord: Word | null;
  words: Array<Word>;
};

export type TestState = {
  isLoading: boolean;
  fetchError: string;
  newTest: Test | null;
  tests: Array<Test>;
  wordsGroup: Array<Word>;
};

export type Quiz = {
  question: string;
  incorrect: Array<string>;
  correct: string;
};
