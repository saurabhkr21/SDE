import { useEffect, useState } from 'react';

export default function App() {
  const savedData = JSON.parse(localStorage.getItem("memesblog-")) || [];
  const [isOpen, setIsOpen] = useState(false);
  const [memesdata, setBlogdata] = useState(() => {
    const saved = localStorage.getItem("datablog-");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever memesdata changes
  useEffect(() => {
    localStorage.setItem("dataMemes-", JSON.stringify(memesdata));
  }, [memesdata]);


  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleMemesSubmit(newMemes) {
    setMemesdata((prev) => [...prev, newMemes]);
    handleClose();
  }

  function setSavedData() {
    console.log("Using Data from Local Storage ...");
    setMemesData(savedData);
  }

  function timerFn() {
    var x = 0;
    const timer = setInterval(() => {
      console.log("Running Timer", x++);
    }, 1000);
    return () => clearInterval(timer);
  }
  useEffect(timerFn, [memesdata]);

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
              <span className='px-1 text-2xl text-gray-500 font-extrabold'>+</span>Add Blogs
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
      <main className='flex flex-col gap-4 p-5 h-auto'>
        <button className='flex flex-start rounded-2xl cursor-pointer gap-2'>
          <img src="https://www.pngall.com/wp-content/uploads/10/Message-Silhouette-PNG-Background.png" className='w-7 h-7' alt="" />
          <p className='text-2xl text-white items-center pb-1'> All Blogs</p>
        </button>
        {memesdata.length > 0 ? (
          memesdata.map((blog, index) => (
            <div key={index} className="bg-slate-700 text-white p-4 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-pink-400">{blog.title}</h3>
              <p className="italic text-sm text-violet-300">{blog.category}</p>
              {blog.image && (
                <img
                  src={blog.image}
                  alt="Blog visual"
                  className="w-full h-64 object-cover my-2 rounded-lg"
                />
              )}
              <p className="text-white">{blog.content}</p>
              <p className="text-sm text-gray-400">Tags: {blog.tags.join(', ')}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-300">No blogs added yet.</p>
        )}

      </main>
    </div>
  )
}

export function Newblog({ handleClose, handleBlogSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    const newBlog = {
      title,
      content,
      category,
      tags: tags.split(',').map(tag => tag.trim()),
      image
    };
    handleBlogSubmit(newBlog);
  };

  return (
    <div
      className='w-screen h-screen fixed top-0 left-0 bg-[#00000080] flex justify-center items-center'
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='flex flex-col border-2 border-slate-900 rounded-2xl bg-slate-800 w-1/2 justify-center h-auto gap-2 p-4'
      >
        <h2 className='text-center text-3xl text-pink-500'><span>+</span> Create a Blog</h2>
        <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Blog Title' className='text-white bg-slate-400 rounded-sm' />
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder='Blog Content' rows="4" className='text-white rounded-sm bg-slate-400' />
        <select value={category} onChange={e => setCategory(e.target.value)} className='text-white rounded-sm bg-slate-400'>
          <option value="Technology">Technology</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <input value={tags} onChange={e => setTags(e.target.value)} type="text" placeholder='Tags (comma separated)' className='rounded-sm text-white bg-slate-400' />
        <input value={image} onChange={e => setImage(e.target.value)} type="url" placeholder='Image URL' className='text-white rounded-sm bg-slate-400' />
        <button type='button' className='bg-pink-700 text-white rounded-sm' onClick={handleSubmit}>
          Create Blog
        </button>
      </div>
    </div>
  );
}

