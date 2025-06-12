import React from "react";
import { useBookData } from "../hooks/useBookData";
import Cards from "../ui/Cards";

const CardsGlance = () => {
  const { data: books = [] } = useBookData();

  // Total books
  const totalBooks = books.length;

  // Unique authors
  const uniqueAuthors = new Set(books.map((book) => book.author)).size;

  // Unique genres
  const uniqueGenres = new Set(books.map((book) => book.genre)).size;

  // Available & Issued books
  const availableBooks = books.filter(
    (book) => book?.status?.toLowerCase() === "available"
  ).length;
  return (
    <div className=" gap-4 p-4 hidden md:flex ">
      <Cards title={"Books"} info={totalBooks} />
      <Cards title={"Authors"} info={uniqueAuthors} />
      <Cards title={"Genres"} info={uniqueGenres} />
      <Cards title={"Available"} info={availableBooks} />
    </div>
  );
};

export default CardsGlance;
