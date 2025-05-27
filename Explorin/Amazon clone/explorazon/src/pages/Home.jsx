import React from 'react'
import { productsData } from '../constants';
import { useNavigate } from 'react-router';

export default function Home() {
    return (
        <div className='w-full bg-slate-200 min-h-0 flex flex-col justify-start gap-2'>
            <div className='h-40 bg-amber-300  '></div>
            <div className='grid grid-cols-4 gap-3 p-1'>

                {data.map(({ title, data, redirect_label }, idx) => (
                    <MainCard1
                        key={title + idx}
                        data={data}
                        title={title}
                        redirect_label={redirect_label}
                    />
                ))}
            </div>
            <div className='px-[37px]'>
                <MainCard2
                    data={productsData.slice(0, 10)}
                    title="upto 70% off on Bestselling smartwatches"
                    redirect_label="see all offers"
                />
            </div>
        </div>
    )
}

function MainCard1({ data = [], title = "", redirect_label = "" }) {
    return (
        <div className="p-4  flex flex-col justify-start items-start min-w-70 gap-4 bg-white shadow-lg--x rounded-xs">
            <span className="text-xl font-bold ">{title}</span>
            {data.length > 1 ? (
                <div className="grid grid-cols-2 gap-5">
                    {data.map((sub,idx) => (
                        <SubCard1 data={sub} key={sub.img_link + idx} />
                    ))}
                </div>
            ) : data.length === 1 ? (
                <SubCard2 data={data[0]} />
            ) : null}
            <span className="text-xs font-medium text-[#2162A1]">
                {redirect_label}
            </span>
        </div>
    );
}

function MainCard2({ data = [], title = "", redirect_label = "" }) {
    return (
        <div className="w-full h-[285px] bg-white flex flex-col gap-4 justify-start items-start p-4 rounded-xs overflow-hidden">
            <span className="flex gap-4 items-center">
                <span className="text-xl font-bold ">{title}</span>
                <span className="text-sm font-medium text-[#2162A1]">
                    {redirect_label}
                </span>
            </span>
            <div className="h-full w-full flex flex-nowrap overflow-x-auto">
                {data.map((data,idx) => (
                    <SubCard2 data={data} className="w-full" key={data.img_link + idx}/>
                ))}
            </div>
        </div>
    );
}



function SubCard1({ data: { img_link, label } }) {
    return (
        <div className="flex flex-col items-start gap-1 ">
            <img
                src={img_link}
                alt="product-image"
                className="h-32 w-full object-cover rounded-md"
            />
            <span className="max-w-full text-sm font-medium truncate">{label}</span>
        </div>
    );
}

function SubCard2({ data }) {
    const navigate = useNavigate();
    return (
        <img
            src={data?.img_link}
            alt="product-image"
            className={` h-full w-fit aspect-auto object-cover rounded-md `}
            onClick={() => navigate(`/products/${data.product_id}`)}
        />
    );
}

const data = [
    {
        title: "Pick up where you left off",
        data: [
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
        ],
        redirect_label: "See more",
    },
    {
        title: "Pick up where you left off",
        data: [
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
        ],
        redirect_label: "See All Offers",
    },
    {
        title: "Pick up where you left off",
        data: [
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
        ],
        redirect_label: "See All deals",
    },
    {
        title: "Pick up where you left off",
        data: [
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
        ],
        redirect_label: "See All deals",
    },
    {
        title: "Pick up where you left off",
        data: [
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
        ],
        redirect_label: "See more",
    },
    {
        title: "Pick up where you left off",
        data: [
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
        ],
        redirect_label: "See All Offers",
    },
    {
        title: "Pick up where you left off",
        data: [
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
        ],
        redirect_label: "See All deals",
    },
    {
        title: "Pick up where you left off",
        data: [
            {
                img_link:
                    "https://m.media-amazon.com/images/I/41VM+D8AGWL._SY300_SX300_.jpg",
                label:
                    "Bajaj Dominar D 400 Ug 2 Motorcycle/Motorbike - Charcoal Black - Ex-Showroom",
            },
        ],
        redirect_label: "See All deals",
    },
];