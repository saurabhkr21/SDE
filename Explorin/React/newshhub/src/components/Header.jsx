import React from 'react'

export default function Header({categoryFilter, onCategoryChange, searchTerm, onSearch}) {
    const categories = [
        { value: "general", label: "General" },
        { value: "business", label: "Business" },
        { value: "entertainment", label: "Entertainment" },
        { value: "health", label: "Health" },
        { value: "science", label: "Science" },
        { value: "sports", label: "Sports" },
        { value: "technology", label: "Technology" },
    ];
    return (
        <div className='flex sticky top-0 z-50 w-full text-fuchsia-800  p-2'>
            <div className="flex flex-col sm:flex-row  w-full h-auto sm:h-12 p-2 justify-between items-center bg-amber-100 gap-2 sm:gap-4 rounded shadow-sm shadow-amber-600">
                <h1 className="text-3xl  sm:text-3xl  text-center sm:text-left  font-bold ">
                    NewsHub
                </h1>
                <div className='flex gap-3'>
                    <div  className='flex p-1 border w-[150px] sm:w-auto rounded'>
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={(e) => onSearch(e.target.value)}
                        placeholder="Search news..."
                        className="px-1 focus:outline-none"

                    />
                    </div>
                <select
                    value={categoryFilter}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    className="px-2  py-1 rounded bg-white "
                >
                    {categories.map((category) => (
                        <option
                        key={category.value}
                        value={category.value}
                        >
                            {category.label}
                        </option>
                    ))}
                </select>
                </div>

            </div>
        </div>
    )
}
