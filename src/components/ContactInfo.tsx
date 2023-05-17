import { HStack, Text, Icon } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ContactInfoProps {
    icon: any;
    children: ReactNode;
}

export default function ContactInfo({icon, children}: ContactInfoProps){
    return (
        <HStack>
            <Icon as={icon} color={'brand.tan'} w='40px' h='40px'/>
            <Text color='brand.gold' fontFamily='Righteous' fontSize='3xl'>{children}</Text>
        </HStack>
    )
}