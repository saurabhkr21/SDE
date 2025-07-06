import { useEffect, useState } from 'react';
import { NewMemes } from './components/NewMemes';
import Header from './components/Header';
import Memes from './components/Memes';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }
  const [memesData, setMemesData] = useState(() => {
    const saved = localStorage.getItem("dataMemes-");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("dataMemes-", JSON.stringify(memesData));
  }, [memesData]);


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

  const [selectCategory, setSelectCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState('');
  const filteredMemes = memesData.filter((memes) => {
    const matchCategory = selectCategory === 'All' || memes.category === selectCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchSearch =
      memes.title.toLowerCase().includes(searchLower) ||
      memes.content.toLowerCase().includes(searchLower) ||
      memes.tags.join(',').toLowerCase().includes(searchLower);
    return matchCategory && matchSearch;
  });

  return (
    <div className='flex flex-col   h-screen gap-4'>
      <Header
        handleOpen={handleOpen}
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} />

      <main className='flex flex-col justify-center  gap-4 p-5 h-auto w-screen'>
        <div className='flex flex-start rounded-2xl cursor-pointer gap-2'>
          <img src="https://www.pngall.com/wp-content/uploads/10/Message-Silhouette-PNG-Background.png"
            className='w-7 h-7' alt="Meme Box" />
          <p className='text-2xl text-white  pb-1'> All Memes</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px] mx-auto">

          {filteredMemes.length > 0 ? (
            filteredMemes.map((memes, index) => (
              <Memes
                key={index}
                memes={memes}
                index={index}
                handleDeleteMeme={handleDeleteMeme}
                handleLike={handleLike} />
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
        </div>
      </main>
    </div>
  )
}

