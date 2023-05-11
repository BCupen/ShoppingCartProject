import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  CardFooter,
  Button,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { ProductItemProps } from "../interfaces";
import Quantity from "./Quantity";

export default function ProductItem({
  name,
  cost,
  imgSrc,
  category,
  ...props
}: ProductItemProps) {
  return (
    <Card
      w="270px"
      h="290px"
      px="2"
      border="3px solid"
      borderColor="brand.tan"
      borderRadius="20px"
    >
      <Image src={imgSrc} w="120px" h="160px" alignSelf="center" />
      <Divider />
      <CardBody pb="0" pt="10px">
        <Heading fontFamily="Roboto" fontSize="20px" fontWeight="semibold">
          {name}
        </Heading>
        <Text color='brand.tan'>${cost}TTD</Text>
      </CardBody>
      <CardFooter pt="0" pb="10px" px='0' justifyContent='center'>
        <HStack justifyContent='space-between'>
            <Button variant="solid" flex='2' bg='brand.tan' color='brand.cream' borderRadius='15px'>Add to Cart</Button>
            <Quantity />
        </HStack>        
      </CardFooter>
    </Card>
  );
}
