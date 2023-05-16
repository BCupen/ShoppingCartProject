import { useContext } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CartItem as ICartItem, CartProps } from "../interfaces";
import { CartContext } from "./CartProvider";
import CartItem from "./CartItem";

export default function Cart({ isOpen, onClose, ...props }: CartProps) {
  const [cart, addItemToCart] = useContext(CartContext);
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontFamily="Righteous" fontSize="40px">
          Your Cart
        </DrawerHeader>

        <DrawerBody>
          {cart.map((item: ICartItem) =>
            <CartItem {...item} />
          )}
        </DrawerBody>

        <DrawerFooter
          alignItems="center"
          justifyContent="center"
          fontSize="40px"
        >
          <VStack alignItems="stretch" fontFamily="Righteous">
            <Text>
              Total:{" "}
              <Text color="brand.tan" display="inline">
                $100TTD
              </Text>
            </Text>
            <Button
              variant="solid"
              alignSelf="center"
              onClick={onClose}
              bgColor="brand.gold"
              w='15rem'
              h='3.5rem'
              fontSize='32px'
              borderRadius='30px'
              boxShadow='md'
            >
              Checkout
            </Button>
          </VStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
