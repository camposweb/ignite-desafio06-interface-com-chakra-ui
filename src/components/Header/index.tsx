import { Box, Button, Flex, Grid, Icon, Image, Spacer, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header(){

    const { asPath } = useRouter();

    const notHomePage = asPath !== "/";

    return (
        <Flex
            w="100%"
            as="header"
            mx="auto"
            px="1rem"
            h={["50px", "100px"]}
            align="center"
            justify="center"
        >
            <Grid
                h="100%"
                mx="auto"
                w="100%"
                maxW="1168px"
                alignItems="center"
                templateColumns="repeat(3, 1fr)"
                justifyContent="center"
            >
                { notHomePage && (
                    <Link href="/">
                        <a>
                            <Icon 
                                as={ChevronLeftIcon}
                                fontSize={[20, 40]}
                                justifySelf="start"
                            />
                        </a>
                    </Link>
                ) }

                <Image
                    w={["81px", "184px"]}
                    src="/logo.svg"
                    alt="Logo"
                    justifySelf="center"
                    gridColumn="2"
                />
            </Grid>
        </Flex>
    )
}