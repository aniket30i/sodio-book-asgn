// src/hooks/useBookMutations.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBook, editBook, deleteBook } from "../api/books";

export const useBookMutations = () => {
  const queryClient = useQueryClient();

  const add = useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
  });

  const edit = useMutation({
    mutationFn: editBook,
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
  });

  const remove = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
  });

  return { add, edit, remove };
};
