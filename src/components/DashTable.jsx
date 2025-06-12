import React, { useContext, useEffect, useState } from "react";
import del from "../assets/icon/trash.png";
import edit from "../assets/icon/edit.png";
import { useBookData } from "../hooks/useBookData";
import BookContext from "../context/context";
import { Link } from "react-router-dom";
import { useBookMutations } from "../hooks/useBookMutations";
import toast from "react-hot-toast";
import Pagination from "./Pagination";

const DashTable = ({ itemsperPage = 10 }) => {
  const { remove } = useBookMutations();
  const [page, setPage] = useState(1);
  const { data: books = [] } = useBookData();
  const { search, status, genre } = useContext(BookContext);

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

  const totalPages = Math.ceil(filteredBooks.length / itemsperPage);
  const startIndex = (page - 1) * itemsperPage;
  const endIndex = startIndex + itemsperPage;
  const visibleData = filteredBooks.slice(startIndex, endIndex);

  useEffect(() => {
    const calculatedTotalPages = Math.ceil(filteredBooks.length / itemsperPage);

    if (page > calculatedTotalPages && calculatedTotalPages > 0) {
      setPage(calculatedTotalPages);
    }
  }, [filteredBooks, page, itemsperPage]);

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!confirmed) return;

    remove.mutate(id, {
      onError: () => {
        toast.error("Failed to delete the book.");
      },
    });
  };

  return (
    <div className="w-[95%] sm:h-screen lg:h-[520px]">
      {/* Correct placement of table-responsive class on a wrapper div */}
      <div className="table-responsive">
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

                    <img
                      src={del}
                      alt="delete"
                      className="ico"
                      onClick={() => handleDelete(book.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
      {/* End of table-responsive wrapper div */}
      <div className="flex justify-end xs:mt-1 xs:mb-4 sm:mt-4">
        {" "}
        {/* Added mt-4 for spacing */}
        <Link
          to="/book-form/add"
          className="xs:px-2 xs:text-sm sm:px-3 py-2 bg-white rounded font-semibold text-zinc-800 decoration-none no-line"
        >
          + Add Book
        </Link>
      </div>
      {totalPages > 1 && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </div>
  );
};

export default DashTable;
