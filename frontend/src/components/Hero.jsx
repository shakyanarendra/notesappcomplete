import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const Hero = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const el = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Search My Notes",
        "Organize Your Thoughts",
        "Access Notes Easily",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(el.current, options);

    // Clean up on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative flex h-full items-center justify-center bg-mainBgImage bg-cover bg-center shadow-xl">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-[10] w-full max-w-[860px] text-center text-white">
        <h1 className="text-4xl font-black md:text-5xl">
          <span ref={el} />
        </h1>
        <p className="mt-5 text-sm font-light md:text-lg md:font-normal">
          Welcome to Search My Notes, the ultimate app for effortlessly
          organizing and accessing your thoughts and reminders. Enjoy intuitive
          search functionality that enhances productivity and keeps information
          at your fingertips.
        </p>
        <div className="mt-5">
          <div className="flex items-center justify-center gap-5">
            {isAuthenticated ? (
              <Link
                to="/search"
                className="mr-10 rounded-xl bg-white px-6 py-3 text-lg font-bold text-blue-500 hover:bg-gray-100"
              >
                Get Started
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <button className="rounded-xl bg-white px-7 py-4 font-black text-blue-500">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="rounded-xl bg-white px-7 py-4 font-black text-blue-500">
                    Signup
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
