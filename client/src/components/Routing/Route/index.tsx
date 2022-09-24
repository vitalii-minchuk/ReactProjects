import { useEffect, useState } from "react";

interface IRoute {
  children: JSX.Element;
  path: string;
}

const Route = ({ path, children }: IRoute) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);

    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);
  return currentPath === path ? children : null;
};

export default Route;
