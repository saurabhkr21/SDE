//@ts-nocheck
"use client";
import auth from "@/services/firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ContextAPIProvider } from "../../ContextAPI";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState();
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
  if (!user) return <div>loading...</div>;
  return <ContextAPIProvider>{children}</ContextAPIProvider>;
}
