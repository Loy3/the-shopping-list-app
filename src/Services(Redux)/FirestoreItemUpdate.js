import { createSlice } from '@reduxjs/toolkit'

export const FirestoreItemUpdateSlice = createSlice({
    name: "update",
    initialState: {
        id: "",
        documentData: []
    },
    reducers: {
        itemUpdate: (state, action) => {
            // state.id = action.payload;
            state.documentData = action.payload;
            console.log("Hello");
            try {
                console.log(action.payload);

            } catch (error) {
                console.log(error)
            }
        }
    }
})

export const { itemUpdate } = FirestoreItemUpdateSlice.actions;
export default FirestoreItemUpdateSlice.reducer;