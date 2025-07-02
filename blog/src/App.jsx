import { useEffect, useState } from 'react';

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
            <h1 className='text-violet-400 text-4xl'>My memes Box</h1>
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
            <div key={index} className="flex flex-col w-1/2  bg-slate-500 text-white p-4 rounded-xl shadow-lg">
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
              <button
                className="mt-2 bg-pink-600 text-white px-4 py-1 rounded-full hover:bg-pink-700"
                onClick={() => handleLike(index)}
              >
                ❤️({memes.likes})
              </button>
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

export function NewMemes({ handleClose, handleMemeSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");

  const onsubmitClick = () => {
    const newMemes = {
      title,
      content,
      category,
      tags: tags.split(',').map(tag => tag.trim()),
      image,
      likes: 0
    };
    handleMemeSubmit(newMemes);
    setTitle('');
    setContent('');
    setCategory('');
    setTags('');
    setImage('');
  };

  return (
    <div
      className='min-w-full min-h-full bg-black bg-opacity-50 fixed top-0 left-0 flex justify-center items-center z-50'
      
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='flex flex-col  border-2 lg:w-[600px] lg:h-[600px]  border-slate-900  rounded-4xl bg-slate-900  justify-center  gap-3 p-8'
      >
        <div className='flex justify-between items-center gap-2 '>
          <h2 className='text-center  text-pink-500 text-3xl'><span>+</span>Create a memes</h2>
          <img width="25" height="25" src="https://img.icons8.com/material-sharp/FFFFFF/multiply.png" alt="multiply" onClick={handleClose}/>
        </div>
        <div className='flex flex-col gap-3 text-xl p-3'>
          <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Memes Title' className='text-white p-3 bg-slate-600 rounded-sm' />
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder='Memes Content' rows="4" className='text-white p-3 rounded-sm bg-slate-600' />
        <select value={category} onChange={e => setCategory(e.target.value)} className='text-white rounded-sm p-3 bg-slate-600'>
          <option value="Technology">Technology</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <input value={tags} onChange={e => setTags(e.target.value)} type="text" placeholder='Tags (comma separated)' className='rounded-sm p-3 text-white bg-slate-600' />
        <input value={image} onChange={e => setImage(e.target.value)} type="url" placeholder='Image URL' className='text-white rounded-sm p-3 bg-slate-600' />
        <button type='button' className='bg-pink-700 text-white p-3 rounded-sm' onClick={onsubmitClick}>
          Create Memes
        </button>
        </div>
      </div>
    </div>
  );
}