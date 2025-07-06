'use client';


import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <div className="flex bg-slate-600  p-2 gap-2 ">
            <ul className="flex">
                <li className={pathname === '/' ?
                'text-white bg-gray-800 px-3 py-2 rounded-md '
                    : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'}>
                    <Link href="/">Home</Link>
                </li>
                <li className={pathname === '/detail' ? 'text-white bg-gray-400 px-3 py-2 rounded-md '
                    : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'}><Link href="/detail">Detail</Link>
                </li>
                <li className={pathname === '/docs' ?
                'text-white bg-gray-800 px-3 py-2 rounded-md '
                    : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'}>
                    <Link href="/docs">Docs</Link>
                </li>
                <li className={pathname === '/search' ?
                'text-white bg-gray-800 px-3 py-2 rounded-md '
                    : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'}>
                    <Link href="/search">Search</Link>
                </li>
                <li className={pathname === '/search/us' ?
                'text-white bg-gray-800 px-3 py-2 rounded-md '
                    : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'}>
                    <Link href="/search/us">Us</Link>
                </li>

            </ul>
        </div>
    );
}