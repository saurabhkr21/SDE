import React, { useState } from 'react'
import NewMemes from './NewMemes'

export default function Header({ handleMemeSubmit }) {
    const [isOpen, setIsOpen] = useState(false);
    
    function handleOpen() {
        setIsOpen(true);
    }
    
    function handleClose() {
        setIsOpen(false);
    }
    return (
        <div className='flex h-auto w-screen bg-slate-900'>
            <header className='flex flex-col  w-full h-auto text-white '>
                <nav className='flex justify-between text-white'>
                    <span className='flex items-center justify-between p-2'>
                        <h1>My Memes Box</h1>
                    </span>
                    <span className={'${className} p-2 gap-2 flex'}>
                        <input type="Search" placeholder='Search....' className='p-1.5 rounded-2xl border-2' />
                        <button className='bg-violet-500 text-white rounded-2xl p-2'>Search</button>
                        
                        <button className='bg-violet-500 text-white rounded-2xl p-2'
                        onClick={handleOpen}>
                            <span> +<span>Add memes</span> </span>
                        </button>

                        {isOpen ? (
                    <NewMemes
                        handleClose={handleClose}
                        handleMemeSubmit={(newMeme) => {
                            handleMemeSubmit(newMeme);
                            handleClose();
                        }}
                    />
                    ) : null}

                    </span>
                </nav>
                <nav>
                    <ul>
                        <li className='flex gap-3 items-center p-2'>
                            <button className='border-2 rounded-3xl px-2 bg-violet-500'>All</button>
                            <button className='border-2 rounded-3xl px-2 bg-slate-500'>Technology</button>
                            <button className='border-2 rounded-3xl px-2 bg-slate-500'>Travel</button>
                            <button className='border-2 rounded-3xl px-2 bg-slate-500'>Food</button>
                            <button className='border-2 rounded-3xl px-2 bg-slate-500'>Lifestyle</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
