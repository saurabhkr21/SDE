//@ts-nocheck
"use client";
import { signUpHandler } from "@/action";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        const errorObj = {};
        if (name.length < 3) {
            errorObj.name = "Name should be at least 3 characters long";
        }
        if (email.length < 5) {
            errorObj.email = "Email should be at least 5 characters long";
        }
        if (password.length < 8) {
            errorObj.password = "Password should be at least 8 characters long";
        }
        if (errorObj.name || errorObj.email || errorObj.password) {
            setError(errorObj);
        } else {
            const obj = { name, email, password };
            const response = await signUpHandler(obj);
            if (!response?.success) {
                errorObj.message = response?.message;
                setError(errorObj);
            } else {
                setError({});
                router.push(response.redirect || "/");
            }
        }
    }

    return (
        <div className="flex flex-col italic items-center justify-center w-full h-screen">
            <form className="flex flex-col w-full h-full" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold">Login</h1>
                <input
                    type="text"
                    placeholder="username"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {error.name && <p className="text-red-500">{error.name}</p>}
                <input
                    type="email"
                    placeholder="enter your email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error.email && <p className="text-red-500">{error.email}</p>}
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error.password && <p className="text-red-500">{error.password}</p>}
                <button type="submit" className="bg-blue-500 text-white mt-2">
                    Submit
                </button>
                {error.message && (
                    <p className="text-red-500">{error.message}</p>
                )}
            </form>
        </div>
    );
}
