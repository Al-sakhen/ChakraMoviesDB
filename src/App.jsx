import {
    Box,
    Button,
    Divider,
    Flex,
    Image,
    Link,
    SimpleGrid,
    SkeletonCircle,
    SkeletonText,
    Text,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";

function App() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue("red.200", "red.500");
    const color = useColorModeValue("black", "white");

    return (
        <>
            <Box p={2}>
                <Button onClick={toggleColorMode} colorScheme="facebook">
                    Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
            </Box>
            <Box
                padding={10}
                bgGradient="radial(gray.300, yellow.400, pink.200)"
            >
                <Text
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    // fontSize="4xl"
                    textAlign={["center"]}
                    fontWeight="extrabold"
                >
                    Welcome to Chakra UI
                </Text>
            </Box>
            <Divider py={2} bg={"blackAlpha.900"} />

            <Flex
                padding={10}
                background={"facebook.400"}
                align={"center"}
                justify={"center"}
                color={"white"}
                borderRadius={"md"}
                position={"relative"}
            >
                <Box
                    padding={5}
                    bg={"whatsapp.200"}
                    borderRadius="full"
                    position="absolute"
                    top={2}
                    right={2}
                />
                Flex Center
            </Flex>

            <Divider py={2} bg={"blackAlpha.900"} />
            <SimpleGrid
                columns={{ md: 3, lg: 4, xl: 5 }}
                spacing="8"
                p="10"
                textAlign="center"
                rounded="lg"
                color="gray.400"
            >
                <Box
                    transition={"all 0.2s ease-in-out"}
                    boxShadow="xs"
                    p="6"
                    rounded="md"
                    bg={bg}
                    color={color}
                    position={"relative"}
                    _hover={{
                        boxShadow: "dark-lg",
                        color: "facebook.400",
                        transform: "translateY(-4px)",
                        cursor: "pointer",
                    }}
                    _before={{
                        content: '"🙂"',
                        mr: "5px",
                        position: "absolute",
                        top: "-30px",
                        right: "0",
                        fontSize: "2xl",
                    }}
                >
                    <Text fontSize={{ base: "24px" }}>
                        This is responsive text
                    </Text>
                </Box>
                <Box boxShadow="sm" p="6" rounded="md" bg="white">
                    sm
                </Box>
                <Box boxShadow="base" p="6" rounded="md" bg="white">
                    Base
                </Box>
                <Box boxShadow="md" p="6" rounded="md" bg="white">
                    md
                </Box>
                <Box boxShadow="lg" p="6" rounded="md" bg="white">
                    lg
                </Box>
                <Box boxShadow="xl" p="6" rounded="md" bg="white">
                    xl
                </Box>
                <Box boxShadow="2xl" p="6" rounded="md" bg="white">
                    2xl
                </Box>
                <Box
                    boxShadow="dark-lg"
                    p="6"
                    filter="auto"
                    blur={2}
                    rounded="md"
                    bg="white"
                >
                    Dark lg
                </Box>
                <Box boxShadow="outline" p="6" rounded="md" bg="white">
                    Outline
                </Box>
                <Box boxShadow="inner" p="6" rounded="md" bg="white">
                    Inner
                </Box>
            </SimpleGrid>

            <Divider py={2} bg={"blackAlpha.900"} />
            <>
                <Box
                    height={{
                        base: "100%", // 0-48em
                        md: "50%", // 48em-80em,
                        xl: "25%", // 80em+
                    }}
                    bg="teal.400"
                    width={[
                        "100%", // 0-30em
                        "50%", // 30em-48em
                        "25%", // 48em-62em
                        "15%", // 62em+
                    ]}
                />
                {/* responsive font size */}
                <Box fontSize={["sm", "md", "lg", "xl"]}>Font Size</Box>
                {/* responsive margin */}
                <Box mt={[2, 4, 6, 8]} width="full" height="24px" bg="tomato" />
                {/* responsive padding */}
                <Box bg="papayawhip" color={"blackAlpha.400"} p={[2, 4, 6, 8]}>
                    Padding
                </Box>

                <Box p={4} display={{ md: "flex" }}>
                    <Box flexShrink={0}>
                        <Image
                            borderRadius="lg"
                            width={{ md: 40 }}
                            src="https://bit.ly/2jYM25F"
                            alt="Woman paying for a purchase"
                        />
                    </Box>
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                        <Text
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="sm"
                            letterSpacing="wide"
                            color="teal.600"
                        >
                            Marketing
                        </Text>
                        <Link
                            mt={1}
                            display="block"
                            fontSize="lg"
                            lineHeight="normal"
                            fontWeight="semibold"
                            href="#"
                        >
                            Finding customers for your new business
                        </Link>
                        <Text mt={2} color="gray.500">
                            Getting a new business off the ground is a lot of
                            hard work. Here are five ideas you can use to find
                            your first customers.
                        </Text>
                    </Box>
                </Box>

                <Box padding="6" boxShadow="lg" border={"1px"} >
                    <SkeletonCircle size="10" />
                    <SkeletonText
                        mt="4"
                        noOfLines={4}
                        spacing="4"
                        skeletonHeight="2"
                    />
                </Box>
            </>
        </>
    );
}

export default App;
