//@ts-nocheck
"use client";

import { useOpenContext } from "@/ContextAPI";
import { storeDataInDB } from "@/services/firestoreDb";
import { useState } from "react";

export default function AddPosts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { handleOpen } = useOpenContext();
  // console.log("Hii", handleOpen);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const data = {
      title,
      description,
    };

    try {
      await storeDataInDB(data);
      setSuccess("Post added successfully!");
      setTitle("");
      setDescription("");
    } catch (err) {
      setError("Failed to add post. Please try again.");
      console.error("Error adding post:", err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col gap-3">
      {error && (
        <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-2 text-sm">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 text-green-700 px-3 py-2 rounded mb-2 text-sm">
          {success}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-black gap-4 w-full"
      >
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
          className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={loading}
          className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold p-2 rounded transition"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <button
        type="button"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-1 rounded transition"
        onClick={handleOpen}
      >
        Edit
      </button>
    </div>
  );
}
