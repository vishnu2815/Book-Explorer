import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (query) => {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
    );
    return res.data.items || [];
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default bookSlice.reducer;
