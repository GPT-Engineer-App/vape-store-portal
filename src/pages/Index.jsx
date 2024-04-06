import React from "react";
import { Box, Heading, Text, Button, Container } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Vape Pen",
    brand: "Bogie Monster",
    price: "$49.99",
  },
  {
    name: "Vape Mod",
    brand: "Bogie Monster",
    price: "$89.99",
  },
  {
    name: "E-Liquid",
    brand: "Bogie Monster",
    price: "$19.99",
  },
];

const Index = () => {
  return (
    <Box>
      <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Bogie Monster Vapeshop
          </Heading>
          <Text fontSize="xl" mb={8}>
            Discover our premium selection of vaping products.
          </Text>
          <Link to="/products">
            <Button colorScheme="blue" size="lg" rightIcon={<FaShoppingCart />}>
              Shop Now
            </Button>
          </Link>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
