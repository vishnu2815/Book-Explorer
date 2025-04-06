import { useSelector } from "react-redux";
import BookCard from "./BookCard";

const BookList = () => {
  const { books, status } = useSelector((state) => state.books);

  if (status === "loading") return <p className="text-center">Loading...</p>;
  if (status === "failed")
    return <p className="text-center">Error fetching books.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
