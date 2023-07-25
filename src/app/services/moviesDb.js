import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesDb = createApi({
    reducerPath: "moviesDb",
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org/3",
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmExNTcxY2Q5YTExOTljYWRmMmRhNjBlNjY3YTQ4YyIsInN1YiI6IjYxZDMwMGViOTQ0YTU3MDA0NWIzZTI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KyCvfWlyqvgHrXew7iJjGK498cqEUYNt1l7J8Trbe9M`,
        },
    }),
    endpoints: (builder) => ({
        // ==================
        // Popular Movies
        // ==================
        getPopularMovies: builder.query({
            query: () => `/movie/popular`,
        }),
        getMovieDetails: builder.query({
            query: ({ id }) => `/movie/${id}`,
        }),
    }),
});

export const {
    useGetPopularMoviesQuery,
    useGetMovieDetailsQuery
} = moviesDb;
