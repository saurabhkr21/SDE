'use client'
import Link from 'next/link';
import React from 'react'

interface SideBarProps {
    onSearch?: (searchTerm: string) => void;
    onCategoryFilter?: (category: string) => void;
}

export default function SideBar({ onSearch, onCategoryFilter }: SideBarProps) {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onSearch) {
            onSearch(e.target.value);
        }
    };

    const handleCategoryClick = (category: string) => {
        if (onCategoryFilter) {
            onCategoryFilter(category);
        }
    };

    return (
        <main className="w-auto h-full p-4 flex flex-col">
            <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Netflix Clone</h2>
            </div>
            
            {/* Search Input */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search movies..."
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
            </div>

            {/* Navigation Buttons */}
            <nav className="flex flex-col space-y-2">
                <button
                    onClick={() => handleCategoryClick('latest')}
                    className="w-full text-left px-4 py-2 rounded-lg  hover:bg-amber-500 transition-colors"
                >
                    Latest
                </button>
                <button
                    onClick={() => handleCategoryClick('popular')}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors"
                >
                    Popular
                </button>
                <button
                    onClick={() => handleCategoryClick('top_rated')}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors"
                >
                    Top Rated
                </button>
                <button
                    onClick={() => handleCategoryClick('upcoming')}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors"
                >
                    Upcoming
                </button>
                <button 
                    onClick={() => handleCategoryClick('all')}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors"
                >
                    All Movies
                </button>
                
                <Link href="/Favmovies">
                <button
                    onClick={() => handleCategoryClick('all')}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors"
                >
                    Favourite Movie
                </button></Link>
            </nav>
        </main>
    )
}
