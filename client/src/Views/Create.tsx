import { useState } from "react";
import { ProductWithoutId } from "../api/products/types";
import ProductForm from "../components/ProductForm";

function Create() {
  const [newProduct, setProduct] = useState<ProductWithoutId>({
    title: "",
    description: "",
    price: 0,
    inCart: false,
  });

  return (
    <div>
      <ProductForm values={newProduct} setValues={setProduct} />
    </div>
  );
}

export default Create;
