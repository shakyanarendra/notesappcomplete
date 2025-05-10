import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaHamburger } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { removeUserData } from "../Redux/slices/user-slices.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.userData);

  const handleLogout = () => {
    if (window.confirm("Do you really want to logout?")) {
      dispatch(removeUserData());
      navigate("/");
    }
  };

  // const handleLogout = () => {
  //   if (window.confirm("Do you really want to logout?")) {
  //     localStorage.removeItem("token"); // Remove the token
  //     localStorage.removeItem("userData"); // Remove user data
  //     dispatch(removeUserData()); // Clear Redux store
  //     navigate("/login");
  //   }
  // };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the dropdown menu
  };

  return (
    <header className="flex h-full items-center justify-center shadow-md md:h-[80px]">
      <div className="mx-5 flex w-full max-w-[1550px] items-center justify-between">
        <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full">
          {isAuthenticated ? (
            <>
              <Link to="/profile">
                <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full bg-white text-3xl font-bold text-black">
                  {user.firstName.charAt(0)}
                </div>
              </Link>
            </>
          ) : (
            <>
              <img
                src="/userimage.png"
                alt="Logo"
                className="h-full w-full rounded-full object-cover"
              />
            </>
          )}
        </div>

        {/* Hamburger Button for mobile view */}
        <div className="md:hidden">
          {!isOpen && ( // Hide the icon when the menu is open
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <FaHamburger />
            </button>
          )}
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center space-x-4 text-lg font-semibold text-white md:flex">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* Conditional Rendering for Authenticated Users */}
          {isAuthenticated ? (
            <>
              <Link to="/search">
                <FaSearch className="text-xl" />
              </Link>
              <Link to="/upload">
                <MdOutlineFileUpload className="text-2xl" />
              </Link>
              <Link to="/profile">
                <button className="text-white-500 rounded-xl bg-white px-5 py-2 font-semibold text-blue-500 hover:bg-blue-400 hover:text-white">
                  Profile
                </button>
              </Link>
              <button
                className="rounded-xl bg-white px-5 py-2 font-semibold text-blue-500 hover:bg-blue-400 hover:text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="rounded-xl bg-white px-5 py-2 font-semibold text-blue-500 hover:bg-blue-400 hover:text-white">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-xl bg-white px-5 py-2 font-semibold text-blue-500 hover:bg-blue-400 hover:text-white">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="absolute right-0 top-0 z-50 h-auto w-auto rounded-xl bg-zinc-600 p-4 text-right transition-all duration-300 ease-in-out">
          <button
            onClick={toggleMenu}
            className="mb-4 text-white focus:outline-none"
          >
            <TfiClose />
          </button>
          <Link to="/" className="block px-4 py-2 text-white hover:bg-blue-700">
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-white hover:bg-blue-700"
          >
            About
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                to="/search"
                className="block px-4 py-2 text-white hover:bg-blue-700"
              >
                Search
              </Link>
              <Link
                to="/upload"
                className="block px-4 py-2 text-white hover:bg-blue-700"
              >
                Upload
              </Link>
              <Link
                to="/profile"
                className="block px-4 py-2 text-white hover:bg-blue-700"
              >
                Profile
              </Link>
              <button
                className="block w-full px-4 py-2 text-left text-white hover:bg-blue-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-4 py-2 text-white hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 text-white hover:bg-blue-700"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
