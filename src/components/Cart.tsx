import { useContext, useEffect,useState } from "react";
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

export default function Cart({ isOpen, onClose }: CartProps) {
  const [cart] = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const calculateTotal = () =>{
    let total = 0;
    for(const item of cart){
      const amt = parseInt(item.cost) * item.qty;
      total += amt;
    }
    return total;
  }

  useEffect(()=>{
    setTotal(calculateTotal());
  }, [cart])

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontFamily="Righteous" fontSize="40px">
          Your Cart
        </DrawerHeader>

        <DrawerBody>
          {cart.map((item: ICartItem, index: number) =>
            <CartItem item={item} index={index} />
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
                ${total}TTD
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
