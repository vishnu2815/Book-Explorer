// src/pages/Search.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/bookSlice";
import BookCard from "../Components/BookCard";

const Search = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title && !author && !genre) {
      alert("Please enter at least one field.");
      return;
    }

    const queryParts = [];
    if (title) queryParts.push(`intitle:${title}`);
    if (author) queryParts.push(`inauthor:${author}`);
    if (genre) queryParts.push(`${genre}`);
    const searchQuery = queryParts.join("+");

    dispatch(fetchBooks(searchQuery));
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search Books</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Genre / Keyword"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="p-2 border rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.length > 0
          ? books.map((book) => <BookCard key={book.id} book={book} />)
          : !loading && <p>No books found. Try a new search.</p>}
      </div>
    </div>
  );
};

export default Search;
