//@ts-nocheck

import Link from "next/link";
import Button from "../components/Button";

export default function page() {
    return (
        <div>
            <form action=""></form>
            <Link href="/">Back to Home</Link>
            <h1 className="text-2xl font-bold">Login Page</h1>
            <Button/>
        </div>
    )
}
