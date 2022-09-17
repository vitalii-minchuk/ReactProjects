//login
export interface ILoginRequest {
  name: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
}
