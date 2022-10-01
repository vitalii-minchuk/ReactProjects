import { put, select, takeEvery } from "@redux-saga/core/effects";
import API from "../../api";
import { Word } from "../../types";
import {
  fetchWords,
  fetchWordsFailure,
  fetchWordsSuccess,
} from "../Slices/wordsSlice";

export function* fetchWordsSaga() {
  try {
    const data: Word[] = yield API.fetchWordsData();
    yield put(fetchWordsSuccess(data));
  } catch (error: any) {
    yield put(fetchWordsFailure(error.message));
  }
}

export function* rootWordsSaga() {
  yield takeEvery(fetchWords.type, fetchWordsSaga);
}
