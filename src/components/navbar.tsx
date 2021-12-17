import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hidden, setHidden] = useState(true);

  const handleToggle = () => {
    setHidden(!hidden);
  };

  return (
    <nav className="bg-white shadow ">
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
                 bg-gradient-to-br 
                 from-green-500 
                 to-red-500
            text-xl
            font-bold
            md:text-2xl
            hover:from-green-400
            hover:to-red-400
          "
              to="/"
            >
              Higher or Lower
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="
            text-gray-500
            hover:text-gray-600
            focus:outline-none focus:text-gray-600
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
            hover:text-indigo-500
            md:mx-4 md:my-0
          "
              to="/about"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
