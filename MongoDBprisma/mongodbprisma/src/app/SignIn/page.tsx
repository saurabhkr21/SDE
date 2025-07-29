"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const router = useRouter();


    async function handleSubmit(e){
        e.preventdefault();
    }

    // async function handleSubmit(e: FormEvent) {
    //     e.preventDefault();
    //     setError(null);
    //     setSuccess(null);
    //     try {
    //         const user = await login(email, password);
    //         if(user?.user) {
    //             setSuccess("Login succesfully!");
    //             router.push("/"); // Redirect to home page after successful signup
    //         }
    //         console.log("User signed up successfully:", user);
    //     }
    //     catch (error: any) {
    //         const errMsg= error?.message || "Error signing up.";
    //         if(errMsg.includes("invalid-credential")) {
    //             setError("invalid.");
    //         }
    //         // setError(error?.message || "Error signing up.");
    //         console.error("Error signing up:", error);
    //     }
    // }


    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Log In</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <p className="mb-2 text-gray-700 text-center">Enter your email and password to sign up</p>
                    {error && (
                        <div className="bg-red-100 text-red-700 px-3 py-2 rounded mb-2 text-sm text-center">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="bg-green-100 text-green-700 px-3 py-2 rounded mb-2 text-sm text-center">
                            {success}
                        </div>
                    )}
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
                        Email:
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            autoComplete="email"
                            required
                        />
                    </label>
                    <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">
                        Password:
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            autoComplete="new-password"
                            required
                        />
                    </label>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded mt-2 transition"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </main>
    );
}
