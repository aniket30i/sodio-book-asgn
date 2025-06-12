import React from "react";
import { Link } from "react-router-dom";
import DashboardContent from "../components/DashboardContent";

const Dashboard = () => {
  return (
    <div className="bg-zinc-900 h-screen w-full">
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
