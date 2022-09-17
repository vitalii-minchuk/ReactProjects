import { FC, FormEvent, useState } from "react";
import { ILoginRequest } from "../../api/types";
import { useAppDispatch } from "../../store";
import { loginUser } from "../../store/auth/actionCreators";

const LoginForm: FC = () => {
  const [value, setValue] = useState<ILoginRequest>({
    name: "",
    password: "",
  });
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(value));
    setValue({
      name: "",
      password: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            onChange={(e) => setValue({ ...value, name: e.target.value })}
            value={value.name}
            type="text"
          />
        </label>
        <label>
          Password:
          <input
            onChange={(e) => setValue({ ...value, password: e.target.value })}
            value={value.password}
            type="password"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default LoginForm;
