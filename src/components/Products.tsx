import { Wrap, WrapItem} from "@chakra-ui/react";
import ProductItem from "./ProductItem";
import { ProductsProps } from "../interfaces";

export default function Products({products}: ProductsProps) {
  return (
    <Wrap spacing="25px" pb='8'>
      {products.map((product) => {
        return (
          <WrapItem>
            <ProductItem product={product} />
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
