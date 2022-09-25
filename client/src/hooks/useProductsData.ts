import { useCallback, useEffect, useState } from "react";
import { API } from "../api/products";
import { Product } from "../api/products/types";

function useProductsData() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    console.log("fetch");
    try {
      setIsLoading(true);
      setError(null);
      const result = await API.getProducts();
      if (!result.ok) {
        throw new Error(result.statusText);
      }
      const data = await result.json();
      setProducts(data.reverse());
    } catch (error: any) {
      setError(error.message);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addProduct = useCallback(async (product: Product) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await API.createProduct(product);
      if (!result.ok) {
        throw new Error(result.statusText);
      }
      const data = await result.json();
      setProducts((prev) => [data, ...prev]);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const editProduct = useCallback(async (product: Product) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await API.updateProduct(product);
      if (!result.ok) {
        throw new Error(result.statusText);
      }
      const data = await result.json();
      setProducts((prev) => prev.map((el) => (el.id === data.id ? data : el)));
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const removeProduct = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await API.deleteProduct(id);
      if (!result.ok) {
        throw new Error(result.statusText);
      }
      setProducts((prev) => prev.filter((el) => el.id !== id));
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // const changeInCart = useCallback((product: Product) => {
  //   setProducts((prev) =>
  //     prev.map((el) => (el.id === product.id ? product : el))
  //   );
  // }, []);

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => {
      setError(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [error]);

  return {
    error,
    fetchData,
    isLoading,
    products,
    removeProduct,
    addProduct,
    editProduct,
    // changeInCart,
  };
}

export default useProductsData;
