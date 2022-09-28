import Header from "./components/Header";
import CurrencyDisplay from "./components/CurrencyDisplay";
import { useAppSelector } from "./hooks";

function App() {
  const { isShown } = useAppSelector((state) => state.currency);
  return (
    <div>
      <Header />
      <CurrencyDisplay />
    </div>
  );
}

export default App;
