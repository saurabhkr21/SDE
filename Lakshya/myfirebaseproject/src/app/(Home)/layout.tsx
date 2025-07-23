//@ts-nocheck
'use client'
import auth from "@/services/firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
    const [user,setUser]=useState();
    const router=useRouter();
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }else{
                router.push("/signin")
            }
        });
    },[])
    if(!user)
        return <div>loading...</div>
  return (
    <div>
        {children}
    </div>
  );
}
