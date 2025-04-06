
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold">
          📚 Book Explorer
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Search
          </Link>
          <Link to="/favorites" className="hover:underline">
            Favorites
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
