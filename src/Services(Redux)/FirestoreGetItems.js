import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, doc, deleteDoc, updateDoc, query, where } from "firebase/firestore";
import { db } from "../Config/Firebase";

const initialState = {
    loading: false,
    error: null,
    items: [],
    item:[]
}

const FirestoreGetItemsSlice = createSlice({
    name: "items",
    name: "item",
    initialState,
    reducers: {
        fetchItemsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchItemsSuccess(state, action) {
            state.loading = false;
            state.items = action.payload
        },
        fetchItemSuccess(state, action) {
            state.loading = false;
            state.item = action.payload
        },
        fetchItemsFailure(state, action) {
            state.loading = null;
            state.error = action.payload;
        },
        deleteItem(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload)
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        updateMyItem(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload)
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        }
    }
})

export const { fetchItemsStart, fetchItemsSuccess, fetchItemSuccess, fetchItemsFailure, deleteItem, updateMyItem } = FirestoreGetItemsSlice.actions;

export const fetchItems = () => async (dispatch) => {
    dispatch(fetchItemsStart())
    try {
        const collectionRef = collection(db, 'items');
        const data = await getDocs(collectionRef);
        const documents = data.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        dispatch(fetchItemsSuccess(documents))
        // console.log(documents);
    } catch (error) {
        dispatch(fetchItemsFailure(error))
    }

}
export const fetchItem = (category) => async (dispatch) => {
    dispatch(fetchItemsStart())
    try {
        const q = query(collection(db, "items"), where("itemCategory", "==", category));
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({ id: doc.id, ...doc.data() });
        });
        dispatch(fetchItemSuccess(docs))
        // console.log(docs);
    } catch (error) {
        dispatch(fetchItemsFailure(error))
    }
}
export const deleteAnItem = (id) => async (dispatch) => {
    try {
        await deleteDoc(doc(db, "items", id));
        alert("Document successfully deleted!");
        window.location.reload();
    } catch (error) {
        dispatch(fetchItemsFailure(error));
    }
}

export const updateAnItem = (id) => async (dispatch) => {
    const item = id;
    const docId = item.id
    const upItem = {
        itemName: item.itemName,
        itemQuantity: item.itemQuantity,
        itemCategory: item.itemCategory
    }
    const storageRef = doc(db, "items", docId);
    try {
        await updateDoc(storageRef, upItem);
        alert("Document successfully updated!");

        window.location.reload();

    } catch (error) {
        dispatch(fetchItemsFailure(error));
    }
}

export default FirestoreGetItemsSlice.reducer;