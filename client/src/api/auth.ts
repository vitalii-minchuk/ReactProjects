import { AxiosPromise } from "axios";
import axios from "axios";
import Endpoints from "./endpoints";
import { ILoginRequest, ILoginResponse } from "./types";

const axiosInstance = axios.create();

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
  axiosInstance.post(Endpoints.AUTH.LOGIN, params);
