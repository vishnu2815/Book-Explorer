import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../redux/bookSlice";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (!title && !author && !genre) {
      alert("Please fill at least one search field.");
      return;
    }
    const queryParts = [];
    if (title) queryParts.push(`intitle:${title}`);
    if (author) queryParts.push(`inauthor:${author}`);
    if (genre) queryParts.push(genre);
    const finalQuery = queryParts.join("+");
    dispatch(fetchBooks(finalQuery));
  };

  return (
    <div className="flex flex-col gap-2 sm:flex-row items-center p-4 w-full max-w-4xl mx-auto">
      <input type="text" placeholder="Title" className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Author" className="input" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <input type="text" placeholder="Genre/Keyword" className="input" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
