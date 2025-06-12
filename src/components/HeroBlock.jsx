import React from "react";
import bookpic from "../assets/pictures/book-cover.jpg";
import { Link } from "react-router-dom";

const HeroBlock = () => {
  return (
    <div className="xs:w-[70%] sm:w-[50%] sm:h-[90%] lg:h-[80%] rounded-xl p-2 flex flex-col justify-center backdrop-blur-md shadow-md">
      <img src={bookpic} className="rounded-xl w-full mb-4" alt="books-img" />
      <span className="px-6 py-4 mt-2 bg-btn-accent text-btn-txt rounded-md">
        <Link
          to="/dashboard"
          className="no-line text-white hover:text-gray-300"
        >
          Get Started
        </Link>
      </span>
    </div>
  );
};

export default HeroBlock;
