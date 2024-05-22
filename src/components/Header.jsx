import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
        <Box>
          <Link to="/">
            <Image src="https://static.wixstatic.com/media/b16ba7_7d2b1ce2244749d3be2cbd24d7f7cf13~mv2.png" alt="Bogie Monster Logo" h={20} />
          </Link>
        </Box>
        <Box>
          <Link to="/" p={2}>
            Home
          </Link>
          <Link to="/products" p={2}>
            Products
          </Link>

          <Link to="/cart" p={2}>
            Cart
          </Link>
        </Box>
        <Box>
          <Link to="/cart">
            <FaShoppingCart size={24} />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
