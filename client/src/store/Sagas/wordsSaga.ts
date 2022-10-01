import { put, select, takeEvery } from "@redux-saga/core/effects";
import API from "../../api";
import { Word } from "../../types";
import {
  createNewWord,
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

export function* addWordSaga() {
  const data: Word = yield select((store) => store.words.newWord);
  try {
    yield API.addWord(data);
  } catch (error: any) {
    yield put(fetchWordsFailure(error.message));
  }
}

export function* rootWordsSaga() {
  yield takeEvery(fetchWords.type, fetchWordsSaga);
  yield takeEvery(createNewWord.type, addWordSaga);
}
