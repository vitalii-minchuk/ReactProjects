import { Dispatch, FormEvent, SetStateAction } from "react";
import { Product } from "../../api/products/types";
import Link from "../Routing/Link";

interface IProductForm {
  values: Product;
  setValues: Dispatch<SetStateAction<Product>>;
  handleSave: () => void;
}
function ProductForm({ values, setValues, handleSave }: IProductForm) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSave();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Product name:</label>
      <input
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        type="text"
        id="title"
      />
      <label htmlFor="price">Product price:</label>
      <input
        value={values.price}
        onChange={(e) => setValues({ ...values, price: +e.target.value })}
        type="number"
        id="title"
      />
      <label htmlFor="description">Product price:</label>
      <textarea
        value={values.description}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
        id="title"
      />
      <button type="submit">save</button>
    </form>
  );
}

export default ProductForm;
