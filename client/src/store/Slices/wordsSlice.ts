import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Word, WordsState } from "../../types";

const initialState: WordsState = {
  isLoading: false,
  fetchError: "",
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
  },
});

export const { fetchWords, fetchWordsSuccess, fetchWordsFailure } =
  wordsSlice.actions;

export default wordsSlice.reducer;
