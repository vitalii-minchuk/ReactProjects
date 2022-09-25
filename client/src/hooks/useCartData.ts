import { useCallback, useEffect, useState } from "react";
import { API } from "../api/products";
import { CartItem, Product } from "../api/products/types";

function useCartData() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartLoading, setIsCartLoading] = useState(false);
  const [cartError, setCartError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    console.log("cartFetch");
    try {
      setIsCartLoading(true);
      setCartError(null);
      const result = await API.getCartItems();
      if (!result.ok) {
        throw new Error(result.statusText);
      }
      const data = await result.json();
      setCartItems(data.reverse());
    } catch (error: any) {
      setCartError(error.message);
      setCartItems([]);
    } finally {
      setIsCartLoading(false);
    }
  }, []);

  const addItem = useCallback(async (item: Product) => {
    const cartItem = {
      title: item.title,
      description: item.description,
      id: item.id!,
      price: item.price,
      quantity: 1,
    };
    try {
      setIsCartLoading(true);
      setCartError(null);
      const result_1 = await API.addProductToCart(cartItem);
      if (!result_1.ok) {
        throw new Error(result_1.statusText);
      }
      const data = await result_1.json();
      setCartItems(data.reverse());
    } catch (error: any) {
      setCartError(error.message);
      setCartItems([]);
    } finally {
      setIsCartLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!cartError) return;
    const timer = setTimeout(() => {
      setCartError(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [cartError]);
  return { cartItems, fetchData, isCartLoading, cartError, addItem };
}
export default useCartData;
