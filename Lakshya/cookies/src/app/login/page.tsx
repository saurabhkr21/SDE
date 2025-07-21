//@ts-nocheck
"use client";
import Link from "next/link";
import Button from "../components/Button";
import { useState } from "react";
import { signUpHandler } from "../action";

export default function page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [error, setError] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        const errorObj = {};
        if (name.length < 3) {
            errorObj.name = "Name should be at least 3 characters long";
        }
        if (email.length < 5) {
            errorObj.email = "Email should be at least 5 characters long";
        }
        if (apiKey.length < 8) {
            errorObj.apiKey = "API Key should be at least 8 characters long";
        }
        if (errorObj.name || errorObj.email || errorObj.apiKey) {
            setError(errorObj);
        } else {
            //network request to server
            const obj = {
                name,
                email,
                apiKey
            }
            const response = await signUpHandler(obj);
            if (!response?.success) {
                errorObj.message = response?.message;
                setError(errorObj);
            }
        }
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form className="flex flex-col box-border " onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold">Login</h1>
                <input
                    type="text"
                    placeholder="username"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                {error && <p className="text-red-500">{error.name}</p>}
                <input
                    type="email"
                    placeholder="enter your email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="text-red-500">{error.email}</p>}

                <input
                    type="alphanumeric"
                    placeholder="text"
                    name="apiKey"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                />
                {error && <p className="text-red-500">{error.apiKey}</p>}

                <button type="submit" className="bg-blue-500 text-white">
                    submit
                </button>
                {error.message && (
                    <p className="text-red-500">{error.message}</p>
                )}
            </form>
        </div>
    );
}
