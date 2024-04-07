import React from "react";
import { Box, Text } from "@chakra-ui/react";

const BrandList = ({ products, onBrandSelect }) => {
  const brands = [...new Set(products.map((product) => product.brand))];

  return (
    <Box>
      <Text fontWeight="bold" mb={2}>
        Brands
      </Text>
      {brands.map((brand) => (
        <Text key={brand} cursor="pointer" onClick={() => onBrandSelect(brand)} mb={1}>
          {brand}
        </Text>
      ))}
      <Text cursor="pointer" onClick={() => onBrandSelect(null)} mt={4} color="blue.500">
        Show All Products
      </Text>
    </Box>
  );
};

export default BrandList;
