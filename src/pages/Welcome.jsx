import React from "react";
import { Link } from "react-router-dom";
import HeroBlock from "../components/HeroBlock";

const Welcome = () => {
  return (
    <div className="h-screen w-full text-2xl text-primary text-mint-500 bg-zinc-900">
      <div className="text-[180px] flex justify-center h-full items-center text-center relative">
        BOOKS MANAGEMENT
      </div>
      <div className="flex justify-center h-full items-center text-center absolute top-0 left-0 w-full">
        <HeroBlock />
      </div>
    </div>
  );
};

export default Welcome;
