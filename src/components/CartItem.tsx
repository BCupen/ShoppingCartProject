import {
  HStack,
  Image,
  VStack,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { CartItem as ICartItem } from "../interfaces";
import Quantity from "./Quantity";
import { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "./CartProvider";

interface CartItemProps {
  item: ICartItem;
  index?: number;
}

export default function CartItem({ item, index }: CartItemProps) {
  const { key, name, cost, imgSrc, qty } = item;
  const [cart, getCartIndex, addItemToCart, updateItemQty, removeItem] =
    useContext(CartContext);

  const setQty = (newQty: number) => {
    console.log(key);
    const diff = newQty - qty;
    updateItemQty(key, diff);
  };

  return (
    <HStack>
      <Image src={imgSrc} w="90px" h="110px" alignSelf="center" />
      <VStack flex="2" alignItems="left">
        <Heading fontFamily="Roboto" fontSize="16px" fontWeight="semibold">
          {name}
        </Heading>
        <Text color="brand.tan">${cost}TTD</Text>
        <Quantity value={qty} onQtyChange={setQty} />
      </VStack>
      <IconButton
        icon={<FaTrash />}
        aria-label="delete"
        w="25px"
        h="25px"
        color="brand.gold"
        bgColor="transparent"
        onClick={(e) => removeItem(index)}
      />
    </HStack>
  );
}
