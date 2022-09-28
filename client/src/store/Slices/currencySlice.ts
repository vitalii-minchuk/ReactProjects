import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ExchangeParams = {
  from: string;
  to: string;
};

type CurrencyState = {
  isShown: boolean;
  isLoading: boolean;
  fetchError: string;
  result: number;
  exchangeParams: ExchangeParams;
};

const initialState: CurrencyState = {
  isShown: false,
  isLoading: false,
  fetchError: "",
  result: 1,
  exchangeParams: {
    from: "uah",
    to: "usd",
  },
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    showCurrencyDisplay(state) {
      state.isShown = !state.isShown;
    },
    fetchCurrency(state) {
      state.isLoading = true;
    },
    fetchCurrencySuccess(state, action: PayloadAction<number>) {
      state.result = action.payload;
      state.isLoading = false;
    },
    fetchCurrencyFailure(state, action: PayloadAction<string>) {
      state.fetchError = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  showCurrencyDisplay,
  fetchCurrency,
  fetchCurrencySuccess,
  fetchCurrencyFailure,
} = currencySlice.actions;

export default currencySlice.reducer;
