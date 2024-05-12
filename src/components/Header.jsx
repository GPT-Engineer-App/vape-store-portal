import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto">
        <Link to="/">
          <Image src="https://static.wixstatic.com/media/b16ba7_7d2b1ce2244749d3be2cbd24d7f7cf13~mv2.png" alt="Bogie Monster Logo" h={20} />
        </Link>
        <Flex>
          <Link to="/products" mr={4}>
            <Text>Products</Text>
          </Link>
          <Link to="/cart">
            <FaShoppingCart size={24} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
