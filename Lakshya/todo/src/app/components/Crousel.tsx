import { useState } from "react";

export default function Crousel() {
    const Img_Arr = [
        " https://images.unsplash.com/photo-1751885276975-a7d2288723d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1750785328656-eb4c9942e58f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
        
        "https://images.unsplash.com/photo-1751837184233-b26fa8444e4f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
    ];
    const [current, setCurrent] = useState(0);
    const length = Img_Arr.length;

    function nextSlide() {
        setCurrent((prev) => (prev + 1 + length) % length);
    }

    function prevSlide() {
        setCurrent((prev) => (prev - 1 + length) % length);
    }

    return (
    <div className="relative  h-[300px] w-full object-cover mx-auto overflow-hidden ">
      <div className="flex transition-transform object-center duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
            {
                Img_Arr.map((src,index)=>(
                    <img key={index} src={src} alt={'slide ${index}'} className="w-full flex-shrink-0 object-contain"/>
                ))
            }
            </div>
            <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full "
                onClick={prevSlide}>◀</button>
            <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full"
                onClick={nextSlide}>▶</button>
        </div>
    )
}