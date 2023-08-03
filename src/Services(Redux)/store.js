import { configureStore } from '@reduxjs/toolkit';
import FirestoreStoreItemSlice from './FirestoreStoreItem';
import FirestoreGetItemsSlice from './FirestoreGetItems';

export const store = configureStore({
    reducer: {
        db: FirestoreStoreItemSlice,
        items: FirestoreGetItemsSlice,
        item: FirestoreGetItemsSlice
    }
})