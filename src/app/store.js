import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import { moviesDb } from './services/moviesDb';

export const store = configureStore({
    reducer: {
        counter: counterSlice,

        moviesDb: moviesDb.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesDb.middleware),
});
