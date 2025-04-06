import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoriteSlice";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites || []);

  const isFavorite = favorites?.some((fav) => fav.id === book.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(book));
  };

  const { title, authors, imageLinks } = book.volumeInfo;

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition bg-white">
      <img
        src={imageLinks?.thumbnail}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="font-bold text-lg mt-2">{title}</h2>
      <p className="text-gray-600 text-sm">{authors?.join(", ")}</p>
      <div className="flex justify-between items-center mt-2">
        <Link
          to={`/book/${book.id}`}
          className="text-blue-500 hover:underline text-sm"
        >
          View Details
        </Link>
        <button
          className={`px-2 py-1 text-sm rounded ${
            isFavorite ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
          onClick={handleToggleFavorite}
        >
          {isFavorite ? "Remove" : "Favorite"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
