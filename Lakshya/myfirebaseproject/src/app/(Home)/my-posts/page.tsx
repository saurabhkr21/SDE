//@ts-nocheck
"use client";
import { useOpenContext } from "@/app/ContextAPI";
import EditPost from "@/components/EditPost";
import { deletePost, getCurrentUserPost } from "@/services/firestoreDb";
import { useEffect, useState } from "react";


export default function Page() {
  const [post, setPost] = useState([]);
  const { handleOpen, close, open } = useOpenContext();
  const [editingPostId,setEditingPostId]=useState(null);
  async function handleDelete(item) {
    await deletePost(item.id);
    setPost((prev) => prev.filter((p) => p.id !== item.id));
  }

  useEffect(() => {
    async function getPosts() {
      const posts = await getCurrentUserPost();
      setPost(posts);
      console.log("my post", posts);
    }
    getPosts();
  }, []);

  return (
    <div className="flex flex-col  min-h-screen bg-gray-500 p-4">
      <p>My Posts</p>
      {post.map((item) => (
        <div key={item.id} className="p-4 border-b border-gray-200">
          <p>{item.title}</p>
          <p>{item.description}</p>
          <button
            onClick={() => handleDelete(item)}
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
          >
            Delete
          </button>
          <button onClick={handleOpen}>Edit</button>
          {open && editingPostId === item.id && (
            <EditPost post={item} close={close} />
          )}
          
        </div>
      ))}
    </div>
  );
}
