//@ts-nocheck
"use client";
import { onAuthStateChanged, User } from "firebase/auth";
import auth, { signout } from "@/services/firebaseAuth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { storeDataInDB } from "@/services/firestoreDb";
import { title } from "process";

export default function Home() {
  const [user, setUser] = useState<User>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      title,
      description,
    };
    storeDataInDB(data);
  }

  return (
    <div className="text-2xl font-bold text-center mb-4">
      <button onClick={handleSignOut}>LogOut </button>
      <h1>Welcome {user?.email}</h1>

      <form onClick={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="enter description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add </button>
      </form>
    </div>
  );
}
