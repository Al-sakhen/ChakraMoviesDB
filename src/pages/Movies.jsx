import {
    Container,
    FormControl,
    Grid,
    Input,
    Text,
} from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { useQuery } from "react-query";
import SkeletonMovieCard from "../components/SkeletonMovieCard";
import { useState } from "react";
const Movies = () => {
    const [search, setSearch] = useState("");

    const getMoviesList = async () => {
        const { data } = await axios.get(
            "https://api.themoviedb.org/3/discover/movie",
            {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmExNTcxY2Q5YTExOTljYWRmMmRhNjBlNjY3YTQ4YyIsInN1YiI6IjYxZDMwMGViOTQ0YTU3MDA0NWIzZTI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KyCvfWlyqvgHrXew7iJjGK498cqEUYNt1l7J8Trbe9M`,
                },
            }
        );
        return data;
    };

    const getSearchMoviesList = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${search}`,
            {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmExNTcxY2Q5YTExOTljYWRmMmRhNjBlNjY3YTQ4YyIsInN1YiI6IjYxZDMwMGViOTQ0YTU3MDA0NWIzZTI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KyCvfWlyqvgHrXew7iJjGK498cqEUYNt1l7J8Trbe9M`,
                },
            }
        );
        return data;
    };

    const { data, isLoading, isFetching, isError, error } = useQuery(
        "movies",
        () => getMoviesList()
    );

    const { data: searchData, isFetching: isSearchFetching } = useQuery(
        ["search", search],
        () => getSearchMoviesList()
    );

    if (isLoading) {
        // return <SkeletonMovieCard /> in loop if 10 items;
        return (
            <>
                <Grid
                    margin={5}
                    templateColumns={"repeat(auto-fill , minmax(200px, 1fr))"}
                    gap={6}
                >
                    {[...Array.from({ length: 20 })].map((_, index) => (
                        <SkeletonMovieCard key={index} />
                    ))}
                </Grid>
            </>
        );
    }
    if (isError) {
        return <div>{error.message}</div>;
    }
    return (
        <>
            <Container maxW='container.xl'>
                <FormControl my={4}>
                    <Input
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for a movie, tv show, person..."
                    />
                </FormControl>
                <Grid
                    margin={5}
                    templateColumns={"repeat(auto-fill , minmax(200px, 1fr))"}
                    gap={6}
                >
                    {searchData && search !== ""
                        ? searchData.results.map((movie) => (
                              <MovieCard key={movie.id} movie={movie} />
                          ))
                        : data.results.map((movie) => (
                              <MovieCard key={movie.id} movie={movie} />
                          ))}
                </Grid>
                {searchData?.results.length === 0 && search !== "" ? (
                    <Text
                        fontSize={{ base: "md", md: "2xl" }}
                        textAlign={"center"}
                        fontWeight={"bold"}
                    >
                        No results found
                    </Text>
                ) : null}
            </Container>
        </>
    );
};

export default Movies;
