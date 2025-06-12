// src/hooks/useBookMutations.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBook, editBook, deleteBook } from "../api/Books";
import toast from "react-hot-toast";

export const useBookMutations = () => {
  const queryClient = useQueryClient();

  const add = useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
      toast.success("Book added successfully");
    },
  });

  ///////////////////////////////////////////// add

  const edit = useMutation({
    mutationFn: editBook,
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
      toast.success("Book updated successfully");
    },
  });

  ////////////////////////////////////////////// edit

  const remove = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
  });

  return { add, edit, remove };
};

//////////////////////////////////////////////delete
