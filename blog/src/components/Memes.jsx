import React from 'react'

export default function Memes({ memes, index, handleDeleteMeme, handleLike }) {
    return (
        <div className="flex flex-col justify-center items-center bg-slate-500 text-white p-4 rounded-xl shadow-lg">
            <div className='flex flex-col w-full'>
                <div className='flex justify-between items-center'>
                    <h3 className="text-2xl font-bold text-pink-400">{memes.title}</h3>
                    <button onClick={() => handleDeleteMeme(index)} className=''>
                        <img width="24" height="24" src="https://img.icons8.com/material-outlined/FFFFFF/filled-trash.png" alt="filled-trash" /></button>
                </div>
                <p className="italic text-sm text-violet-300 object-cover">{memes.category}</p>
                {memes.image && (
                    <img
                        src={memes.image}
                        alt="memes visual"
                        className="w-full h-64 my-2 rounded-lg"
                    />
                )}
                <p className="text-white">{memes.content}</p>
                <p className="text-sm text-gray-400">Tags: {memes.tags.join(', ')}</p>
            </div>
            <div
                className="flex items-center justify-between  mt-1 w-[70px] bg-pink-600 text-white px-2 py-2 rounded-3xl hover:bg-pink-700">
                <button onClick={() => handleLike(index)} >
                    ❤️({memes.likes})
                </button>
            </div>
        </div>
    )
}
