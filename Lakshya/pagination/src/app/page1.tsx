//@ts-nocheck
"use client"
import NewProduct from "@/components/NewProduct";
import { useEffect, useState } from "react";


export default function Home() {
  const [page, setPage] = useState(2);
  console.log("page:",page);
  const [products, setProducts] = useState([]);

  async function fetchData(page) {
    const skip = (page - 1) * 12;
    const url = "https://dummyjson.com/products?limit=12&skip=" + skip;
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data.products);
  }
  useEffect(() => {
    fetchData(page)
  }, []);

  // const currentPage=mobiles.slice((page-1)*10,page*10);

  function updatePage(page) {
    setPage(page);
    fetchData(page);
    console.log("number:-", page);
    window.scrollTo({ top: 8, behavior:"instant" })
  }
  function handleBottom(){
    window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})
  }

function handleTop(){
  window.scrollTo({top:0, behavior:"smooth"})
}

  return (
    <div className="flex flex-col gap-8 p-4 ">
      <div className="flex flex-wrap gap-2 justify-center-safe">
        {
          products.map((item) => (
            <NewProduct
              item={item} />
          ))
        }
      </div>
      <button className=" bg-amber-300 fixed top-5 right-5 p-2" onClick={handleBottom}>
        <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/down-squared--v1.png" alt="down-squared--v1"/>
      </button>
      <button className=" bg-amber-300 fixed bottom-5 right-5 p-2" onClick={handleTop}>
        <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/up-squared.png" alt="up-squared"/>
      </button>

      <div className="flex justify-center items-center gap-3">
        <button
          className="w-6 h-6 bg-slate-700"
          onClick={() => (updatePage(page - 1))}>
          ⏮️
        </button>

        <button className="w-[45px] h-[45px] border-2 rounded-xl"
          onClick={() => (updatePage(1))}>
          1
        </button>
        <button className="w-[45px] h-[45px] border-2 rounded-xl"
          onClick={() => (updatePage(2))}>
          2
        </button>
        <button className="w-[45px] h-[45px] border-2 rounded-xl"
          onClick={() => (updatePage(3))}>
          3
        </button>
        <button className="w-[45px] h-[45px] border-2 rounded-xl"
          onClick={() => (updatePage(4))}>
          4
        </button>
        <button className="w-[45px] h-[45px] border-2 rounded-xl"
          onClick={() => (updatePage(5))}>
          5
        </button>
        <button
          className="w-6 h-6 bg-slate-700"
          onClick={() => (updatePage(page + 1))}>
          ⏭️
        </button>

      </div>

    </div>
  );
}
