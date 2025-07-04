import Link from "next/link";

export default function NotFound(){
    return(
        <div className="flex flex-col gap-7 h-screen justify-center bg-blue-300 items-center p-4">
            <h2>Page Not Found</h2>
            <span>Try search</span>
            <Link href="/" className="bg-amber-300 rounded-3xl p-3">Home</Link>
        </div>
    )
}