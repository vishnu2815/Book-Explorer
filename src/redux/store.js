import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import favoriteReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    favorites: favoriteReducer,
  },
});

export default store;
