//@ts-nocheck
'use client';

import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  function handleSubmit(e) {
    setError({});
    e.preventDefault();
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
    if (Object.keys(errObj).length > 0) {
      setError(errObj);
      return;
    }else{
      
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Form Validation(Client side)</h1>
      <p>Welcome Once Again </p>
      <p>Page Redirected</p><Link href="/" className="bg-amber-300"><span>Go Back</span></Link>

      <form onClick={handleSubmit}
        className="flex flex-col gap-2 w-96 p-4 border border-gray-300 rounded-lg shadow-md">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        {error.name && <p className="text-red-700 text-xs" >{error.name}</p>}
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        {error.email && <p className="text-red-700 text-xs">{error.email}</p>}
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        {error.password && <p className="text-red-700 text-xs">{error.password}</p>}

        <button onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  );
}
