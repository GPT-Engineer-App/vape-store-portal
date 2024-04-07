import React, { useState } from "react";
import { Box, Heading, Text, Button, Stack, Grid, Container, Flex, Image } from "@chakra-ui/react";
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
            {filteredProducts.map((product) => {
              const brandImages = {
                "AL FAKHER": "https://www.canvape.com/cdn/shop/files/img_3449_1_1800x1800.jpg?v=1704910466",
                "BREEZE PRO": "https://vapemeet.ca/cdn/shop/products/RaspberryLemon_da6016df-1394-46d2-adfd-d120a90f5d3a.jpg?v=1707411077",
                ARCHER: "https://honeypotvapeshop.ca/cdn/shop/files/Vapmod-Archer-12000_Website-Banner_Mobile_1024x1024.png?v=1707072285",
                "DUMMY VAPES": "https://digitalimports.ca/cdn/shop/collections/VfE7xVdA.jpg?v=1696009784",
                "BREEZE PRIME": "https://www.primevape.ca/cdn/shop/files/BreezePrime6000-DoubleApple.png?v=1702494412",
                "BREEZE ELITE": "https://eyzssdmhyfg.exactdn.com/wp-content/uploads/2023/10/breeze-elite-punch-ice-canada.jpg?strip=all&lossy=1&ssl=1",
                "Z-PODS": "https://www.majesticvapes.ca/wp-content/uploads/bb-plugin/cache/b3b317d1d4f01405bbe4ad3e4ec9734a668cff00-600x600-square.jpg",
                STLTH: "https://stlthvape.com/cdn/shop/products/STLTH-TYPE-C-Vape-Device-Canada-Black-Metal.png?v=1673361510&width=1920",
                "STLTH TITAN": "https://fatpanda.ca/cdn/shop/files/STLTH-TITAN-DISPOSABLE-VAPE-PUNCH-ICE_700x700.jpg?v=1708548690",
                "STLTH 8K": "https://res.cloudinary.com/www180smokeca/image/upload/c_lpad,dpr_2.0,f_auto,g_auto:subject,q_auto/v1/media/catalog/product/s/t/stlth_8k_pro_0004s_0009_ice_mint.jpg",
                HQD: "https://www.libertyvape.ca/cdn/shop/files/hqd-cuvie-slick-pro-disposable-vape-7000-puffs-16ml-40348531589359_large.jpg?v=1701147126",
                ELFBAR: "https://res.cloudinary.com/www180smokeca/image/upload/c_lpad,dpr_2.0,f_auto,g_auto:subject,q_auto/v1/media/catalog/product/e/l/elfbar_bc10000_disposable_vape_blueberry_mint.jpg",
                "ICE WAVE": "https://www.majesticvapes.ca/wp-content/uploads/bb-plugin/cache/IW8500-peach-ice-300x300-1-square.jpg",
              };
              const productImage = brandImages[product.brand] || "";

              return (
                <Box key={product.name} borderWidth={1} borderRadius="lg" p={4}>
                  <Image src={productImage} alt={`${product.brand} product`} mb={4} borderRadius="md" />
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
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </Container>
  );
};

export default Products;
