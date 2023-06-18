import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showTable: false,
};

const integrationSlice = createSlice({
    name: "integrationSlice",
    initialState,
    reducers: {
        handleAddIntegration: (state, action) => {
            state.showTable = action.payload;
        },
    },
});
export const { handleAddIntegration } = integrationSlice.actions;
export default integrationSlice;
