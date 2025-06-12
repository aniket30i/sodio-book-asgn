import { createContext, useState } from "react";

const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  return (
    <BookContext.Provider
      value={{
        search,
        setSearch,
        genre,
        setGenre,
        status,
        setStatus,
        page,
        setPage,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
