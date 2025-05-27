import React from 'react'

export default function Sidebar({ open = false, close = () => { } }) {
    return open ? (
        <div
            onClick={close}
            className='h-screen w-screen fixed top-0 left-0 z-[100] bg-[#00000040] flex justify-center--x items-center--x'
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className='h-screen w-[364px] bg-white text-black text-sm font-normal whitespace-nowrap'
            >
                <div
                    className="bg-[#232F3E] h-13 text-white text-lg font-bold flex justify-start items-center gap-2 px-8 py-4"
                >
                    <img
                        className="size-6 bg-white rounded-full"
                        src="https://img.icons8.com/232F3E/fluency-systems-filled/96/user.png"
                        alt="user"
                    />
                    Hello User!
                </div>
                <div className="flex flex-col gap-1 overflow-auto h-full flex-1 self-stretch">
                    {sidebarData.map(({ title, data }) => (
                        <SidebarBlock title={title} data={data} />
                    ))}
                </div>
            </div>
        </div>
    ) : null;
}

function SidebarBlock({ title = "", data = [] }) {
    return (
        <div className="flex flex-col gap-1 px-8 py-4 border-b border-gray-300">
            <span className="text-lg font-bold">{title}</span>
            {data.map(({ label, chevron }) => (
                <SidebarBlockItem content={label} chevron={chevron} />
            ))}
        </div>
    );
}



function SidebarBlockItem({ content, chevron = false }) {
    return (
        <div className="py-2 hover:bg-[#F3F3F3] flex justify-center items-center gap-2">
            <span className="flex-1 text-sm font-medium">{content}</span>
            {chevron ? (
                <img
                    className="size-4"
                    src="https://img.icons8.com/879596/metro/26/chevron-right.png"
                    alt="expand-arrow--v1"
                />
            ) : null}
        </div>
    );
}


const sidebarData = [
    {
        title: "Trending",
        data: [
            { label: "Bestsellers" },
            { label: "New Releases" },
            { label: "Movers and Shakers" },
        ],
    },
    {
        title: "Digital Content and Devices",
        data: [
            { label: "Echo & Alexa", chevron: true },
            { label: "Fire TV", chevron: true },
            { label: "Kindle E-Readers & eBooks", chevron: true },
            { label: "Audible Audiobooks", chevron: true },
            { label: "Amazon Prime Video", chevron: true },
            { label: "Amazon Prime Music", chevron: true },
        ],
    },
    {
        title: "Your Account",
        data: [
            { label: "Your Orders", chevron: true },
            { label: "Your Account", chevron: true },
            { label: "Your Lists", chevron: true },
            { label: "Your Recommendations", chevron: true },
            { label: "Your Prime Membership", chevron: true },
            { label: "Your Subscribe & Save Items", chevron: true },
        ],
    },
    {
        title: "Shop by Category",
        data: [
            { label: "Mobiles, Computers", chevron: true },
            { label: "TV, Appliances, Electronics", chevron: true },
            { label: "Men's Fashion", chevron: true },
            { label: "Women's Fashion", chevron: true },
            { label: "See all" },
        ],
    },
    {
        title: "Programs & Features",
        data: [
            { label: "Amazon Pay" },
            { label: "Gift Cards & Mobile Recharges", chevron: true },
            { label: "Amazon Launchpad" },
            { label: "Amazon Business" },
            { label: "See all" },
        ],
    },
    {
        title: "Help & Settings",
        data: [
            { label: "Your Account" },
            { label: "Customer Service" },
            { label: "Sign Out" },
        ],
    },
];