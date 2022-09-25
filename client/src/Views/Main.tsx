import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import Link from "../components/Routing/Link";
import useProductsData from "../hooks/useProductsData";
import { Routes } from "../hooks/useRouting";

function Main() {
  const { isLoading, fetchData, error, products, removeProduct } =
    useProductsData();
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const shownProducts = products.slice(firstIndex, lastIndex);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(products);
  return (
    <>
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Link href={Routes.CREATE}>create</Link>
          {shownProducts?.map((el) => (
            <ProductCard
              key={el.id}
              product={el}
              removeProduct={removeProduct}
            />
          ))}
          <Pagination
            setCurrentPage={setCurrentPage}
            totalItems={products?.length}
            currentPage={currentPage}
            productsPerPage={productsPerPage}
          />
        </div>
      )}
    </>
  );
}

export default Main;
