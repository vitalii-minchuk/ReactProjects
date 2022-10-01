import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import { all, fork } from "@redux-saga/core/effects";
import wordsReducer from "./Slices/wordsSlice";
import testReducer from "./Slices/testSlice";
import { rootWordsSaga } from "./Sagas/wordsSaga";
import { rootTestsSaga } from "./Sagas/testsSaga";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const combinedReducer = combineReducers({
  words: wordsReducer,
  tests: testReducer,
});

const rootSaga = function* rootGenerator() {
  yield all([fork(rootWordsSaga), fork(rootTestsSaga)]);
};

const sagaMMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware();
    return [...defaultMiddleware, sagaMMiddleware, logger];
  },
});

sagaMMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
