import React, { useEffect, useState } from "react";

const DashTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3006/books");
      const data = await response.json();
      setData(data);
    };
    getData();
  });
  return <div></div>;
};

export default DashTable;
