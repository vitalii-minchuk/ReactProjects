import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  authData: {
    accessToken: string | null;
    isLoading: boolean;
    error: string | null;
  };
  profileData: {
    profile: string | null;
    isLoading: boolean;
    error: string | null;
  };
}

const initialState: IAuthState = {
  authData: {
    accessToken: null,
    isLoading: false,
    error: null,
  },
  profileData: {
    profile: null,
    isLoading: false,
    error: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.authData.isLoading = true;
    },
    loginSuccess(state, action: PayloadAction<string>) {
      state.authData.accessToken = action.payload;
      state.authData.isLoading = false;
      state.authData.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.authData.accessToken = action.payload;
      state.authData.isLoading = false;
      state.authData.error = null;
    },
    loadProfileStart(state) {
      state.profileData.isLoading = true;
    },
    loadProfileSuccess(state, action: PayloadAction<string>) {
      state.profileData.profile = action.payload;
      state.profileData.isLoading = false;
      state.profileData.error = null;
    },
    loadProfileFailure(state, action: PayloadAction<string>) {
      state.profileData.profile = action.payload;
      state.profileData.isLoading = false;
      state.profileData.error = null;
    },
    logout(state) {
      state = initialState;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  loadProfileStart,
  loadProfileSuccess,
  loadProfileFailure,
} = authSlice.actions;

export default authSlice.reducer;
