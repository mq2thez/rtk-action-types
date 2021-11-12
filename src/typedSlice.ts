import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    hello: string;
}

const initialState: InitialState = {
    hello: "world"
};

interface Payload {
    value: string;
}

const slice = createSlice({
    name: "typed-slice",
    initialState,
    reducers: {
        testAnyAction(state, action) {
            // Would be great if this was a type error
            state.hello = action.payload.value;
        },
        testTypedAction(state, action: PayloadAction<Payload>) {
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