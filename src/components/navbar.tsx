import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hidden, setHidden] = useState(true);

  const handleToggle = () => {
    setHidden(!hidden);
  };

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div
        className="
      container
      px-6
      py-3
      mx-auto
      md:flex md:justify-between md:items-center
      backdrop-blur-lg
    "
      >
        <div className="flex items-center justify-between">
          <div>
            <Link
              className="
                bg-clip-text text-transparent
                 bg-gradient-to-r 
                 from-blue-500 
                 to-purple-500
            text-xl
            font-bold
            dark:text-white
            md:text-2xl
            hover:to-purple-400
            hover:from-blue-400
          "
              to="/"
            >
              Casity
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="
            text-gray-500
            dark:text-gray-200
            hover:text-gray-600
            dark:hover:text-gray-400
            focus:outline-none focus:text-gray-600
            dark:focus:text-gray-400
          "
              aria-label="toggle menu"
              onClick={() => handleToggle()}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`items-center md:flex ${hidden ? "hidden" : ""}`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              className="
            my-2
            text-gray-700
            dark:text-gray-200
            hover:text-indigo-500
            dark:hover:text-indigo-400
            md:mx-4 md:my-0
          "
              to="/"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
