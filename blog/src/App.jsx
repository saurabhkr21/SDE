import { useEffect, useState } from 'react';
import { NewMemes } from './components/NewMemes';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [memesData, setMemesData] = useState(() => {
    const saved = localStorage.getItem("dataMemes-");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("dataMemes-", JSON.stringify(memesData));
  }, [memesData]);


  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleMemeSubmit(NewMemes) {
    setMemesData((prev) => [...prev, NewMemes]);
    handleClose();
  }
  
  function handleDeleteMeme(indexToDelete) {
    const updated = memesData.filter((_, index) => index !== indexToDelete);
    setMemesData(updated);
    localStorage.setItem("dataMemes-", JSON.stringify(updated));
  }

  

  function handleLike(index) {
    const updatedMemes = [...memesData];
    const meme = updatedMemes[index];
    meme.likes = meme.likes ? meme.likes + 1 : 1;
    setMemesData(updatedMemes);
  }

  return (
    <div className='flex flex-col   h-screen gap-4'>
      <header className='flex flex-col  w-full h-auto bg-slate-900 '>
        <nav className='flex justify-between items-center p-4'>
          <span className='flex items-center'>
            <h1 className='text-violet-400 text-4xl'>
              My Memes Box</h1>
          </span>
          <span className='flex items-center gap-2'>
            <form className='gap-2 flex items-center'>
              <input type="search" className='text-white border-amber-50 border-1 rounded-2xl p-2 focus:border-violet-900' placeholder='search...' />
              <button className='text-white text-2xl bg-violet-500 rounded-2xl p-3 py-0.5'>Search</button>
            </form>
            <button className='text-white  bg-pink-700 rounded-2xl  px-2 pb-1 ' onClick={handleOpen}>
              <span className='px-1 text-2xl text-gray-500 font-extrabold'>+</span>Add memess
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
      <main className='flex flex-col justify-center items-center gap-4 p-5 h-auto'>
        <button className='flex flex-start rounded-2xl cursor-pointer gap-2'>
          <img src="https://www.pngall.com/wp-content/uploads/10/Message-Silhouette-PNG-Background.png" className='w-7 h-7' alt="" />
          <p className='text-2xl text-white items-center pb-1'> All Memes</p>
        </button>
        {memesData.length > 0 ? (
          memesData.map((memes, index) => (
            <div key={index} className="flex flex-col justify-center items-center w-1/2  bg-slate-500 text-white p-4 rounded-xl shadow-lg">
              <div className='flex flex-col'>
                <div className='flex justify-between items-center'>
                <h3 className="text-2xl font-bold text-pink-400">{memes.title}</h3>
                <button onClick={() => handleDeleteMeme(index)} className=''>
                  <img width="24" height="24" src="https://img.icons8.com/material-outlined/FFFFFF/filled-trash.png" alt="filled-trash"/></button>
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
              <p className="text-sm text-gray-400">Tags: {memes.tags.join(', ')}</p>
              </div>
              <div
              className="flex items-center justify-between  mt-1 w-[70px] bg-pink-600 text-white px-2 py-2 rounded-3xl hover:bg-pink-700">
                <button onClick={() => handleLike(index)} >
                ❤️({memes.likes})
              </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-300">No memes added yet.</p>
        )}

        {isOpen ? (
          <NewMemes
            handleClose={handleClose}
            handleMemeSubmit={handleMemeSubmit}
          />
        ) : null}

      </main>
    </div>
  )
}

