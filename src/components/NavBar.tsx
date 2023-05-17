import { HStack, Link, Heading, IconButton, Circle } from "@chakra-ui/react";
import { CartIcon } from "../assets/Icons";
import { NavBarProps } from "../interfaces";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartProvider";

export default function NavBar({ onOpen }: NavBarProps) {
  const [cart] = useContext(CartContext);
  return (
    <HStack spacing="67px" color="brand.cream">
      <Link
        as={RouterLink}
        to="/ShoppingCartProject"
        _hover={{
          color: "brand.tan",
        }}
      >
        <Heading fontSize="32px">Home</Heading>
      </Link>
      <Link
        as={RouterLink}
        to="/shop"
        _hover={{
          color: "brand.tan",
        }}
      >
        <Heading fontSize="32px">Shop</Heading>
      </Link>
      <Link
        as={RouterLink}
        to="/contact"
        _hover={{
          color: "brand.tan",
        }}
      >
        <Heading fontSize="32px">Contact</Heading>
      </Link>
      <HStack>
        <IconButton
          aria-label="Your Cart"
          icon={<CartIcon />}
          bg="brand.charcoal"
          border="none"
          _hover={{
            bg: "brand.charcoal",
            border: "none",
          }}
          onClick={onOpen}
        ></IconButton>
        {cart.length > 0 && (
          <Circle
            size="25px"
            bgColor="brand.cartCount"
            color="brand.charcoal"
            fontFamily="Righteous"
            position='absolute'
            top='20px'
            right='0'
          >
            {cart.length}
          </Circle>
        )}
      </HStack>
    </HStack>
  );
}
