import { createContext, useState } from "react";

const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");
  const [visible, setVisible] = useState();

  return (
    <BookContext.Provider
      value={{
        search,
        setSearch,
        genre,
        setGenre,
        status,
        setStatus,
        visible,
        setVisible,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
