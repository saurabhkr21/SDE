import React from 'react'

export default function Header() {
  return (
    <div className='flex  items-center justify-between p-4 mx-3 rounded-b-2xl bg-gray-800 text-white sticky top-0 z-50'>
      <div className='flex items-center space-x-4'>
        <h1 className='text-2xl font-bold'>Prime Movie</h1>
        <button className=''>Home</button>
        <button>Movies</button>
        <button>TV shows</button>
        <button>Live TV</button><span>|</span>
        <button>Prime</button>
        <button>Subscription</button>
      </div>
      <div className='flex items-center space-x-2 '>
        <form className="flex flex-1 items-center space-x-2 border p-1 rounded-md">
            <input type="text" className='flex flex-1' placeholder='search your movies' />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </form>
      </div>

    </div>
  )
}
