import { useAppDispatch } from "../../hooks";
import {
  fetchCurrency,
  showCurrencyDisplay,
} from "../../store/Slices/currencySlice";

function Header() {
  const dispatch = useAppDispatch();
  const handleShow = () => {
    dispatch(showCurrencyDisplay());
    dispatch(fetchCurrency());
  };
  return (
    <div>
      <h1>header</h1>
      <button onClick={handleShow}>show</button>
    </div>
  );
}

export default Header;
