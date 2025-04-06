import SearchBar from "../Components/SearchBar";
import BookList from "../Components/BookList";

const Home = () => (
  <div className="min-h-screen bg-gray-100 p-4">
    <SearchBar />
    <BookList />
  </div>
);

export default Home;