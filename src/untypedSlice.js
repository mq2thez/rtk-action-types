import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hello: "world"
};

const slice = createSlice({
    name: "typed-slice",
    initialState,
    reducers: {
        testAnyAction(state, action) {
            state.hello = action.payload.value;
        },
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