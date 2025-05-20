import React, { useEffect, useState } from 'react'

export default function App() {
 
  const [isOpen, setIsOpen] = useState(false);
  const [blogdata, setblogdata] = useState([]);

  function setSavedData() {
      console.log("from local storage ...");
      setBlogData(savedData);
    }

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }
  
  
  
  function handleBlogSubmit(newblog) {
    setBlogData((prev) => [...prev, newblog]);
    handleClose();
  }
  

  return (
    <div className='flex flex-col   h-screen gap-4'>
      <header className='flex flex-col  w-full h-auto bg-slate-900 '>
        <nav className='flex justify-between items-center p-4'>
          <span className='flex items-center'>
            <h1 className='text-violet-400 text-4xl'>My Blog Box</h1>
          </span>

          <span className='flex items-center gap-2'>
            <form className='gap-2 flex items-center'>
              <input type="search" className='text-white border-amber-50 border-1 rounded-2xl  focus:border-violet-900' />
              <button className='text-white text-2xl bg-violet-500 rounded-2xl p-3 py-0.5'>Search</button>
            </form>
            <button className='text-white  bg-pink-700 rounded-2xl  px-2 pb-1 ' onClick={handleOpen}>
              <span className='px-1 text-2xl text-gray-500 font-extrabold'  >+</span>Add Blogs
            </button>


          </span>


        </nav>
        <nav className='gap-2 flex p-4'>
          <button className='text-white gap-3 px-4 py-2 border-white bg-violet-500 rounded-3xl'>All</button>
          <button className='text-white gap-3 px-4 py-2 border-white bg-slate-500 rounded-3xl'>Technology</button>
          <button className='text-white gap-3 px-4 py-2 border-white bg-slate-500 rounded-3xl'>Travel</button>
          <button className='text-white gap-3 px-4 py-2 border-white bg-slate-500 rounded-3xl'>Food</button>
          <button className='text-white gap-3 px-4 py-2 border-white bg-slate-500 rounded-3xl'>Lifestyle</button>
        </nav>

      </header>

      

        <main className='flex flex-col gap-4 p-5 h-auto' onClick={handleClose}>
          <button className='flex flex-start rounded-2xl cursor-pointer gap-2'>
            <img src="https://www.pngall.com/wp-content/uploads/10/Message-Silhouette-PNG-Background.png"className='w-7 h-7'  alt="" />
            <p className='text-2xl text-white items-center pb-1'> All Blogs</p>
          </button>

          {isOpen ?
        <div className='flex flex-col border-2 border-slate-900 rounded-2xl bg-slate-800 w-1/2 justify-center h-auto gap-2 p-4'>
          <h2 className='text-center text-3xl text-pink-500 bg-slate'><span>+</span> Create a Blog</h2>
          <input type="text" placeholder='Blog Title' className='text-white bg-slate-400 rounded-sm' />
          <textarea name="text" placeholder='Blog Content' rows="4" className='text-white rounded-sm bg-slate-400' id=""></textarea>
          <select value="" className='text-white rounded-sm bg-slate-400' name="category" id="Select your category">
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
          <input type="text" placeholder='Tags(comma separated' className='rounded-sm text-white bg-slate-400' />
          <input type="url" placeholder='Image UrL' className='text-white rounded-sm bg-slate-400' />
          <button type='submit' className='bg-pink-700 text-white rounded-sm ' onClick={handleBlogSubmit}>Create Blog</button>
        </div> : null}
        </main>
    </div>
  )
}
