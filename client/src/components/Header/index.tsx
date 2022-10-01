import { Box, Container, Flex, Text } from "@chakra-ui/react";
import NavLink from "../common/NavLink";

function Header() {
  return (
    <Box as="header" w="full">
      <Container maxW="2xl">
        <Flex w="full" h="70px" align="center" justify="space-between">
          <Text fontFamily="Caveat" fontSize="30px">
            task words
          </Text>
          <Flex justify="space-between" w="120px">
            <NavLink to="">Home</NavLink>
            <NavLink to="new">Add New Word</NavLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
