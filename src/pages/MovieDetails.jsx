import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import SkeletonMovieCard from "../components/SkeletonMovieCard";

import {
    Box,
    Button,
    Flex,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    VStack,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Grid,
    GridItem,
    Badge,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
const MovieDetails = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        document.title = "Movie Details | " + id;
    }, [id]);

    const getMoviesList = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}`,
            {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmExNTcxY2Q5YTExOTljYWRmMmRhNjBlNjY3YTQ4YyIsInN1YiI6IjYxZDMwMGViOTQ0YTU3MDA0NWIzZTI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KyCvfWlyqvgHrXew7iJjGK498cqEUYNt1l7J8Trbe9M`,
                },
            }
        );
        return data;
    };

    const { data, isLoading } = useQuery(["movies", id], () => getMoviesList());
    console.log(data);
    if (isLoading)
        return (
            <>
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
            <Button onClick={goBack} colorScheme="whatsapp">
                go back
            </Button>
            <Grid templateColumns="repeat(6, 1fr)" py={10} gap={9}>
                <GridItem
                    colSpan={{ base: 6, md: 2 }}
                    bg={"red.400"}
                    rounded={"lg"}
                    overflow={"hidden"}
                    height={{ base: "300px", sm: "400px", lg: "500px" }}
                    objectFit={"cover"}
                >
                    <Image
                        rounded={"md"}
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
                            >
                                {data.title}
                            </Heading>
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
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={"column"}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue(
                                        "gray.200",
                                        "gray.600"
                                    )}
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

                                <Flex
                                    wrap={"wrap"}
                                >
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
