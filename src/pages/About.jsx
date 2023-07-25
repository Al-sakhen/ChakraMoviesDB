import { useGetPopularMoviesQuery } from "../app/services/moviesDb";

const About = () => {
    const { data ,isError , isLoading , error } = useGetPopularMoviesQuery();

    if (isError) {
        console.log("is error", isError);
        console.log("error", error);
    }

    if (isLoading) {
        console.log("loadinng ......");
    } else {
        console.log(data);
    }
    return <div>About</div>;
};

export default About;
