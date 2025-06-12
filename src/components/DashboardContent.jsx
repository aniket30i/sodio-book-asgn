import React, { useContext } from "react";
import DashTable from "./DashTable";
import Pagination from "./Pagination";
import ToolBar from "./ToolBar";
import BookContext from "../context/context";

const DashboardContent = () => {
  const { visible } = useContext(BookContext);
  console.log("visible : ", visible);
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <ToolBar />
      <DashTable />
      {visible <= 10 ? null : <Pagination />}
    </div>
  );
};

export default DashboardContent;
