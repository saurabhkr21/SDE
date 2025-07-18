//@ts-nocheck
"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export  async function setCookies() {
    const userCookies =await cookies();
    const name=userCookies.set('name', 'Lakshmi');
    redirect('/');
}

export async function logout() {
    const userCookies =await cookies();
    userCookies.delete('name');
    redirect('/login');
}