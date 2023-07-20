import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages";
import About from "./pages/About";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import { Button, Flex, ListItem, UnorderedList, useColorMode } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

const App = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <UnorderedList>
                <ListItem mx={3} as={Link} to={"/"}>
                    Home
                </ListItem>
                {/* <ListItem mx={3} as={Link} to={"/movies"}>Movies</ListItem> */}
                {/* <ListItem mx={3} as={Link} to={"/about"}>About</ListItem> */}
                <Button
                    aria-label="Toggle Color Mode"
                    onClick={toggleColorMode}
                    _focus={{ boxShadow: "none" }}
                    w="fit-content"
                >
                    {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
                </Button>
            </UnorderedList>
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

export default App;
