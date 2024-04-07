import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Link to="/">
        <Image src="https://static.wixstatic.com/media/b16ba7_7d2b1ce2244749d3be2cbd24d7f7cf13~mv2.png" alt="Bogie Monster Logo" h={20} mx="auto" />
      </Link>
    </Box>
  );
};

export default Header;
