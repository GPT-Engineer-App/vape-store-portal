import React from "react";
import { Box, Heading, Text, Image, Button, Stack, Grid, Container } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Vape Pen",
    description: "Sleek and portable vape pen.",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1579165466814-e646cfa4a3be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YXBlJTIwcGVufGVufDB8fHx8MTcxMjQ0NDc5MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Vape Mod",
    description: "Powerful and customizable vape mod.",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1594177914682-d408d96e458b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YXBlJTIwbW9kfGVufDB8fHx8MTcxMjQ0NDc5MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "E-Liquid",
    description: "Delicious flavored e-liquid.",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1612817292236-362ab00273b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2YXBlJTIwanVpY2V8ZW58MHx8fHwxNzEyNDQ0NzkyfDA&ixlib=rb-4.0.3&q=80&w=1080",
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
          <Button colorScheme="blue" size="lg" rightIcon={<FaShoppingCart />}>
            Shop Now
          </Button>
        </Container>
      </Box>

      <Container maxW="container.lg" py={16}>
        <Heading as="h2" size="xl" mb={8}>
          Featured Products
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {products.map((product) => (
            <Box key={product.id} borderWidth={1} borderRadius="lg" p={4}>
              <Image src={product.image} alt={product.name} mb={4} />
              <Heading as="h3" size="md" mb={2}>
                {product.name}
              </Heading>
              <Text mb={4}>{product.description}</Text>
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
    </Box>
  );
};

export default Index;
