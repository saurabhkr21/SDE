'use server';

import { redirect } from 'next/navigation';

type User = {
    name: string;
    email: string;
    password: string;
};

const users: User[] = [
    { name: 'Saurabh Kumar', email: 'saurabh7221@gmail.com', password: '12345' },
    { name: 'Aishwarya Verma', email: 'aishwarya284@gmail.com', password: 'aish123' },
    { name: 'Aarav', email: 'aarav@gmail.com', password: 'pass123' },
    { name: 'Ishita', email: 'ishita@gmail.com', password: 'welcome1' },
    { name: 'Rohan', email: 'rohan@gmail.com', password: 'rohan@123' },
    { name: 'Meera', email: 'meera@gmail.com', password: 'meera789' },
    { name: 'Yuvraj', email: 'yuvraj@gmail.com', password: 'yuvi456' },
    { name: 'Ananya Sharma', email: 'ananya290@gmail.com', password: 'ana321' },
    { name: 'Kabir', email: 'kabir@gmail.com', password: 'kabir007' },
    { name: 'Tanya', email: 'tanya@gmail.com', password: 'tanya321' },
    { name: 'Dev', email: 'dev@gmail.com', password: 'devpass' },
    { name: 'Anurag', email: 'anurag123@gmail.com', password: 'anurag@123' },
];

export async function handleSubmitServer(obj: User): Promise<{ success: boolean; message: string }> {
    const user = users.find(
        (u) => u.name === obj.name && u.email === obj.email && u.password === obj.password
    );

    if (user) {
        return {
            success: true,
            message: 'User authenticated successfully!',
        };
    } else {
        return {
            success: false,
            message: 'Invalid credentials. Please check your name, email, and password.',
        };
    }
}
