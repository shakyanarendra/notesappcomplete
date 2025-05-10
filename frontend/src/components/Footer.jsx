import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-16 text-white">
      <div className="flex h-full w-full flex-col gap-10 px-20 lg:flex-row lg:justify-between">
        <div className="lg:w-[450px]">
          <h2 className="relative mb-3 text-2xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-blue-500">
            About Us
          </h2>
          <p className="text-gray-200">
            Our Notes App offers a user-friendly platform for organizing your
            thoughts. You can upload, read, and download notes seamlessly. With
            features like easy categorization and cloud synchronization, access
            your notes anytime, anywhere. Perfect for personal or professional
            use, it enhances your productivity and keeps your ideas organized.
          </p>
        </div>
        <div className="">
          <h2 className="relative mb-3 text-2xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-blue-500">
            Quick Links
          </h2>
          <ul className="text-gray-200">
            <li className="mb-1 hover:text-blue-500">
              <Link to="/about">About</Link>
            </li>
            <li className="mb-1 hover:text-blue-500">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="relative mb-3 text-2xl font-black before:absolute before:top-[30px] before:h-[3px] before:w-[50px] before:bg-blue-500">
            Contact Info
          </h2>
          <ul className="text-gray-200">
            <li className="mb-1">
              <Link to="/">+91 9302059538</Link>
            </li>
            <li className="mb-1">
              <Link to="/">narendrashakyajnv16@gmail.com</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
