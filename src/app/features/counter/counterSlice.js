import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    maxNum: 20,
    minNum: -20,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // actions ==> functions ()
        increment: (state) => {
            state.value += 1;
        },
        incrementWithPayload: (state, action) => {
            state.value += action.payload;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

// Action creators are generated for each case reducer function
export default counterSlice.reducer;

export const { decrement, increment, reset, incrementWithPayload } =
    counterSlice.actions;
