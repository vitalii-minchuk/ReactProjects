import { put, select, takeEvery } from "@redux-saga/core/effects";
import { AxiosError } from "axios";
import API from "../../api";
import { Test } from "../../types";
import {
  addNewTest,
  fetchTests,
  fetchTestsFailure,
  fetchTestsSuccess,
} from "../Slices/testSlice";

export function* fetchTestsSaga() {
  try {
    const data: Test[] = yield API.fetchTestsData();
    yield put(fetchTestsSuccess(data));
  } catch (error: any) {
    yield put(fetchTestsFailure(error.message));
  }
}

export function* addTestSaga() {
  const data: Test = yield select((store) => store.tests.newTest);
  try {
    yield API.addTest(data);
  } catch (error: any) {
    yield put(fetchTestsFailure(error.message));
  }
}

export function* rootTestsSaga() {
  yield takeEvery(fetchTests.type, fetchTestsSaga);
  yield takeEvery(addNewTest.type, addTestSaga);
}
