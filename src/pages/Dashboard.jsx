import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      This is dashboard
      <Link to="/" className="border-2">
        close
      </Link>
    </div>
  );
};

export default Dashboard;
