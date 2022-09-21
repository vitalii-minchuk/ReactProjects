import { FormEvent, useState } from "react";
import { ILoginRequest } from "../api/auth/types";
import { useAppDispatch } from "../store";
import { loginUser } from "../store/auth/actionCreators";

function Login() {
  const [value, setValue] = useState<ILoginRequest>({
    login: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    dispatch(loginUser(value));
    setValue({
      login: "",
      password: "",
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login">
          <input
            onChange={(e) => setValue({ ...value, login: e.target.value })}
            value={value.login}
            name="login"
            type="text"
          />
        </label>
        <label htmlFor="password">
          <input
            onChange={(e) => setValue({ ...value, password: e.target.value })}
            value={value.password}
            name="password"
            type="password"
          />
        </label>
        <button type="submit">ok</button>
      </form>
    </div>
  );
}

export default Login;
