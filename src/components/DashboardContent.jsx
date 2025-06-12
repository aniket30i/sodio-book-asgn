import React, { useContext } from "react";
import DashTable from "./DashTable";
import ToolBar from "./ToolBar";
import BookContext from "../context/context";
import Navbar from "../ui/Navbar";
import CardsGlance from "../components/CardsGlance";

const DashboardContent = () => {
  const { visible } = useContext(BookContext);
  console.log("visible : ", visible);
  return (
    <div className="h-full w-full flex justify-center items-center flex-col">
      <Navbar />
      <CardsGlance />
      <ToolBar />
      <DashTable />
    </div>
  );
};

export default DashboardContent;
