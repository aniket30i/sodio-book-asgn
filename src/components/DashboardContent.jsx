import React from "react";
import DashTable from "./DashTable";
import Pagination from "./Pagination";
import ToolBar from "./ToolBar";

const DashboardContent = () => {
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <ToolBar />
      <DashTable />
      <Pagination />
    </div>
  );
};

export default DashboardContent;
