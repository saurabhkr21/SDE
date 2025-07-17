//@ts-nocheck

import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Home({ searchParams }) {
    const page = searchParams.page || 1;

    // const currentPage = mobiles.slice((page - 1) * 10, page * 10);
    // if (currentPage.length === 0) {
    //     notFound();
    // }



    const skip =(page-1)*12;
    const url = "https://dummyjson.com/products?limit=12&skip=" + skip;
    let products = [];
    try {
        const response = await fetch(url);
        const data = await response.json();
        products=data.products;
    }catch(err){
        notFound();
    }

    if(products.length===0){
        notFound();
    }
    return (
        <div className="flex flex-col  gap-4 p-2 ">
            <div className="flex h-[60px] rounded-xl bg-amber-200 items-center justify-center text-3xl w-full ">
                <h1>Shopping Cart</h1>
            </div>
            <div className="flex flex-wrap gap-2 justify-between">
                {
                    products.map((item) => (
                        <div key={item.id} className=" border-2 p-4 rounded-xl w-[320px]">
                            <img src={item.thumbnail} alt="" width={200} height={200} />
                            <div className="flex flex-col rounded-xl bg-amber-50 p-1 gap-2">
                                <h1 className="text-xl">{item.title}</h1>
                                <p className="text-sm line-clamp-3">{item.description}</p>
                                <p className="font-bold text-black">$ {item.price}</p>
                                <p>{item.meta.createdAt}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="flex items-center gap-1 justify-center">
                <Link href="./?page=1" className="flex items-center justify-center w-[42px] h-[42px] rounded-xl border-2">1</Link>
                <Link href="./?page=2" className="flex items-center justify-center w-[42px] h-[42px] rounded-xl border-2">2</Link>
                <Link href="./?page=3" className="flex items-center justify-center w-[42px] h-[42px] rounded-xl border-2">3</Link>
                <Link href="./?page=4" className="flex items-center justify-center w-[42px] h-[42px] rounded-xl border-2">4</Link>
                <Link href="./?page=5" className="flex items-center justify-center w-[42px] h-[42px] rounded-xl border-2">5</Link>
                <Link href="./?page=6" className="flex items-center justify-center w-[42px] h-[42px] rounded-xl border-2">6</Link>
            </div>

        </div>
    )
}