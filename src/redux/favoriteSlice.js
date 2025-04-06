import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);
      if (index >= 0) {
        state.splice(index, 1); // Remove from favorites
      } else {
        state.push(action.payload); // Add to favorites
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
