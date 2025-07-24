//@ts-nocheck
"use client";
import AddPosts from "@/components/AddPosts";
import auth, { signout } from "@/services/firebaseAuth";
import { storeDataInDB } from "@/services/firestoreDb";
import { onAuthStateChanged, User } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useOpenContext } from "../contextAPI";
import EditPost from "@/components/EditPost"

export default function Home() {
  const [user, setUser] = useState<User>();
  const { handleClose ,open } = useOpenContext();
  console.log("kdbkjfbhk", handleClose);

  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/login");
      }
    });
  }, []);

  async function handleSignOut() {
    await signout();
    router.push("/login");
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md flex flex-col items-center">
        <button
          onClick={handleSignOut}
          className="self-end mb-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition font-semibold"
        >
          Log Out
        </button>
        <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Welcome {user?.email}
        </h1>
        <div className="flex justify-between gap-10 text-black">
          <Link href="/all-posts">All Posts</Link>
          <Link href="/my-posts">My Post</Link>

          {/* <button >Add Post</button> */}
          {open ? <EditPost /> : null}
          {/* <EditPost/> */}
        </div>
        <AddPosts />
      </div>
    </main>
  );
}
