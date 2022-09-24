import { MouseEvent } from "react";
import { Product } from "../../../api/products/types";

interface ILink {
  href: string;
  children: JSX.Element | string;
  obj?: Product;
}

function Link({ obj, href, children }: ILink) {
  const handleCLick = (e: MouseEvent) => {
    e.preventDefault();
    window.history.pushState(obj ? obj : {}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={handleCLick} href={href}>
      {children}
    </a>
  );
}

export default Link;
