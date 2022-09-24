import { Dispatch, SetStateAction } from "react";
import { Product, ProductWithoutId } from "../../api/products/types";

interface IProductForm {
  values: Product | ProductWithoutId;
  setValues: Dispatch<SetStateAction<Product | ProductWithoutId>>;
}
function ProductForm({ values, setValues }: IProductForm) {
  return (
    <form>
      <label htmlFor="title">Product name:</label>
      <input type="text" id="title" />
      <label htmlFor="price">Product price:</label>
      <input type="number" id="title" />
      <label htmlFor="description">Product price:</label>
      <textarea id="title" />

      <button type="submit">save</button>
    </form>
  );
}

export default ProductForm;
