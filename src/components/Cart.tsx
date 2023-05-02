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
import { CartProps } from "../interfaces";


export default function Cart({ isOpen, onClose, ...props }: CartProps) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size='sm'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontFamily='Righteous'>Your Cart</DrawerHeader>

        <DrawerBody></DrawerBody>

        <DrawerFooter alignItems='center' justifyContent='center'>
            <VStack alignItems='stretch' fontFamily='Righteous'>
                <Text>Total: <Text color='brand.tan' display='inline'>$100TTD</Text></Text>
                <Button variant="solid" alignSelf="center" onClick={onClose} bgColor='brand.gold'>
                    Checkout
                </Button>
            </VStack>            
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
