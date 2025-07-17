//@ts-nocheck
'use client';

import Link from "next/link";
import { useState } from "react";
export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading
        setError({});
        const errObj = {};
        if (name.length < 3) {
            errObj.name = ('Name must be at least 5 characters long');
        }
        if (!email.includes('@')) {
            errObj.email = ('Email must be valid');

        }
        if (password.length < 5) {
            errObj.password = ('Password must be at least 5 characters long');
        }
        if (errObj.name || errObj.email || errObj.password) {
            setError(errObj);
            return;
        } else {
            const obj = {
                name: name,
                email: email,
                password: password
            }
            const res = await handleSubmit(obj);
            console.log(res);
            if (res.success) {
                alert(res.message);
            }
            else{
                alert(res.message);
                const err={
                    msg:res.massage
                }
                setError(errObj);
            }
            setLoading(false);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Form Validation</h1>

            <form onClick={handleSubmit}
                className="flex flex-col gap-2 w-96 p-4 border border-gray-300 rounded-lg shadow-md">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                {error.name && <p className="text-red-700 text-xs" >{error.name}</p>}
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                {error.email && <p className="text-red-700 text-xs">{error.email}</p>}
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                {error.password && <p className="text-red-700 text-xs">{error.password}</p>}
                <button loding>Submit</button>
            </form>
            {error.msg && <p>{error.msg}</p>}
        </div>
    );
}
