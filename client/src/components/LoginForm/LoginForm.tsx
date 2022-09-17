import { FC, FormEvent, useState } from "react";

const LoginForm: FC = () => {
  const [value, setValue] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(value);
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
        <button type="submit">ok</button>
      </form>
    </div>
  );
};
export default LoginForm;
