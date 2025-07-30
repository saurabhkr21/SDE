//@ts-nocheck

import Link from "next/link";
import { notFound } from "next/navigation";



// const mobiles = [
//     { id: 1, title: "iPhone 15 Pro", description: "6.1-inch display, A17 Pro chip, 128GB", price: 1199 },
//     { id: 2, title: "Samsung Galaxy S24 Ultra", description: "6.8-inch QHD+, Snapdragon 8 Gen 3, 256GB", price: 1299 },
//     { id: 3, title: "OnePlus 12", description: "6.7-inch AMOLED, Snapdragon 8 Gen 2, 12GB RAM", price: 799 },
//     { id: 4, title: "Google Pixel 8 Pro", description: "6.7-inch LTPO OLED, Tensor G3 chip", price: 999 },
//     { id: 5, title: "Xiaomi 14 Ultra", description: "6.73-inch AMOLED, Leica cameras", price: 899 },
//     { id: 6, title: "Realme GT 6 Pro", description: "Snapdragon 8 Gen 3, 144Hz display", price: 699 },
//     { id: 7, title: "Motorola Edge+ (2024)", description: "6.7-inch pOLED, 165Hz refresh rate", price: 749 },
//     { id: 8, title: "Asus ROG Phone 8", description: "Gaming phone, 6000mAh battery", price: 1099 },
//     { id: 9, title: "Nothing Phone (2)", description: "Glyph interface, 120Hz OLED", price: 599 },
//     { id: 10, title: "Infinix Zero Ultra", description: "200MP camera, 180W charging", price: 499 },
//     { id: 11, title: "iQOO 12", description: "Snapdragon 8 Gen 3, 144Hz display", price: 699 },
//     { id: 12, title: "Vivo X100 Pro", description: "Zeiss optics, Dimensity 9300", price: 899 },
//     { id: 13, title: "Tecno Phantom V Flip", description: "Foldable AMOLED, 8GB RAM", price: 799 },
//     { id: 14, title: "Lava Agni 2", description: "Dimensity 7050, 120Hz AMOLED", price: 289 },
//     { id: 15, title: "Micromax In Note 2", description: "Helio G95, AMOLED display", price: 199 },
//     { id: 16, title: "iPhone 14", description: "A15 Bionic, 6.1-inch OLED", price: 899 },
//     { id: 17, title: "Samsung Galaxy A74", description: "Super AMOLED, 120Hz, 8GB RAM", price: 499 },
//     { id: 18, title: "OnePlus Nord CE 3 Lite", description: "Snapdragon 695, 108MP camera", price: 299 },
//     { id: 19, title: "Google Pixel 7a", description: "Tensor G2, 90Hz OLED", price: 499 },
//     { id: 20, title: "Poco X6 Pro", description: "Dimensity 8300-Ultra, 120Hz", price: 399 },
//     { id: 21, title: "Redmi Note 13 Pro+", description: "Curved AMOLED, 200MP camera", price: 359 },
//     { id: 22, title: "Honor Magic6 Pro", description: "Snapdragon 8 Gen 3, 1-inch sensor", price: 1099 },
//     { id: 23, title: "Sony Xperia 1 V", description: "4K OLED, pro camera controls", price: 1299 },
//     { id: 24, title: "Asus Zenfone 10", description: "Compact flagship, Snapdragon 8 Gen 2", price: 799 },
//     { id: 25, title: "Nokia XR21", description: "Rugged build, long battery life", price: 449 },
//     { id: 26, title: "Fairphone 5", description: "Sustainable, modular design", price: 699 },
//     { id: 27, title: "Black Shark 5 Pro", description: "Gaming phone, magnetic triggers", price: 649 },
//     { id: 28, title: "Realme Narzo 60 Pro", description: "Curved display, Dimensity 7050", price: 319 },
//     { id: 29, title: "Lava Blaze 5G", description: "Affordable 5G, 90Hz screen", price: 149 },
//     { id: 30, title: "Motorola G84", description: "P-OLED display, Snapdragon 695", price: 219 },
//     { id: 31, title: "iPhone SE (3rd Gen)", description: "A15 Bionic, compact size", price: 429 },
//     { id: 32, title: "Samsung Galaxy Z Flip 5", description: "Foldable screen, 3.4” cover display", price: 999 },
//     { id: 33, title: "Huawei P60 Pro", description: "RYYB camera, XMAGE imaging", price: 1099 },
//     { id: 34, title: "ZTE Nubia RedMagic 8S Pro", description: "Gaming focus, 165Hz AMOLED", price: 799 },
//     { id: 35, title: "Infinix GT 20 Pro", description: "Gaming design, AMOLED, 144Hz", price: 249 },
//     { id: 36, title: "iQOO Neo 9 Pro", description: "Snapdragon 8 Gen 2, 144Hz", price: 459 },
//     { id: 37, title: "Vivo T3", description: "MediaTek Dimensity, budget phone", price: 199 },
//     { id: 38, title: "POCO F6", description: "Snapdragon 8s Gen 3, 120Hz AMOLED", price: 449 },
//     { id: 39, title: "Redmi K70", description: "Flagship killer, 2K OLED", price: 549 },
//     { id: 40, title: "Samsung Galaxy M55", description: "Snapdragon 7 Gen 1, 120Hz Super AMOLED", price: 379 }
// ];

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