import { Product } from "../../api/products/types";
import { Routes } from "../../hooks/useRouting";
import Link from "../Routing/Link";

interface IProductCard {
  product: Product;
  removeProduct: (id: string) => void;
}

const ProductCard = ({ product, removeProduct }: IProductCard) => {
  const handleDelete = () => {
    console.log(product.id);
    removeProduct(product.id!);
  };
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={handleDelete}>delete</button>
      <Link obj={product} href={Routes.EDIT}>
        "edit"
      </Link>
    </div>
  );
};

export default ProductCard;
