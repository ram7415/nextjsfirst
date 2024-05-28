// components/Header.js
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/path/to/logo.png" alt="Logo" className="h-10" />
        </div>
        <ul className="flex items-center space-x-4 mr-5">
          <li className="mr-4">
            <Link href="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/blog" className="text-white hover:text-gray-400">
              Blog
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/about" className="text-white hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/contact" className="text-white hover:text-gray-400">
              Contact Us
            </Link>
          </li>
          <li className="mr-4">
            <Link
              href="/signup"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
