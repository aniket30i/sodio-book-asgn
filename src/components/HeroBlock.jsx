import React from "react";
import bookpic from "../assets/pictures/book-cover.jpg";
import { Link } from "react-router-dom";

const HeroBlock = () => {
  return (
    <div className="w-[50%] h-[80%] rounded-xl p-2 flex flex-col justify-center border border-white/10 backdrop-blur-md shadow-md">
      <img src={bookpic} className="rounded-xl w-full mb-4" alt="books-img" />
      <Link
        to="/dashboard"
        className="px-6 py-4 mt-2 bg-btn-accent text-btn-txt rounded-md"
      >
        Get Started
      </Link>
    </div>
  );
};

export default HeroBlock;
