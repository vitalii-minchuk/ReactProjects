import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Word, WordsState } from "../../types";

const initialState: WordsState = {
  isLoading: false,
  fetchError: "",
  newWord: null,
  words: [],
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    fetchWords(state) {
      state.isLoading = true;
    },
    fetchWordsSuccess(state, action: PayloadAction<Word[]>) {
      state.words = action.payload;
      state.isLoading = false;
    },
    fetchWordsFailure(state, action: PayloadAction<string>) {
      state.fetchError = action.payload;
      state.isLoading = false;
    },
    createNewWord(state, action: PayloadAction<Word>) {
      state.words.push(action.payload);
      state.newWord = action.payload;
    },
  },
});

export const {
  fetchWords,
  fetchWordsSuccess,
  fetchWordsFailure,
  createNewWord,
} = wordsSlice.actions;

export default wordsSlice.reducer;
