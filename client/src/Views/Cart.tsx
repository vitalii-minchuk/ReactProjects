import { useEffect } from "react";
import CartProductItem from "../components/CartItem";
import useCartData from "../hooks/useCartData";

function Cart() {
  const { cartItems, fetchData, cartError } = useCartData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {cartError && <p>{cartError}</p>}
      {cartItems?.map((item) => (
        <CartProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;
