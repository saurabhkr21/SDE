//@ts-nocheck
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const users = [
    { name: "Saurabh Kumar", email: "saurabh7221@gmail.com", apiKey: "12345678" },
    {
        name: "Aishwarya Verma",
        email: "aishwarya284@gmail.com",
        apiKey: "87654321",
    },
];

export async function signUpHandler(obj) {
    // Handle signup logic here
    const existing = users.find((user) => user.email === obj.email);
    // https://omdbapi.com/?apikey=${apiKey}&i=tt0954542
    const apiKey = obj.apiKey;
    if (existing) {
        // User already exists
        return {
            success: false,
            message: "The email is already registered",
        };
    } else {
        // Add new user
        const response = await fetch(
            `https://omdbapi.com/?apikey=${apiKey}&i=tt0954542`
        );
        const data = await response.json();
        if (data.Response === "False") {
            // users.push({
            //     name: obj.name,
            //     email: obj.email,
            //     apiKey: obj.apiKey
            // });
            return {
                success: false,
                message: "Invalid API Key",
            };
        }
    }

    const userCookies = await cookies();
    userCookies.set("apiKey", apiKey);
    redirect("/");
}
