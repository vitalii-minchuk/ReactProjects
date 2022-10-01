import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import { all, fork } from "@redux-saga/core/effects";
import wordsReducer from "./Slices/wordsSlice";
import { rootWordsSaga } from "./Sagas/wordsSaga";

const combinedReducer = combineReducers({
  words: wordsReducer,
});

const rootSaga = function* rootGenerator() {
  yield all([fork(rootWordsSaga)]);
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
