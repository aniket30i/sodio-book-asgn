import React, { useContext } from "react";
import BookContext from "../context/context";

const genres = [
  "Fiction",
  "Fantasy",
  "Science Fiction",
  "Historical",
  "Dystopian",
  "Classic",
  "Romance",
  "Adventure",
  "Mystery",
  "Biography",
  "Self-Help",
  "Horror",
];
const ToolBar = () => {
  const { genre, setGenre, status, setStatus, search, setSearch } =
    useContext(BookContext);

  return (
    <div className="border-2 border-white/10 h-12 mb-2 w-[95%] text-slate-200 flex justify-between items-center xs:px-2 px-4">
      <div className="lg:flex-2">
        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-200 text-slate-900 xs:w-16 sm:w-30 lg:w-84 rounded-md xs:px-0 px-2 py-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center gap-2 xs:mx-1 md:mx-3">
        <p className="hidden sm:block">Status : </p>
        <select
          className="filters"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="issued">Issued</option>
          <option value="available">Available</option>
        </select>
      </div>
      <div className="flex justify-center items-center gap-2 xs:mx-1 md:mx-3">
        <p className="hidden sm:block">Genre : </p>
        <select
          className="filters"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">All</option>
          {genres.map((genre) => (
            <option value={genre} key={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ToolBar;
