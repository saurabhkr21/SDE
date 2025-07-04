import React from 'react'

export default function Memes({ memesData, handleDeleteMeme, handleLike }) {
    return (
        <div className='flex flex-col   text-white w-full h-full  bg-slate-700'>
            <section className='flex flex-col w-full h-full  gap-4 px-2  bg-slate-700 text-white'>
                <span className='flex  gap-1 rounded-2xl  p-2 w- h-auto'>
                    <img width="28" height="18" src="https://img.icons8.com/ios/FFFFFF/document--v1.png" alt="document--v1" />
                    <button className='text-2xl text-white '>Memes Gallary</button>
                </span>
                {memesData.length > 0 ? (
                    memesData.map((memes, index) => (
                        <div key={index} className="flex flex-col w-1/2  bg-slate-500 text-white p-4 rounded-xl shadow-lg">
                            <div className='flex justify-between items-center'>
                                <h3 className="text-2xl font-bold text-pink-400">{memes.title}</h3>
                                <button onClick={() => handleDeleteMeme(index)} >
                                    <img width="24" height="24"
                                    src="https://img.icons8.com/material-outlined/FFFFFF/filled-trash.png" alt="filled-trash" /></button>
                            </div>
                            <p className="italic text-sm text-violet-300">{memes.category}</p>
                            {memes.image && (
                                <img
                                    src={memes.image}
                                    alt="memes visual"
                                    className="w-full h-64 object-cover my-2 rounded-lg"
                                />
                            )}
                            <p className="text-white">{memes.content}</p>
                            <p className="text-sm text-gray-400">Tags: {memes.tags}</p>
                            {/* Tags: {memes.tags.join(',')} */}
                            <button
                                className="mt-2 bg-pink-600 w-auto text-white px-4 py-1 rounded-full hover:bg-pink-700"
                                onClick={() => handleLike(index)}
                            >
                                ❤️{memes.likes}
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-300">No memes added yet.</p>
                )}

            </section>
        </div>
    )
}
