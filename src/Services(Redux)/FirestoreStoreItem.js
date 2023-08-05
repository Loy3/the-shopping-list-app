import { createSlice } from '@reduxjs/toolkit'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Config/Firebase";

export const FirestoreStoreItemSlice = createSlice({
    name: "db",
    initialState: {
        itemName: "",
        itemQuantity: "",
        itemCategory: ""
    },
    reducers: {
        addNewItem: (state, action) => {
            try {
                const docRef = addDoc(collection(db, "items"), action.payload);
                console.log(docRef);
                alert("Added Successfully!");
                window.location.reload();
            } catch (error) {
                alert(error)
            }
        }
    }
})

export const { addNewItem } = FirestoreStoreItemSlice.actions;

export default FirestoreStoreItemSlice.reducer;