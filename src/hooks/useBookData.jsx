import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchBooks = async () => {
  try {
    const res = await fetch("http://localhost:3006/books");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const useBookData = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });
};
