import { Dispatch, FormEvent, SetStateAction } from "react";
import { Product } from "../../api/products/types";
import useValidation from "../../hooks/useValidation";

interface IProductForm {
  values: Product;
  setValues: Dispatch<SetStateAction<Product>>;
  handleSave: () => void;
}
function ProductForm({ values, setValues, handleSave }: IProductForm) {
  const { errors, touched, isValid, handleChange, handleTouche } =
    useValidation({ values, setValues });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSave();
  };

  console.log(errors, touched);
  return (
    <form>
      <label htmlFor="title">Product name:</label>
      <input
        onBlur={handleTouche}
        value={values.title}
        onChange={handleChange}
        type="text"
        id="title"
      />
      {errors.title && touched.title && <p>{errors.title}</p>}
      <label htmlFor="price">Product price:</label>
      <input
        onBlur={handleTouche}
        value={values.price}
        onChange={handleChange}
        type="number"
        id="price"
      />
      {errors.price && touched.price && <p>{errors.price}</p>}
      <label htmlFor="description">Product price:</label>
      <textarea
        onBlur={handleTouche}
        value={values.description}
        onChange={handleChange}
        id="description"
      />
      {errors.description && touched.description && <p>{errors.description}</p>}
      <button onClick={handleSubmit} disabled={!isValid} type="submit">
        save
      </button>
    </form>
  );
}

export default ProductForm;
