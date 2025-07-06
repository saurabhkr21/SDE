//@ts-nocheck

'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [imageArr, setImageArr] = useState([]);
  const searchParams = useSearchParams();
  let imageLink = searchParams.get("url");
  let imageName=searchParams.get("name");

  function handlePrompt() {
    let imageUrl = prompt("Enter Url of Image ");
    let nickname = prompt("Enter name for image");

    let obj = {
      name: nickname,
      url: imageUrl
    };
    let newState = [...imageArr];
    newState.push(obj);
    setImageArr(newState);
  }
  return (
    <div>

      <div className="flex items-center justify-center gap-5 w-full h-[80px]">
        <button onClick={handlePrompt}
        className="border-2 rounded-2xl p-2 bg-amber-500">Add Url</button>
      <Link href="/"
      className="border-2 rounded-2xl p-2 bg-amber-300">Reset</Link>
      </div>

      <div className="flex">
        <div className="w-1/2 border-slate-800 border-2 h-screen" >
        {
        imageArr.map(function (value, index) {
          let hrefUrl = "/?url=" + value.url;
          return (
            <div key={index} className="w-[200px]">
                <Link href={hrefUrl} > {value.name}</Link>
            </div>
            )
        })}
      </div>
        <div className="w-1/2 border-slate-800 border-2 h-screen ">{
        imageLink && (
          <img src={imageLink} alt="" width="500px" height="500px" />
        )
      }</div>
      </div>
      
    </div>
  );
}


// import { Suspense } from "react";
// import ImageGallery from "./components/ImageGallery";

// function LoadingFallback() {
//   return (
//     <div className="p-4">
//       <div className="animate-pulse">
//         <div className="h-10 bg-gray-200 rounded mb-4 w-32"></div>
//         <div className="h-4 bg-gray-200 rounded mb-2 w-48"></div>
//         <div className="h-4 bg-gray-200 rounded w-32"></div>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       <header className="bg-gray-100 p-4 border-b">
//         <h1 className="text-2xl font-bold text-gray-800">Image Gallery App</h1>
//         <p className="text-gray-600">Add and preview images from URLs</p>
//       </header>
      
//       <main>
//         <Suspense fallback={<LoadingFallback />}>
//           <ImageGallery />
//         </Suspense>
//       </main>
//     </div>
//   );
// }
