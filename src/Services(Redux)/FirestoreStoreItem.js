// import { configureStore, createSlice } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { collection, addDoc } from "firebase/firestore";
// import { collection, addDoc, getDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../Config/Firebase";

// const initialState = 

export const FirestoreStoreItemSlice = createSlice({
    name: "db",
    initialState:{
        itemName: "",
        itemQuantity: "",
        itemCategory: ""
    },
    reducers: {
        addNewItem: (state, action) => {
            try {
                const docRef = addDoc(collection(db, "items"), action.payload);
                console.log(docRef);
                alert("Added Successfully!")
            } catch (error) {
                alert(error)
            }
        }
    }
})

// export const FirestoreItemUpdateSlice = createSlice({
//     name: "update",
//     initialState: {
//         id: "",
//         documentData: []
//     },
//     reducers: {
//         itemUpdate: (state, action) => {
//             // state.id = action.payload;
//             state.documentData = action.payload;
//             console.log("Hello");
//             try {
//                 console.log(action.payload);
                
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//     }
// })

export const { addNewItem } = FirestoreStoreItemSlice.actions;
// export const { itemUpdate } = FirestoreItemUpdateSlice.actions;

export default FirestoreStoreItemSlice.reducer;