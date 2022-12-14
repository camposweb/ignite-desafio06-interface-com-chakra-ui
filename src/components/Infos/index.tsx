import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";

export default function Infos(){
    return (
        <Flex
            align="center"
            justify="space-between"
        >
            <Flex
                direction="column"
                justify="center"
                align={["flex-start", "flex-start", "center"]}
            >
                <Heading
                    fontSize={["xl", "2xl"]}
                    color="yellow.400"
                    fontWeight="500"
                >
                    50
                </Heading>
                <Text>países</Text>
            </Flex>
            <Flex
                direction="column"
                justify="center"
                align={["flex-start", "flex-start", "center"]}
            >
                <Heading
                    fontSize={["xl", "2xl"]}
                    color="yellow.400"
                    fontWeight="500"
                >
                    60
                </Heading>
                <Text>línguas</Text>
            </Flex>
            <Flex
                direction="column"
                justify="center"
                align={["flex-start", "flex-start", "center"]}
            >
                <Heading
                    fontSize={["xl", "2xl"]}
                    color="yellow.400"
                    fontWeight="500"
                >
                    50
                </Heading>
                <Text>
                    cidades +100
                    <Popover>
                        <PopoverTrigger>
                            <span>
                                <Icon
                                    cursor="pointer"
                                    as={InfoOutlineIcon}
                                    ml="1"
                                    color="gray.400"
                                    w={["10px", "16px"]}
                                    h={["10px", "16px"]}
                                />
                            </span>
                        </PopoverTrigger>
                        <PopoverContent 
                            bg="gray.700"
                            color="yellow.400"
                        >
                            <PopoverArrow bg="gray.700" />
                            <PopoverCloseButton />
                            <PopoverBody
                                fontWeight="400"
                                fontSize="1rem"
                            >
                                Paris, Europa
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Text>
            </Flex>
        </Flex>
    )
}