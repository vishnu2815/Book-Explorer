import { useSelector } from "react-redux";
import BookCard from "../Components/BookCard";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites || []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Your Favorite Books
      </h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">
          No favorite books added yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {favorites.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
