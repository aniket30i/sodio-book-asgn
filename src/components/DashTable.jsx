import React, { useContext } from "react";
import del from "../assets/icon/trash.png";
import edit from "../assets/icon/edit.png";
import { useBookData } from "../hooks/useBookData";
import BookContext from "../context/context";

const DashTable = () => {
  const { data: books = [] } = useBookData();
  const { page } = useContext(BookContext);

  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;

  const visibleData = books.slice(startIndex, endIndex);

  return (
    <div className="w-[95%] h-[480px]">
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
                  <img src={edit} alt="edit" className="ico invert" />
                  <img src={del} alt="delete" className="ico" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashTable;
