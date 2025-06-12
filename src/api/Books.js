// src/api/books.js

const BASE_URL = "http://localhost:3006/books";

export const addBook = async (bookData) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookData),
  });
  if (!res.ok) throw new Error("Failed to add book");
  return res.json();
};

export const editBook = async ({ id, bookData }) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...bookData, id }),
  });
  if (!res.ok) throw new Error("Failed to update book");
  return res.json();
};

export const deleteBook = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete book");
  return res.json();
};
