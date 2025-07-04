import Link from "next/link";

export default function Header(){
    return(
        <div className="flex bg-amber-500 p-2 gap-2 ">
            <Link href="/">Home</Link>
            <Link href="/detail">Detail</Link>
            main
        </div>
    );
}