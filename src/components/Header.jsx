import React from "react";
import { Box, Image, Flex, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const categories = ["disposables", "pods", "box mods", "juices"];

  return (
    <Box bg="gray.100" py={4}>
      <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
        <Flex align="center">
          <Link to="/">
            <Image src="https://static.wixstatic.com/media/b16ba7_7d2b1ce2244749d3be2cbd24d7f7cf13~mv2.png" alt="Bogie Monster Logo" h={20} mr={8} />
          </Link>
          {categories.map((category) => (
            <Button key={category} onClick={() => navigate(`/products?category=${category}`)} variant="ghost" _hover={{ bg: "gray.200" }} mr={4}>
              {category}
            </Button>
          ))}
        </Flex>
        <Link to="/cart">
          <FaShoppingCart size={24} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
