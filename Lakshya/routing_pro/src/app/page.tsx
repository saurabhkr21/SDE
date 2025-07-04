import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex  w-full h-screen gap-3 justify-between  bg-amber-200 p-4">
      <div className="flex flex-col  justify-center gap-4">
        <div className="flex flex-col">
          <h1>Welcome to next.js Class revision</h1><br />
          <p>Next.js is a React-based web framework
            and is user-friendly web application which is
            developed by Vercel</p>
        </div>
        <div className="flex  ">
          <span className="bg-slate-300 rounded-2xl p-1">Core Component Of Next.js --
            <Link href="/about"><button className="bg-slate-400 rounded-2xl p-1">
              Click Here to Know</button></Link>
          </span>
        </div>
        <div className="flex ">
          <button className="bg-amber-300 rounded-xl p-1"><Link href="./detail">Next Step:- Click </Link>
          </button>
        </div>
        <Link href="/Layout/asfdabn">error
        </Link>

        <div className="flex  bg-blue-300 ">
          <form action="/search" method="GET" className="flex flex-col space-y-4">
            <input type="text" name="term" placeholder="Enter your name" />
            <input type="email" name="mail" placeholder="Enter your email" />
            <input type="phone" name="mob" placeholder="Enter your mob nuo." />
            <button type="submit">submit</button>
          </form>

        </div>
      </div>


      {/* <Link href="/profile/search">Profile</Link> */}

    </div>
  );
}
