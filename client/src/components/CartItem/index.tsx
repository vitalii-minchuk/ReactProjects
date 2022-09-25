import { CartItem } from "../../api/products/types";
import styles from "./CartItem.module.css";

type Props = {
  item: CartItem;
};

function CartProductItem({ item }: Props) {
  const sum = item.price * item.quantity;
  return (
    <div className={styles.box}>
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <div className={styles.actions}>
        <button>+</button>
        <p>{item.quantity}</p>
        <button>+</button>
        <p>{sum}</p>
      </div>
      <button>delete</button>
    </div>
  );
}

export default CartProductItem;
