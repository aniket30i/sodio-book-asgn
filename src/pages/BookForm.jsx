import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const BookForm = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch book data in edit mode
  useEffect(() => {
    if (isEdit) {
      const fetchBook = async () => {
        try {
          const res = await fetch(`http://localhost:3006/books/${id}`);
          const data = await res.json();
          reset(data); // Prefill form with fetched data
        } catch (error) {
          console.error("Failed to fetch book data", error);
        }
      };
      fetchBook();
    }
  }, [id, isEdit, reset]);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        isEdit
          ? `http://localhost:3006/books/${id}`
          : "http://localhost:3006/books",
        {
          method: isEdit ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Failed to submit");

      // 🚨 Later: Show toast notification here

      // Optionally redirect or reset
      if (!isEdit) reset();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="w-full h-screen bg-zinc-900 text-white flex items-center justify-center">
      <div className="max-w-xl mx-auto p-6 bg-zinc-800 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">
          {isEdit ? "Edit Book" : "Add New Book"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-semibold">Title</label>
            <input
              className="w-full border px-3 py-2 rounded"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold">Author</label>
            <input
              className="w-full border px-3 py-2 rounded"
              {...register("author", { required: "Author is required" })}
            />
            {errors.author && (
              <p className="text-red-500">{errors.author.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold">Genre</label>
            <input
              className="w-full border px-3 py-2 rounded"
              {...register("genre", { required: "Genre is required" })}
            />
            {errors.genre && (
              <p className="text-red-500">{errors.genre.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold">Published Year</label>
            <input
              type="number"
              className="w-full border px-3 py-2 rounded"
              {...register("publishedYear", {
                required: "Year is required",
                min: 1000,
                max: new Date().getFullYear(),
              })}
            />
            {errors.publishedYear && (
              <p className="text-red-500">{errors.publishedYear.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold">Status</label>
            <select
              className="w-full border px-3 py-2 rounded bg-zinc-800"
              {...register("status", { required: "Status is required" })}
            >
              <option value="">Select status</option>
              <option value="available">Available</option>
              <option value="issued">Issued</option>
            </select>
            {errors.status && (
              <p className="text-red-500">{errors.status.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-btn-accent hover:bg-slate-600 text-white px-4 py-2 rounded"
          >
            {isEdit ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
