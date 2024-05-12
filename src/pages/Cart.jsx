import React, { useContext } from "react";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { CartContext } from "../contexts/CartContext.jsx";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);

  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={8}>
        Shopping Cart
      </Heading>
      {cartItems.length > 0 ? (
        <Stack spacing={4} direction={{ base: "column", md: "row" }}>
          {cartItems.map((item, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Text fontWeight="bold">{item.name}</Text>
              <Text mb={2}>${item.price}</Text>
              <Button colorScheme="red" onClick={() => removeFromCart(item.name)}>
                Remove
              </Button>
            </Box>
          ))}
          <Text fontSize="xl">Total: ${total}</Text>
          <Button colorScheme="red" onClick={() => cartItems.splice(0, cartItems.length)}>
            Clear Cart
          </Button>
        </Stack>
      ) : (
        <Text>No items in the cart.</Text>
      )}
    </Box>
  );
};

export default Cart;
