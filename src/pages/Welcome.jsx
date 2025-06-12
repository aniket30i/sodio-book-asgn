import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="h-screen w-full bg-zinc-800">
      This is the welcome page
      <Link to="/dashboard" className="border-2">
        Dashboard
      </Link>
    </div>
  );
};

export default Welcome;
