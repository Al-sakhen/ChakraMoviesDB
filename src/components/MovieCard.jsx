/* eslint-disable react/prop-types */
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Image,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const MotionBox = motion(Box);
    const [isHovered, setIsHovered] = useState(false);
    const { colorMode } = useColorMode();
    return (
        <Card
            position={"relative"}
            bg={"none"}
            // border={"1px solid #a8b5c8"}
            rounded={"lg"}
            overflow={"hidden"}
            transition={"all .3s ease-in-out"}
            maxH={"400px"}
            _hover={{
                boxShadow:
                    colorMode === "light"
                        ? "0 0 1rem 0 rgba(0, 0, 0, .2)"
                        : "0 0 1rem 0 rgba(255, 255, 255, .2)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardBody px={0} py={0} h={"250px"}>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="Green double couch with wooden legs"
                    width={"100%"}
                    height={"100%"}
                    objectFit={"cover"}
                />
            </CardBody>
            <CardFooter as={Flex} p={1} direction={"column"} gap={2}>
                <Text
                    variant="solid"
                    textAlign={"center"}
                    fontWeight={"bold"}
                    colorScheme="blue"
                >
                    {movie.title.length > 20
                        ? movie.title.slice(0, 20) + "..."
                        : movie.title}
                </Text>
                <Flex justifyContent={"space-between"} px={"3"}>
                    <Text variant="solid" colorScheme="blue">
                        ⭐{movie.vote_average} / 10
                    </Text>
                    {movie.adult === true ? (
                        <Text
                            variant="solid"
                            bg={"red"}
                            p={1}
                            rounded={"lg"}
                            colorScheme="blue"
                            fontWeight={"bold"}
                        >
                            +18
                        </Text>
                    ) : null}
                </Flex>
            </CardFooter>
            <MotionBox
                variants={{
                    visible: { translateY: 0 },
                    hidden: { translateY: "100%"},
                }}
                opacity={isHovered ? 1 : 0}
                initial={isHovered ? "hidden" : "visible"}
                animate={isHovered ? "visible" : "hidden"}
                transition="ease-in-out 0.3s"
                bg={"blackAlpha.700"}
                position={"absolute"}
                w={"100%"}
                h={"100%"}
            >
                <Flex
                    direction={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    height={"100%"}
                    px={5}
                    gap={5}
                >
                    <Text textAlign={"center"} color={"whiteAlpha.900"}>
                        {movie.overview.length > 200
                            ? movie.overview.slice(0, 200) + "..."
                            : movie.overview}
                    </Text>
                    <Button colorScheme="green" as={Link} to={`/movies/${movie.id}`}>
                        <Text>Details</Text>
                    </Button>
                </Flex>
            </MotionBox>
        </Card>
    );
};

export default MovieCard;
