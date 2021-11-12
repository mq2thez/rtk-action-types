import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {Object} InitialState
 * @property {string} hello
 */

/** @type { InitialState } */
const initialState = {
    hello: "world"
};

/**
 * @typedef {Object} Payload
 * @property {string} value
 */

const slice = createSlice({
    name: "typed-slice",
    initialState,
    reducers: {
        testAnyAction(state, action) {
            // Would be great if this was a type error
            state.hello = action.payload.value;
        },
        /**
         * 
         * @param {InitialState} state 
         * @param {import("@reduxjs/toolkit").PayloadAction<Payload>} action 
         */
        testTypedAction(state, action) {
            state.hello = action.payload.value;
        }
    }
});

export const {
    testAnyAction,
    testTypedAction
} = slice.actions;

// runtime error
testAnyAction("oops");
// type-error here
testTypedAction("oops");
// valid
testTypedAction({ value: "hello" });

export default slice.reducer;