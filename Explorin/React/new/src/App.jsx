import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Memes from './components/Memes'

export default function App() {
const  [memesData,setMemesData]=useState(()=>{
    const saved=localStorage.getItem("dataMines-");
    return saved ?JSON.parse(saved):[]
});
useEffect(()=>{
    localStorage.setItem("dataMines-",JSON.stringify(memesData))},
[memesData]);



    function handleMemeSubmit(newMeme) {
        setMemesData((prev) => [...prev, { ...newMeme, likes: 0 }]);
    }

    function handleDeleteMeme(index) {
        setMemesData((prev) => prev.filter((_, i) => i !== index));
    }

    function handleLike(index) {
        setMemesData((prev) =>
            prev.map((memes, i) =>
                i === index ? { ...memes, likes: memes.likes + 1 } : memes
            )
        );
    }

    return (
        <div className='flex flex-col w-screen h-screen  text-white'>
            <main className='flex flex-col '>
                <Header handleMemeSubmit={handleMemeSubmit} />
                <Memes
                    memesData={memesData}
                    handleDeleteMeme={handleDeleteMeme}
                    handleLike={handleLike}
                />
            </main>
        </div>
    )
}
