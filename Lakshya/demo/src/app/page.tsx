'use client'

import Button from "@/components/button";
import Counter from "@/components/incre_decre";
import Link from "next/link";



export default function Home() {
  
  return (
    <div className="flex flex-col gap-4">
      <h1>Home</h1>
      {/* <Link href="about">About</Link><br />
      <Link href="company">Company</Link> */}
      <Link href="/about/profile">Profile</Link><br />
      <Link href="/about/profile/varun">Intro</Link><br />
      <Link href="/company/profile/tsd">Company_Intro</Link><br />
    </div>
  );
}