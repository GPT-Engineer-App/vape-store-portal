import React from "react";
import { Box, Heading, Text, Button, Container, SimpleGrid } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    name: "Breeze Smoke Pro - Mint",
    brand: "BREEZE PRO",
    price: "$21.99",
  },
  {
    name: "beast mode weekend watermelon",
    brand: "FLAVOUR BEAST",
    price: "$25.99",
  },
  {
    name: "STLTH 8K Juicy Peach Ice",
    brand: "STLTH 8K",
    price: "$26.49",
  },
];

const Index = () => {
  return (
    <Box>
      <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading as="h1" size="3xl" mb={4}>
            Premium Vaping Products at Bogie Monster Vapeshop
          </Heading>
          <Text fontSize="xl" mb={8}>
            Discover the best selection of vape devices, e-liquids, and accessories. Shop now and experience the Bogie Monster difference!
          </Text>
          <Link to="/products">
            <Button colorScheme="blue" size="lg" rightIcon={<FaShoppingCart />}>
              Shop Our Products
            </Button>
          </Link>
        </Container>
      </Box>

      <Container maxW="container.lg" py={16}>
        <Heading as="h2" size="2xl" mb={8}>
          Featured Products
        </Heading>
        <SimpleGrid columns={3} spacing={8}>
          {featuredProducts.map((product) => (
            <Box key={product.name} borderWidth={1} borderRadius="lg" p={4}>
              <Heading as="h3" size="md" mb={2}>
                {product.name}
              </Heading>
              <Text mb={2}>{product.brand}</Text>
              <Text fontWeight="bold">{product.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Box bg="gray.50" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={4}>
            About Bogie Monster Vapeshop
          </Heading>
          <Text fontSize="lg" mb={8}>
            At Bogie Monster, we're passionate about providing our customers with the highest quality vaping products on the market. we've curated a selection of the best brands and devices to help you find your perfect vape.
          </Text>
          <Heading as="h2" size="xl" mb={4}>
            Why Choose Bogie Monster?
          </Heading>
          <Text fontSize="lg" mb={2}>
            ✔ Huge selection of premium vape brands and products
          </Text>
          <Text fontSize="lg" mb={2}>
            ✔ Top-notch customer service and support
          </Text>
          <Text fontSize="lg" mb={2}>
            ✔ Best prices in the city
          </Text>
          <Text fontSize="lg">✔ 100% satisfaction guarantee</Text>
        </Container>
      </Box>
    <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={4}>
            Contact Us
          </Heading>
          <Text fontSize="lg" mb={2}>
            Address: 4719 Wyandotte St E, Windsor, ON N8Y 1H8
          </Text>
          <Text fontSize="lg" mb={2}>
            Email: windsor@bogiemonster.com
          </Text>
          <Text fontSize="lg" mb={2}>
            Phone: 1 226 221 9813
          </Text>
          <Text fontSize="lg">Instagram: @bogiemonsterwindsor</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
