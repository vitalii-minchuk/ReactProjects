import { useState } from "react";
import { Product } from "../api/products/types";
import ProductForm from "../components/ProductForm";
import useProductsData from "../hooks/useProductsData";

function Create() {
  const { error, isLoading, addProduct } = useProductsData();
  const [newProduct, setProduct] = useState<Product>({
    title: "",
    description: "",
    price: 0,
    inCart: false,
  });

  const handleSave = async () => {
    await addProduct(newProduct);
    setProduct({
      title: "",
      description: "",
      price: 0,
      inCart: false,
    });
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ProductForm
        values={newProduct}
        handleSave={handleSave}
        setValues={setProduct}
      />
    </div>
  );
}

export default Create;
