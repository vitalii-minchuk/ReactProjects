import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";

interface INavLink {
  to: string;
  children: ReactNode;
}

function NavLink({ children, to, ...props }: INavLink) {
  const match = useMatch({
    path: to,
    end: to.length === 0,
  });

  return (
    <Link to={to} {...props}>
      <Text color={match ? "teal" : ""}>{children}</Text>
    </Link>
  );
}

export default NavLink;
