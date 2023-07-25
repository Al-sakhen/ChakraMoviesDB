import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <BrowserRouter>
                <ChakraProvider>
                    <ColorModeScript initialColorMode="dark" />
                    <App />
                </ChakraProvider>
            </BrowserRouter>
        </Provider>
    </QueryClientProvider>
);
