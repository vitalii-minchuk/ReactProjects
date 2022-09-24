import { useEffect, useState } from "react";
import Cart from "../Views/Cart";
import Edit from "../Views/Edit";
import Main from "../Views/Main";
import NotFound from "../Views/NotFound";

export enum Routes {
  HOME = "/",
  CART = "/cart",
  EDIT = "/edit",
  CREATE = "/create",
}

export const useRouting = () => {
  const [component, setComponent] = useState(<Main />);
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      window.history.pushState({}, "", path);
      setPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);

    return () => window.removeEventListener("popstate", onLocationChange);
  }, [path]);

  const navigateTo = (route: string) => {
    console.log("hello", route, path);
    switch (route) {
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
  };
  return { path, navigateTo, component };
};
