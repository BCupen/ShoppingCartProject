import { HStack, Heading, Spacer } from "@chakra-ui/react";
import { PawIcon } from "../assets/Icons";
import NavBar from "./NavBar";
import { NavBarProps } from "../interfaces";

export default function Header({onOpen}: NavBarProps) {
  return (
    <HStack
      bgColor="brand.charcoal"
      w="full"
      h='15vh'
      justifyContent="space-between"
      px="4"
      py="2"
      boxShadow='md'
    >
      <HStack>
        <PawIcon />
        <Heading color="brand.cream" fontSize="64px">
          Pet
          <Heading as="span" color="brand.gold" fontSize="64px">
            Stop
          </Heading>
        </Heading>
      </HStack>
      <Spacer />
      <NavBar onOpen={onOpen}/>
    </HStack>
  );
}
