//@ts-nocheck
'use server';

import { redirect } from "next/navigation";

const users = [
    { name: "Lakshya", email: "saurabh7221@gmail.com", password: "12345" },
    { name: "Aarav", email: "aarav@gmail.com", password: "pass123" },
    { name: "Ishita", email: "ishita@gmail.com", password: "welcome1" },
    { name: "Rohan", email: "rohan@gmail.com", password: "rohan@123" },
    { name: "Meera", email: "meera@gmail.com", password: "meera789" },
    { name: "Yuvraj", email: "yuvraj@gmail.com", password: "yuvi456" },
    { name: "Ananya", email: "ananya@gmail.com", password: "ana321" },
    { name: "Kabir", email: "kabir@gmail.com", password: "kabir007" },
    { name: "Tanya", email: "tanya@gmail.com", password: "tanya321" },
    { name: "Dev", email: "dev@gmail.com", password: "devpass" },
    { name: "Anurag", email: "anurag123@gmail.com", password: "anurag@123" }
];


export async function handleSubmit(obj) {
    // await wait(1000);
    // console.log('Form submitted');
    // const name = formData.get("name");
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const foundUser = users.find(user =>user.name===name && user.email === email && user.password === password);
    // console.log('User found:', foundUser);

    // if (foundUser) {
    //     console.log('User found:', foundUser);
    //     redirect('/formvalidation');
    // }
    // else {
    //     console.log('User not found');
    //     // alert('Invalid credentials');
    //     return { error: 'Invalid credentials' };
    // }

    await wait(1000);

    const username = obj.name;
    const email = obj.email;
    const password = obj.password;
    console.log(obj);


    return{
        success:false,
        message: 'The user already exists'
    }

}

export async function handleClick(){
    console.log("received a request");
    console.log()
}