import { useState } from "react";
import { VStack, Heading, HStack, Link} from "@chakra-ui/react";
import { ShopProps } from "../interfaces";
import { products } from "../assets/productData";
import ProductItem from "../components/ProductItem";
import { Link as RouterLink, useLocation} from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Shop(){

    const usePathname = () =>{
        const location = useLocation();
        console.log(location.pathname);
        return location.pathname;
    }

    const useHeading = () => {
        const path = usePathname();
        const currPath = path.substring(6);
        if(!currPath)
            return 'All Products'
        else {
            const heading = currPath.charAt(0).toUpperCase() + currPath.slice(1);
            return heading;
        }
    }

    return(
        <VStack alignItems='stretch' w='100vw' h='85vh' overflowY='scroll'>
            <Heading textAlign='left' pl='21px'>{useHeading()}</Heading>
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