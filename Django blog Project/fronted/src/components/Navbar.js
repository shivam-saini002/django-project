import React, { useState } from "react";
import { Link } from "react-router-dom";
import {ImUser, ImHome, ImPhone, ImFileText } from "react-icons/im";

//document ready

//navbar component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

//make all link which is visible in font of navbar

  return (
    <nav className="bg-fuchsia-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <strong className="text-white font-mono text-lg">TECHBLOG</strong>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <ImHome className="text-white" />{" "}
              <Link
                to="/"
                className="px-4 py-4 rounded-md text-md font-medium text-white hover:text-gray-700"
              >
                Home
              </Link>
              <ImFileText className="text-white" />{" "}
              <Link
                to="/MyBlog"
                className="px-4 py-4 rounded-md text-md font-medium text-white hover:text-gray-700"
              >
                MyBlog
              </Link>
              <ImUser className="text-white" />{" "}
              <Link
                to="/About"
                className="px-4 py-4 rounded-md text-md font-medium text-white hover:text-gray-700"
              >
                About
              </Link>
              <ImPhone className="text-white" />{" "}

              <Link
                to="/Contact"
                className="px-4 py-4 rounded-md text-md font-medium text-white hover:text-gray-700"
              >
                Contact
              </Link>


           
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* mobile menu icon (responsivness) */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-600`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-mono text-white hover:text-gray-300"
          >
            Home
          </Link>

          <Link
            to="/MyBlog"
            className="block px-3 py-2 rounded-md text-base font-mono text-white hover:text-gray-300"
          >
            MyBlog
          </Link>

          <Link
            to="/About"
            className="block px-3 py-2 rounded-md text-base font-mono text-white hover:text-gray-300"
          >
            About
          </Link>

          <Link
            to="/Contact"
            className="block px-3 py-2 rounded-md text-base font-mono text-white hover:text-gray-300"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
