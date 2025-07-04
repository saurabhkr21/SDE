import Link from "next/link";
import error from "@/app/error";

export default function profile() {
    return (
        <div>
            <h1>Profile</h1>
            <Link href={"/"}>Home</Link><br />
            <Link href="/about/profile/harsh">Harsh</Link><br />
            <Link href="/about/profile/Shyam">Shyam</Link><br />
            <Link href="/about/profile/harsh">Varun</Link><br />
            <Link href="/error">Wrong Page</Link>
        </div>
    );
}