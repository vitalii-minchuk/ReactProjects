import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchCurrency } from "../../store/Slices/currencySlice";

function CurrencyDisplay() {
  const { isShown } = useAppSelector((state) => state.currency);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);
  return (
    <div>{isShown ? <Marquee speed={200}>heloo world</Marquee> : null}</div>
  );
}

export default CurrencyDisplay;
