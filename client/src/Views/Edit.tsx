import { useState } from "react";
import { Product } from "../api/products/types";
import ProductForm from "../components/ProductForm";
import useProductsData from "../hooks/useProductsData";

const Edit = () => {
  const { error, isLoading, editProduct } = useProductsData();
  const product = window.history.state;
  const [newProduct, setProduct] = useState<Product>(product);

  const handleSave = () => {
    editProduct(newProduct);
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
};

export default Edit;
