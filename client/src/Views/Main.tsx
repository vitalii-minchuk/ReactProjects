import { Product } from "../api/products/types";

function Main() {
  const fetchPr = () => {};
  return (
    <div>
      {products?.map((el) => (
        <div key={el.id}>
          <p>{el.title}</p>
          <button onClick={fetchPr}>get</button>
        </div>
      ))}
    </div>
  );
}

export default Main;
