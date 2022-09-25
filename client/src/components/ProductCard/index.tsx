import { Product } from "../../api/products/types";
import useCartData from "../../hooks/useCartData";
import useProductsData from "../../hooks/useProductsData";
import { Routes } from "../../hooks/useRouting";
import Link from "../Routing/Link";

interface IProductCard {
  product: Product;
  removeProduct: (id: string) => void;
}

const ProductCard = ({ product, removeProduct }: IProductCard) => {
  const { addItem } = useCartData();
  const { editProduct } = useProductsData();
  const handleDelete = () => {
    removeProduct(product.id!);
  };
  const handleAddToCart = () => {
    addItem(product);
    editProduct({ ...product, inCart: true });
  };

  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={handleDelete}>delete</button>
      <button disabled={product.inCart} onClick={handleAddToCart}>
        add to cart
      </button>
      <Link obj={product} href={Routes.EDIT}>
        "edit"
      </Link>
    </div>
  );
};

export default ProductCard;
