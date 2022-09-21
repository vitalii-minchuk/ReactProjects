import { Dispatch } from "@reduxjs/toolkit";
import { AppThunk } from "..";
import api from "../../api";
import { ILoginRequest } from "../../api/auth/types";
import { loginFailure, loginStart, loginSuccess } from "./authSlice";

export const loginUser =
  (data: ILoginRequest): AppThunk =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(loginStart());
      const result = await api.auth.login(data);
      dispatch(loginSuccess(result.data.accessToken));
    } catch (error: any) {
      console.log(error.message);
      dispatch(loginFailure);
    }
  };
