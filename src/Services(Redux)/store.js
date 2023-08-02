import { configureStore } from '@reduxjs/toolkit';
import FirestoreStoreItemSlice from './FirestoreStoreItem';
import FirestoreGetItemsSlice from './FirestoreGetItems';
import { FirestoreItemUpdateSlice } from './FirestoreItemUpdate';

export const store = configureStore({
    reducer: {
        db: FirestoreStoreItemSlice,
        items: FirestoreGetItemsSlice,
        update: FirestoreItemUpdateSlice
    }
})