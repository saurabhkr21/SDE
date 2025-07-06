'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import router from "next/navigation";
import Link from 'next/link';

export default function Home() {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(0);
  const router = useRouter;
  function handleOpen() {
    setOpen(false)
  }
  function handleClose() {
    setOpen(true)
  }
  function Increment(){
    if(value >= 10){
      router.push("/congra")
    }
    else{
      setValue(value+1);
    }
  }

  // function runOnclient() {
  //   let a = prompt("Enter a number");

  // }
  // useEffect(runOnclient, []);
  return (

    <div className="w-[100%]">
      <button onClick={Increment}>Click</button>
      <h1>{value}</h1>
      <button onClick={handleClose}>Click to open SideBar</button>
      {
        open == true ? <p className="bg-amber-200 w-[100px]" onClick={handleOpen}>
          This is a sidebar
        </p> : ""
      }
      <Link href="/login">LogIn</Link>
      <Link href="./congra">Congra</Link>
    </div>
  );
}




















//server

// import Link from "next/link";

// //@ts-ignore
// export default function Home({searchParams}) {
//   let open=searchParams.open;
//   return (
//     <div>
//       {(open==1)&& <Link href={"/?open=0"}>Close sidebar</Link>}
//       {(open !=1)&& <Link href={"/?open=1"}>Open sidebar</Link>}
//       <p>Home Page</p>
//     </div>
//   );
// }
