import { useEffect, useState } from "react";
import { Product } from "../api/products/types";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import Link from "../components/Routing/Link";
import useProductsData from "../hooks/useProductsData";
import { Routes } from "../hooks/useRouting";

function Main() {
  const { isLoading, error, products, removeProduct } = useProductsData();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [shownProducts, setShownProducts] = useState<Product[]>([]);

  useEffect(() => {
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    setShownProducts(products.slice(firstIndex, lastIndex));
  }, [currentPage, products, productsPerPage]);
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
          <select
            onChange={(value) => {
              setProductsPerPage(Number(value));
            }}
          >
            <option>10</option>
            <option>5</option>
            <option>15</option>
          </select>
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
