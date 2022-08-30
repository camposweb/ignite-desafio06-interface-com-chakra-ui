import { Box, Flex, Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Slider from "../components/Slider";
import Travel from "../components/Travel";

export default function Home(){
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Travel />
      
      <Box
            w={["60px", "90px"]}
            mx="auto"
            h="2px"
            bg="gray.700"
            my={["9", "20"]}
        />

      <Heading
        textAlign="center"
        fontWeight="500"
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos Nessa?
      </Heading>
      <Heading
        textAlign="center"
        fontWeight="500"  
        fontSize={["lg", "3xl", "4xl"]}
        mb={["5", "14"]}
      >
        Então escolha seu continente
      </Heading>
      <Slider />
    </Flex>
  )
}