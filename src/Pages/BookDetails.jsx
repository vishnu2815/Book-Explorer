
import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams(); // Get book ID from URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error("Failed to fetch book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (!book) return <div className="p-4 text-center text-red-500">Book not found.</div>;

  const {
    title,
    authors,
    description,
    imageLinks,
    publisher,
    publishedDate,
    pageCount,
    categories,
  } = book.volumeInfo;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={imageLinks?.thumbnail || "https://via.placeholder.com/150"}
          alt={title}
          className="w-48 h-auto object-contain shadow-md"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-gray-700 mb-1"><strong>Author(s):</strong> {authors?.join(", ") || "N/A"}</p>
          <p className="text-gray-700 mb-1"><strong>Publisher:</strong> {publisher || "N/A"}</p>
          <p className="text-gray-700 mb-1"><strong>Published:</strong> {publishedDate || "N/A"}</p>
          <p className="text-gray-700 mb-1"><strong>Pages:</strong> {pageCount || "N/A"}</p>
          <p className="text-gray-700 mb-3"><strong>Categories:</strong> {categories?.join(", ") || "N/A"}</p>
          <p className="text-sm text-gray-600 whitespace-pre-line">{description || "No description available."}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
