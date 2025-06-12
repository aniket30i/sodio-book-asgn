import React, { useContext, useEffect } from "react";
import del from "../assets/icon/trash.png";
import edit from "../assets/icon/edit.png";
import { useBookData } from "../hooks/useBookData";
import BookContext from "../context/context";
import { Link } from "react-router-dom";

const DashTable = ({ itemsperPage = 10 }) => {
  const { data: books = [] } = useBookData();
  const { page, search, status, genre, setVisible } = useContext(BookContext);
  const startIndex = (page - 1) * itemsperPage;
  const endIndex = startIndex + itemsperPage;

  const filteredBooks = books?.filter((book) => {
    const matchesSearch =
      book?.title?.toLowerCase().includes(search.toLowerCase()) ||
      book?.author?.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = status
      ? book?.status?.toLowerCase() === status.toLowerCase()
      : true;
    const matchesGenre = genre
      ? book?.genre?.toLowerCase() === genre.toLowerCase()
      : true;

    return matchesSearch && matchesStatus && matchesGenre;
  });

  useEffect(() => {
    const total = Math.ceil(filteredBooks.length / itemsperPage);
    setVisible(total);
  }, [filteredBooks]);

  console.log("status selected : ", status, " genre selected : ", genre);

  const visibleData = filteredBooks.slice(startIndex, endIndex);

  return (
    <div className="w-[95%] h-[520px]">
      <table className="table table-hover table-dark table-striped">
        <thead>
          <tr>
            <th>Serial</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Published</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {visibleData?.map((book, idx) => (
            <tr key={book._id || idx}>
              <td>{startIndex + idx + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.publishedYear}</td>
              <td>{book.status}</td>
              <td>
                <div className="flex gap-2">
                  <Link to={`/book-form/edit/${book.id}`}>
                    <img src={edit} alt="edit" className="ico invert" />
                  </Link>

                  <img src={del} alt="delete" className="ico" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <Link
          to="/book-form/add"
          className="px-3 py-2 bg-white rounded font-semibold text-zinc-800 decoration-none"
        >
          + Add Book
        </Link>
      </div>
    </div>
  );
};

export default DashTable;
