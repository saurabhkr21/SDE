import { useState } from "react";

export default function Crousel() {
    const Img_Arr = [
        // Productivity and workspace themed images
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        
        // Planning and organization
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        
        // Notebook and writing
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        
        // Checklist and tasks
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        
        // Calendar and scheduling
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        
        // Office supplies and organization
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        
        // Coffee and productivity
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        
        // Goal setting and achievement
        "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        
        // Time management
        "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        
        // Success and teamwork
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
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
    <div className="relative bg-amber-400  h-[300px] w-full  mx-auto overflow-hidden ">
      <div className="flex transition-transform  duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
            {
                Img_Arr.map((src,index)=>(
                    <img key={index} src={src} alt={'slide ${index}'} className="w-full flex-shrink-0 h-[300px]"/>
                ))
            }
            </div>
            <button
            className="absolute left-2 top-1/2 -translate-y-1/2"
                onClick={prevSlide}>◀</button>
            <button
            className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={nextSlide}>▶</button>
        </div>
    )
}