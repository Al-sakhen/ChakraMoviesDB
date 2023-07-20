import { Box, Button, Container, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import SkeletonMovieCard from "../components/SkeletonMovieCard";

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

    return (
        <>
            <Container maxW="container.sm" py={10}>
                <Flex justifyContent={"center"} py={5} direction={"column"} gap={15}>
                    <Button onClick={goBack} colorScheme="whatsapp">
                        go back
                    </Button>
                    <SkeletonMovieCard />
                </Flex>
            </Container>
        </>
    );
};

export default MovieDetails;
