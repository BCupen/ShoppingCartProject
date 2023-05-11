import { VStack, Heading, HStack, Link, Wrap, WrapItem, Spacer } from "@chakra-ui/react";
import { ShopProps } from "../interfaces";
import { products } from "../assets/productData";
import ProductItem from "../components/ProductItem";
import { Link as RouterLink} from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Shop(){

    return(
        <VStack alignItems='stretch' maxW='100vw' h='85vh' overflowY='scroll'>
            <Heading textAlign='left' pl='21px'>All Products</Heading>
            <HStack maxW='full' alignItems='start' spacing='35px' pb='6'>
                <VStack bgColor='brand.gold' minW='250px'  alignItems='stretch' pb='3'>
                    <Heading as='h3' fontFamily='Roboto' color='brand.charcoal' textAlign='left' pl='4'>Categories</Heading>
                    <VStack alignItems='left' fontFamily='Righteous' fontSize='2xl'pl='16'>
                        <Link as={RouterLink} to='/shop'>All</Link>
                        <Link as={RouterLink} to='/shop/dogs'>Dogs</Link>
                        <Link as={RouterLink} to='/shop/cats'>Cats</Link>
                        <Link as={RouterLink} to='/shop/fish'>Fish</Link>
                    </VStack>                    
                </VStack>
                <Outlet />
            </HStack>
        </VStack>
    )
}