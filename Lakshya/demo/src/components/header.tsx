import Link from "next/link";

export default function Header(){
    return(
        <div className=" flex  bg-slate-500 gap-4" id="header">
            <Link href="/" className="bg-slate">Home</Link>
            <Link href="/company/profile/tsd">company</Link>
        </div>
    )
}