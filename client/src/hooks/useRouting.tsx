import { useEffect, useState } from "react";
import { Product } from "../api/products/types";
import Cart from "../Views/Cart";
import Edit from "../Views/Edit";
import Main from "../Views/Main";
import NotFound from "../Views/NotFound";

const useRouting = (products: Product[]) => {
  const [component, setComponent] = useState(<Main />);
  const [path, setPath] = useState("/");

  const navigateTo = (route: string) => {
    setPath(route);
  };

  console.log("hello");
  useEffect(() => {
    window.history.pushState("new", "", path);
    setPath(window.location.pathname);
  }, [path]);

  useEffect(() => {
    switch (path) {
      case "/":
        setComponent(<Main />);
        break;
      case "/cart":
        setComponent(<Cart />);
        break;
      case "/edit":
        setComponent(<Edit />);
        break;
      default:
        setComponent(<NotFound />);
        break;
    }
  }, [path, products]);

  return { navigateTo, component };
};

export default useRouting;
