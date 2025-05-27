import React, { useState } from 'react'
import Sidebar from './Sidebar';

export default function ComponentBar() {
    const [open, setOpen] = useState(false);
    function close() {
        setOpen(false);
    }

    return (

        <div
            className='flex gap-1 overflow-auto w-full bg-[#232F3E] text-white text-sm font-normal whitespace-nowrap relative'>
            <Sidebar open={open} close={close} />
            <div
                className='p-2 flex justify-center items-center gap-2 hover:border-white border border-transparent text-nowrap'
                onClick={() => setOpen(true)}
            >
                <img width="17" height="8px"
                    src="https://img.icons8.com/material-outlined/FFFFFF/menu--v1.png" alt="menu--v1" />
                All
            </div>

            {data.map((items,idx) => (<div
            key={items+idx}
            className='px-2 py-2 hover:border-white border border-transparent'>
                {items}
            </div>
            ))}
        </div>
    );
}

const data = [
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