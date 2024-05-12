import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Cart = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={8}>
        Your Shopping Cart
      </Heading>
      <Text>Your cart is currently empty.</Text>
    </Box>
  );
};

export default Cart;
