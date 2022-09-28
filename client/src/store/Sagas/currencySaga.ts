import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { fetchData } from "../../api";
import {
  ExchangeParams,
  fetchCurrency,
  fetchCurrencyFailure,
  fetchCurrencySuccess,
} from "../Slices/currencySlice";

export function* fetchCurrencySaga() {
  console.log("first");
  try {
    const requestParams: ExchangeParams = yield select(
      (store) => store.currency.exchangeParams
    );
    const data: any = yield call(fetchData(requestParams));
    console.log(data);
    yield put(fetchCurrencySuccess(data));
  } catch (error: any) {
    yield put(fetchCurrencyFailure(error.message));
  }
}

export function* rootCurrencySaga() {
  yield takeEvery(fetchCurrency.type, fetchCurrencySaga);
}
