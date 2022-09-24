import { useEffect, useState } from "react";
import { API } from "../api/products";
import { Product } from "../api/products/types";

const useProductsData = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await API.getProducts();
      if (!result.ok) {
        throw new Error(result.statusText);
      }
      const data = await result.json();
      setProducts(data);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const removeProduct = async (id: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await API.deleteProduct(id);
      if (!result.ok) {
        throw new Error(result.statusText);
      }
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => {
      setError(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [error]);

  return { error, isLoading, products, removeProduct };
};

export default useProductsData;
