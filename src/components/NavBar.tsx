import { HStack, Link, Heading, IconButton } from "@chakra-ui/react";
import { CartIcon } from "../assets/Icons";
import { NavBarProps } from "../interfaces";
import { Link as RouterLink} from "react-router-dom";


export default function NavBar({onOpen}: NavBarProps) {
  return (
    <HStack spacing="67px" color="brand.cream">
      <Link
        as={RouterLink}
        to="/"
        _hover={{
          color: "brand.tan",
        }}
      >
        <Heading fontSize="32px">Home</Heading>
      </Link>
      <Link as={RouterLink} to='/shop' _hover={{
        color: 'brand.tan'
      }}>
        <Heading fontSize="32px">Shop</Heading>
      </Link>
      <Link _hover={{
        color: 'brand.tan'
      }}>
        <Heading fontSize="32px">Contact</Heading>
      </Link>
      <IconButton
        aria-label="Your Cart"
        icon={<CartIcon />}
        bg="brand.charcoal"
        border='none'
        _hover={{
            bg:'brand.charcoal',
            border: 'none'
        }}
        onClick={onOpen}
      ></IconButton>
    </HStack>
  );
}
