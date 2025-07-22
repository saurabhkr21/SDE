//@ts-nocheck

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const cookies = document.cookie.split("; ");
  const nameCookie = cookies.find((cookie) => cookie.startsWith("name="));
  const name = nameCookie ? nameCookie.split("=")[1] : "Guest";
  function handleLogOut() {
    document.cookie =
      "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    if(confirm("Are you sure you want to log out?")) {
      router.push("/login");
    }
    console.log("Logged out successfully");
  }
  return (
    <div className="flex  items-center gap-2 p-3 bg-gray-100 sticky top-0 shadow-md z-10">
      <div className="flex w- items-center justify-evenly  gap-1">
        <select className="border px-2 py-1 rounded-md"
        onChange={(e)=>(e.target.value ==="logout"? handleLogOut():null)}>
          <option value="Personal">{name}</option>
          <option value="professional">Professional</option>
          <option value="logout">Logout</option>
        </select>
        <Link href="/">
          <button className="border bg-blue-200 rounded-xl p-1">Home</button>
        </Link>
        <Link href="/saved">
          <button className="border bg-blue-200 rounded-xl p-1 md:text-[15px] text-[10px]">
            Saved Jobs
          </button>
        </Link>
      </div>
      <form
        action={"/jobs"}
        className="flex flex-1 items-center gap-2 bg-amber-100"
      >
        <input
          type="text"
          placeholder="search jobs"
          name="query"
          className="border flex flex-1 px-1 py-1 rounded-md"
        />
      </form>

      <div className="sm:flex items-center hidden sm:gap-1 md:text-[15px] text-[10px] gap-4">
        <button className="border px-2 py-1 rounded-md">Api MarketPlace</button>
        <button className="border px-2 py-1 rounded-md">Orgs</button>
        <button className="border px-2 py-1 rounded-md">studio</button>
        <button className="border px-2 py-1 rounded-md">Api</button>
      </div>
    </div>
  );
}
