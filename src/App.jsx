import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

import Layout from "./components/Layout";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Movies />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
