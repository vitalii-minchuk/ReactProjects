import { useEffect, useState } from "react";

const getUser = () => Promise.resolve({ id: 1, name: "Max" });
const getDataJS = () => Promise.resolve(["vue", "react", "angular"]);

const Hello = () => {
  const [user, setUser] = useState({} as { id: number; name: string });
  const [jsData, setJsData] = useState<Array<string> | null>(null);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    loadUser();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const data = await getDataJS();
      setJsData(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <h1 style={{color: 'red'}}>hello world</h1>
      {user?.id && <h3>Logged as {user.name}</h3>}
      <input type="text" placeholder="type here" />
      <button onClick={() => setIsVisible(!isVisible)}>ok</button>
      {isVisible && <div data-testid='toggle-element'>tick
      </div>}
      <ul>{jsData && jsData.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
};

export default Hello;
