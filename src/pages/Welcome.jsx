import React from "react";
import HeroBlock from "../components/HeroBlock";

const Welcome = () => {
  return (
    <div className="h-screen w-full text-2xl text-green-mild text-mint-500 bg-zinc-900">
      <div className="xl:text-[180px] lg:text-9xl sm:text-7xl xs:text-[25px] flex justify-center h-full  sm:items-center sm:text-center relative">
        BOOKS MANAGEMENT
      </div>
      <div className="flex justify-center h-full items-center text-center absolute top-0 left-0 w-full">
        <HeroBlock />
      </div>
    </div>
  );
};

export default Welcome;
