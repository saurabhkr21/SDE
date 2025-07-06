import React, { useState } from 'react'

export default function Header({ handleOpen, selectCategory, setSelectCategory, searchQuery, setSearchQuery }) {

    return (
        <header className='flex flex-col  w-screen h-auto bg-slate-900 '>
            <nav className='flex justify-between items-center p-4'>
                <span className='flex items-center'>
                    <h1 className='text-violet-400 text-3xl'>
                        My Memes Box</h1>
                </span>
                <span className='flex items-center gap-1'>
                    <form className='gap-2 flex items-center'>
                        <input type="search"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='text-white border-amber-50 border-1 rounded-xl p-1 focus:border-violet-900' placeholder='search...' />
                        <button className='text-white text-xl bg-violet-500 rounded-2xl p-3 py-0.5'>Search</button>
                    </form>
                    <button className='text-white  bg-pink-700 rounded-2xl  px-2 pb-1 ' onClick={handleOpen}>
                        <span className='px-1 text-xl text-gray-500 font-extrabold'>+</span>Add Memes
                    </button>
                </span>
            </nav>
            <nav className="flex flex-wrap justify-center sm:justify-start gap-2 px-4 pb-4">
                {['All', 'Technology', 'Travel', 'Food', 'Lifestyle'].map((category) => (
                    <button
                        key={category}
                        onClick={()=>setSelectCategory(category)}
                        className={`text-white px-4 py-2 rounded-3xl ${category === selectCategory ? 'bg-violet-500' : 'bg-slate-500'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </nav>
        </header>
    )
}
