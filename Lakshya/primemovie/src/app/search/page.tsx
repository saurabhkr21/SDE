//@ts-nocheck
'use client'
import { json } from "stream/consumers";
import MovieFetcher from "../components/MovieFetcher";
import { useContext } from "react";
import { PageContext } from "@/Context";


export default function page({ searchParams }) {
  const query =  searchParams.query;
  const {page,setPage} =useContext(PageContext);
  function handleIncrement(){
    setPage(page+1);
  }
  function handleDecrement(){
    if(page>1){
      setPage(page-1);
    }
  }

  return (
    <div>
      <div>
        <MovieFetcher query={query} page={page}/>
      </div>
      <div>
        <div className="flex gap-4 text-white justify-center items-center p-5">
          <button onClick={handleDecrement}>
            <img
              width="28"
              height="18"
              src="https://img.icons8.com/ios/FFFFFF/less-than-2.png"
              alt="less-than-2"
            />
          </button>
          <button className="border w-15 h-12">{page}</button>
          <button onClick={handleIncrement}>
            <img
              width="28"
              height="18"
              src="https://img.icons8.com/ios/FFFFFF/more-than-2.png"
              alt="more-than-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
