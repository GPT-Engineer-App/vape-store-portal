import React from "react";
import { Box, Heading, Text, Image, Button, Stack, Grid, Container } from "@chakra-ui/react";

const Products = ({ products }) => {
  return (
    <Container maxW="container.lg" py={16}>
      <Heading as="h2" size="xl" mb={8}>
        All Products
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        {products.map((product) => (
          <Box key={product.name} borderWidth={1} borderRadius="lg" p={4}>
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
    </Container>
  );
};

export default Products;
