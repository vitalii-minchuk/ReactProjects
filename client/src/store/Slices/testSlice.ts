import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Test, TestState } from "../../types";

const initialState: TestState = {
  isLoading: false,
  fetchError: "",
  tests: [],
  newTest: null,
};

const testSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    fetchTests(state) {
      state.isLoading = true;
    },
    fetchTestsSuccess(state, action: PayloadAction<Test[]>) {
      state.tests = action.payload;
      state.isLoading = false;
    },
    fetchTestsFailure(state, action: PayloadAction<string>) {
      state.fetchError = action.payload;
      state.isLoading = false;
    },
    addNewTest(state, action: PayloadAction<Test>) {
      state.tests.push(action.payload);
      state.newTest = action.payload;
    },
  },
});

export const { addNewTest, fetchTests, fetchTestsSuccess, fetchTestsFailure } =
  testSlice.actions;

export default testSlice.reducer;
