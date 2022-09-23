// import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "./api/products";
import { Product } from "./api/products/types";
import Header from "./components/Header";
import useRouting from "./hooks/useRouting";
// import Login from "./pages/Login";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, []);

  const { component, navigateTo } = useRouting(products);

  return (
    <>
      <Header />
      <button onClick={() => navigateTo("/cart")}>ok</button>
      {component}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </>
  );
}

export default App;
