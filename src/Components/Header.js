import Link from "next/link";

const Header = () => {
  return (
    <header className="text-gray-600 body-font  ">
      <div>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Kamero</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex items-center">
            <div className="flex border  border-gray-300 rounded-sm overflow-hidden">
              <Link
                href="/"
                className="px-4 py-2 border-r border-gray-300 hover:bg-gray-200"
              >
                Features
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 border-r border-gray-300 hover:bg-gray-200"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 border-r border-gray-300 hover:bg-gray-200"
              >
                Blog
              </Link>
              <Link href="/contact" className="px-4 py-2 hover:bg-gray-200">
                Contact Us
              </Link>
            </div>
          </nav>
          <h3 className="font-bold text-blue-800 mr-4">Schedule a Demo</h3>
          <button className="inline-flex items-center bg-gray-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login / Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
