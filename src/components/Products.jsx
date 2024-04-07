import React, { useState } from "react";
import { Box, Heading, Text, Button, Stack, Grid, Container, Flex } from "@chakra-ui/react";
import BrandList from "./BrandList";

const Products = ({ products }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  const filteredProducts = selectedBrand ? products.filter((product) => product.brand === selectedBrand) : products;

  return (
    <Container maxW="container.lg" py={16}>
      <Flex>
        <Box width="200px" mr={8}>
          <BrandList products={products} onBrandSelect={handleBrandSelect} />
        </Box>
        <Box flex={1}>
          <Heading as="h2" size="xl" mb={8}>
            {selectedBrand || "All Products"}
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            {filteredProducts.map((product) => (
              <Box key={product.name} borderWidth={1} borderRadius="lg" p={4} textAlign="center">
                <Box bgImage={product.image ? `url(/images/${product.image})` : "url('https://via.placeholder.com/200')"} bgSize="cover" bgPosition="center" height="200px" width="100%" mb={4} borderRadius="lg" />
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text mb={2}>{product.brand}</Text>
                <Stack direction="row" align="center">
                  <Text fontWeight="bold">{product.price}</Text>
                  <Button colorScheme="blue" size="sm" ml="auto">
                    Add to Cart
                  </Button>
                </Stack>
              </Box>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Container>
  );
};

export default Products;
