import React, { useState } from 'react'

export default function NewMemes({handleClose, handleMemeSubmit}) {
const [title,setTitle]=useState('');
const [category,setCategory]=useState('Technology');
const [tags,setTags]=useState('');
const [image,setImage]=useState('');
const [content,setContent]=useState('');

const onsubmitClick=(e)=>{
    e.preventDefault();
    if(!title.trim()|| !content.trim()){
        alert('Please fill in the title and content')
    }
    const newMemes={
        title,
        content,
        category,
        tags,
        // tags:tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        image
    }
    handleMemeSubmit(newMemes);
    setTitle=('');
    setContent=('');
    setCategory=('Technology');
    setTags=('');
    setImage('');
    
}

return (
    <div
    className='flex fixed top-0 left-0 justify-center  w-screen h-full  z-40  text-white'>
        <section className='flex flex-col w-auto h-auto lg:w-[600px] lg:h-[600px] gap-4 px-2 border bg-slate-400 text-white'
        onClick={(e) => e.stopPropagation()}>
            <nav className='flex justify-between text-white text-4xl gap-4 p-2'
            >
                <span>+<span>Create a memes</span></span>
                <img width="24" height="24" src="https://img.icons8.com/material-rounded/FFFFFF/multiply--v1.png" alt="multiply--v1" onClick={handleClose}/>
            </nav>
            <form className='flex flex-col gap-3 text-xl p-2' onSubmit={onsubmitClick}>
                <input type="text" value={title} placeholder='Memes Title' onChange={(e)=>setTitle(e.target.value)} className='bg-slate-600 border-2 rounded-xl p-2 px-1' required />
                <textarea cols={4} rows={4} value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Memes Content' className='bg-slate-600 border-2 rounded-xl p-0.5 px-1' required />
                <select value={category} className='bg-slate-600 border-2 rounded-xl p-3 px-1' onChange={(e)=>setCategory(e.target.value)}>
                    <option value="Technology">Technology</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="Lifestyle">Lifestyle</option>
                </select>
                <input type="text" value={tags} placeholder='Memes Tags (comma separated)' className='bg-slate-600 border-2 rounded-xl p-2 px-1' onChange={(e)=>setTags(e.target.value)} />
                <input type="url" value={image} placeholder='Memes Image URL' className='bg-slate-600 border-2 rounded-xl p-3 px-1' onChange={(e)=>setImage(e.target.value)} />
                <button
                type="submit"
                className='w-auto bg-red-600 border-2 rounded-xl p-4 px-2' >Submit</button>
            </form>
        </section>
    </div>

)
}
