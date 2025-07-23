//@ts-nocheck
"use client";
import { storeDataInDB } from "@/services/firestoreDb";
import { User } from "firebase/auth";
import React, { useState } from "react";

export default function AddPosts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      title,
      description,
    };
    storeDataInDB(data);
    
  }
  return (
    <div className="flex flex-col gap-3">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-black gap-4 w-full"
      >
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          onChange={(e) => setDescription(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded transition"
        >
          Submit
        </button>
      </form>
      
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-1 rounded transition"
        >
          Edit
        </button>
      
    </div>
  );
}
