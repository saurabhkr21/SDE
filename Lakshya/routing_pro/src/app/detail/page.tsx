import Link from "next/link";

export default function detail() {
    return (
        <div className="flex flex-col bg-slate-600 w-auto h-screen ">
            <div className="flex">
                <h1 className="p-2 text-white text-2xl">Getting Started</h1>
            </div>
            <div className="flex flex-wrap items-center justify-center  h-full gap-4 w-auto">

                <Link href="./detail/Installation" className="w-[40%] overflow-auto lg:w-[33%] lg:h-[40%] bg-slate-500 rounded-2xl opacity-70 p-3 border-b-amber-800 h-[30%]">
                    <h1 className="text-2xl">Installation</h1>
                    <span className="text-sm">
                        Learn how to create a new Next.js application with the 'create-next-app'
                        CLI,and set up TypeScript, ESLint,...
                    </span>
                </Link>
                <Link href="./detail/Linking" className="text-sm w-[40%] lg:w-[33%] lg:h-[40%] bg-slate-500 rounded-2xl opacity-70 p-3 border-b-amber-800 h-[30%]">
                    <h1 className="text-2xl">Linking</h1>
                    <span>
                        Learn how to create a new Next.js application with the 'create-next-app'
                        CLI,and set up TypeScript, ESLint,...
                    </span>
                </Link>
                <Link href="./detail/Layouts" className="w-[40%] overflow-hidden  lg:w-[33%] lg:h-[40%] bg-slate-500 rounded-2xl opacity-70 p-3 border-b-amber-800 h-[30%]">
                    <h1 className="text-2xl">Layout</h1>
                    <span className="text-sm">
                        Next.js uses file-system based routing,
                        meaning you can use folders and files to
                        define routes. This page will guide you
                        through how to create layouts and pages,
                        and link between them....
                    </span>
                </Link>
                <Link href="./detail/Installation" className="w-[40%] lg:w-[33%] lg:h-[40%] bg-slate-500 rounded-2xl opacity-70 p-3 border-b-amber-800 h-[30%]">
                    <h1 className="text-2xl">Project_struct</h1>
                    <span>
                        Learn how to create a new Next.js application with the 'create-next-app'
                        CLI,and set up TypeScript, ESLint,...
                    </span>
                </Link>


            </div>
        </div>
    )
}
