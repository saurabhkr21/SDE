import React from 'react'

export default function ComponentBar() {
    return (
        <div className='flex  gap-1 m-auto bg-[#232f3e] text-white'>
            {data.map((items => <div className='px-2 py-2 hover:border-white border border-transparent'>
                {items}
            </div>
        ))}
        </div>
    );
}

const data = [
    "All",
    "Fresh",
    "Electronics",
    "Today's Deals",
    "MX Player",
    "Sell",
    "Gift Cards",
    "Amazon Pay",
    "Buy Again",
    "AmazonBasics",
    "Gift Ideas",
    "Books",
    "Home Improvement",
    "Home Kitchen",
]