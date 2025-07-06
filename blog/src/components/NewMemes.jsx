import { useState } from "react";

export function NewMemes({ handleClose, handleMemeSubmit }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Technology");
    const [tags, setTags] = useState("");
    const [image, setImage] = useState("");
    const [imageValid, setImageValid] = useState(false);

    const onsubmitClick = (e) => {
        e.preventDefault();
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
        setImageValid(false);
    };

    return (
        <div
            className='min-w-full min-h-full bg-black bg-opacity-50 fixed top-0 left-0 flex justify-center items-center z-50'
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className='flex flex-col w-[80%]  border-2 lg:w-[500px] sm:w-[60%] max-h-screen  border-slate-900  rounded-4xl bg-slate-900  justify-center  gap-3 p-8'
            >
                <div className='flex justify-between items-center gap-2 '>
                    <h2 className='text-center  text-pink-500 text-3xl'><span>+</span>Create a memes</h2>
                    <img width="25" height="25" src="https://img.icons8.com/material-sharp/FFFFFF/multiply.png" alt="multiply" onClick={handleClose} />
                </div>
                <form className='flex flex-col gap-3 text-xl p-3 ' onSubmit={onsubmitClick}>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Memes Title' className='text-white p-2 bg-slate-600 rounded-sm' />
                    <textarea value={content} onChange={e => setContent(e.target.value)} placeholder='Memes Content' rows="2" className='text-white p-3 rounded-sm bg-slate-600' />
                    <select value={category} onChange={e => setCategory(e.target.value)} className='text-white rounded-sm p-3 bg-slate-600'>
                        <option value="Technology">Technology</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        <option value="Lifestyle">Lifestyle</option>
                    </select>
                    <input value={tags} onChange={e => setTags(e.target.value)} type="text" placeholder='Tags (comma separated)' className='rounded-sm p-2 text-white bg-slate-600' />
                    {!imageValid && (
                        <input
                            value={image}
                            onChange={e => setImage(e.target.value)}
                            type="url"
                            placeholder='Image URL'
                            className='text-white rounded-sm p-3 bg-slate-600'
                        />
                    )}
                    {image && (
                        <div className="w-full mt-2">
                            <img
                                src={image}
                                alt="Preview"
                                className="w-screen object-fill h-auto max-h-38  border border-gray-300 rounded-md"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        </div>
                    )}
                    {imageValid && (
                        <button
                            type="button"
                            onClick={() => {
                                setImage('');
                                setImageValid(false);
                            }}
                            className='text-white text-sm underline hover:text-pink-400'
                        >
                            Change Image
                        </button>
                    )}
                    <button type='submit' className='bg-pink-700 text-white p-3 rounded-sm' >
                        Create Memes
                    </button>
                </form>
            </div>
        </div>
    );
}