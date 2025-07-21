//@ts-nocheck
"use server";

import { cookies } from "next/headers";
const users = [
    { name: "Saurabh Kumar", email: "saurabh7221@gmail.com", password: "12345678" },
    {
        name: "Aishwarya Verma",
        email: "aishwaryaverma284@gmail.com",
        password: "87654321",
    },
];

export async function signUpHandler(obj) {
    // Handle signup logic here
    const existing = users.find((user) => user.email === obj.email && user.password === obj.password);
    if (!existing) {
        return {
            success: false,
            message: "The email or password is incorrect",
        };
    } else {
        // Set cookie for authentication
        cookies().set("password", obj.password, { path: "/", httpOnly: false });
        return {
            success: true,
            message: "welcome to the job portal",
            redirect: "/",
        };
    }
}
