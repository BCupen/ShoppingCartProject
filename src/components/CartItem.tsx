import { HStack, Image, VStack, Heading, Text, IconButton } from "@chakra-ui/react";
import { CartItem as ICartItem } from "../interfaces";
import Quantity from "./Quantity";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function CartItem({ name, cost, imgSrc, qty }: ICartItem) {
    const [cartQty, setCartQty] = useState(qty);
  return (
    <HStack>
      <Image src={imgSrc} w="90px" h="110px" alignSelf="center" />
      <VStack flex='2' alignItems='left'>
        <Heading fontFamily="Roboto" fontSize="16px" fontWeight="semibold">
          {name}
        </Heading>
        <Text color="brand.tan">${cost}TTD</Text>
        <Quantity onQtyChange={setCartQty}/>
      </VStack>
      <FaTrash />
    </HStack>
  );
}
