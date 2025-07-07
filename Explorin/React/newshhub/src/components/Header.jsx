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
            <div className="flex w-full h-12 p-2 justify-between items-center bg-amber-100 gap-2 rounded shadow-sm shadow-amber-600">
                <h1 className="text-3xl  font-bold ">
                    NewsHub
                </h1>
                <div  className='flex p-1 border rounded'>
                    <input
                        type="search"
                        value={searchTerm}
                        onChange={(e) => onSearch(e.target.value)}
                        placeholder="Search news..."
                        className="px-2 "

                    />
                    <img width="25" height="20" src="https://img.icons8.com/ios-glyphs/ffffff/search--v1.png" alt="search--v1"/>
                </div>
                <select
                    value={categoryFilter}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    className="px-3 py-1 rounded bg-white "
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
    )
}
