import Header from "./components/Header";
import CurrencyDisplay from "./components/CurrencyDisplay";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>ok</button>
      <Header />
      {show && <CurrencyDisplay />}
    </div>
  );
}

export default App;
