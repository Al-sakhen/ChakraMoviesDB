import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SkeletonMovieCard from "../components/SkeletonMovieCard";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import {
    Box,
    Button,
    Flex,
    Container,
    Stack,
    Text,
    Image,
    VStack,
    Heading,
    StackDivider,
    useColorModeValue,
    Grid,
    GridItem,
    Badge,
    HStack,
    Spinner,
} from "@chakra-ui/react";
import { useGetMovieDetailsQuery } from "../app/services/moviesDb";
import { convertToHoursAndMinutes } from "./../app/helpers/func";

const MovieDetails = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const dividerBorderColor = useColorModeValue("gray.600", "gray.400");

    const { data, isLoading, isFetching } = useGetMovieDetailsQuery({ id });
    useEffect(() => {
        if (data) {
            document.title = data.title;
        } else {
            document.title = "Loading...";
        }
    }, [id, data]);

    if (isLoading)
        return (
            <>
                {isFetching ? (
                    <Spinner
                        position={"fixed"}
                        top={"65px"}
                        right={"30px"}
                        size="md"
                    />
                ) : null}
                <Container maxW="container.sm" py={10}>
                    <Flex
                        justifyContent={"center"}
                        py={5}
                        direction={"column"}
                        gap={15}
                    >
                        {/* <Button onClick={goBack} colorScheme="whatsapp">
                            go back
                        </Button> */}
                        <SkeletonMovieCard />
                    </Flex>
                </Container>
            </>
        );

    return (
        <Container maxW={"7xl"}>
            <Flex
                justifyContent={{ base: "center", md: "start" }}
                pt={5}
            >
                <Button
                    onClick={goBack}
                    colorScheme="whatsapp"
                    size={"sm"}
                >
                    <BiArrowBack />
                </Button>
            </Flex>
            <Grid templateColumns="repeat(6, 1fr)" py={5} gap={9}>
                <GridItem
                    colSpan={{ base: 6, md: 2 }}
                    rounded={"xl"}
                    overflow={"hidden"}
                    height={{ base: "300px", sm: "400px", lg: "500px" }}
                    objectFit={"cover"}
                >
                    <Image
                        alt={"product image"}
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        fit={"cover"}
                        align={"center"}
                        w={"100%"}
                        h={{ base: "100%", sm: "400px", lg: "500px" }}
                    />
                </GridItem>
                <GridItem colSpan={{ base: 6, md: 4 }}>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={"header"}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                                mb={2}
                            >
                                {data.title}
                            </Heading>
                            <HStack wrap={"wrap"} gap={5}>
                                <Text
                                    color={useColorModeValue(
                                        "gray.900",
                                        "gray.400"
                                    )}
                                    fontWeight={300}
                                    fontSize={"2xl"}
                                >
                                    {data.release_date}
                                </Text>
                                <Text
                                    as={Flex}
                                    alignItems={"center"}
                                    gap={"1"}
                                    color={useColorModeValue(
                                        "gray.900",
                                        "gray.400"
                                    )}
                                >
                                    <AiOutlinePlayCircle />
                                    {convertToHoursAndMinutes(data.runtime)}
                                </Text>
                            </HStack>
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={"column"}
                            divider={
                                <StackDivider
                                    borderColor={dividerBorderColor}
                                />
                            }
                        >
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text fontSize={"lg"}>{data.overview}</Text>
                            </VStack>
                            <Box>
                                <Text
                                    fontSize={{ base: "16px", lg: "18px" }}
                                    color={useColorModeValue(
                                        "yellow.500",
                                        "yellow.300"
                                    )}
                                    fontWeight={"500"}
                                    textTransform={"uppercase"}
                                    mb={"4"}
                                >
                                    Categories
                                </Text>

                                <Flex wrap={"wrap"}>
                                    {data.genres.map((genre) => (
                                        <Badge
                                            ariant="subtle"
                                            key={genre.id}
                                            fontSize={"sm"}
                                            mr={6}
                                            mb="2"
                                            colorScheme="whatsapp"
                                        >
                                            {genre.name}
                                        </Badge>
                                    ))}
                                </Flex>
                            </Box>
                        </Stack>
                    </Stack>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default MovieDetails;
