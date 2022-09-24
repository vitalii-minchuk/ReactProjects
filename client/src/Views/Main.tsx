import ProductCard from "../components/ProductCard";
import useProductsData from "../hooks/useProductsData";

function Main() {
  const { isLoading, error, products, removeProduct } = useProductsData();
  console.log(error);
  return (
    <>
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products?.map((el) => (
            <ProductCard
              key={el.id}
              product={el}
              removeProduct={removeProduct}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Main;
