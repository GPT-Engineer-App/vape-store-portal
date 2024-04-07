import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
        <Link to="/">
          <Image src="https://static.wixstatic.com/media/b16ba7_7d2b1ce2244749d3be2cbd24d7f7cf13~mv2.png" alt="Bogie Monster Logo" h={20} />
        </Link>
        <Link to="/cart">
          <FaShoppingCart size={24} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
