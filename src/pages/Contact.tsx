import { Heading, VStack, Image, HStack } from "@chakra-ui/react";
import { IoLocationSharp, IoMail, IoCall } from "react-icons/io5";
import ContactInfo from "../components/ContactInfo";
import animalImg from "../assets/animals.svg";

export default function Contact() {
  return (
    <VStack alignItems="stretch" spacing='40px' w="full">
      <Heading textAlign="left" pl="4" pt="3">
        Contact Us
      </Heading>
      <VStack alignSelf="center" alignItems="start" spacing="20px">
        <ContactInfo icon={IoLocationSharp}>
          #21 Pet Street, Port-Of-Spain
        </ContactInfo>
        <ContactInfo icon={IoCall}>1-(868)-661-8819</ContactInfo>
        <ContactInfo icon={IoMail}>petStop@gmail.com</ContactInfo>
      </VStack>
      <HStack justifyContent='flex-end'>
        <Image
          src={animalImg}
          alt="Animals"
          w="468px"
          h="286px"
        />
      </HStack>
    </VStack>
  );
}
