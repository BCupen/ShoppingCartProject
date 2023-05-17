import {
  HStack,
  VStack,
  Text,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import animalImg from "../assets/animals.svg";

export default function Home() {
  return (
    <VStack w="100vw" alignItems='stretch'>
      <HStack mx="8rem" mt="20">
        <VStack alignItems="start" w="500px">
          <Text
            color="brand.tan"
            textAlign="left"
            fontWeight="semibold"
            fontSize="20px"
          >
            For all the good boys and girls.
          </Text>
          <Heading fontFamily="fonts.body" fontWeight="extrabold">
            Get all your pets' needs in one place, all for an affordable price!
          </Heading>
          <Button
            variant="solid"
            fontFamily="Righteous"
            fontSize='32px'
            alignSelf="center"
            w="20rem"
            h="3.5rem"
            bgColor="brand.gold"
            border='none'
            borderRadius='30px'
            boxShadow='lg'
            _hover={{
                bgColor: 'brand.tan',
                border: 'brand.tan'
            }}
          >
            Shop Now
          </Button>
        </VStack>
        <Image src={animalImg} alt="Animals" w="635px" h="420px" />
      </HStack>
    </VStack>
  );
}
