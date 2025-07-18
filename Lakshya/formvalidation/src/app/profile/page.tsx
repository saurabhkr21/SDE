'use client';
import { useRouter } from "next/navigation";
import Router from "next/router";
import { useEffect, useState } from "react";

const dummyDetails: Record<string, { email: string; age: number; city: string }> = {
    Saurabh: { email: "saurabh7221@gmail.com", age: 22, city: "Motihari" },
    Aishwarya: { email: "aishwarya290@gmail.com", age: 22, city: "Motihari" },
    Aarav: { email: "aarav@gmail.com", age: 25, city: "Mumbai" },
    Ishita: { email: "ishita@gmail.com", age: 21, city: "Bangalore" },
    Rohan: { email: "rohan@gmail.com", age: 24, city: "Pune" },
    Meera: { email: "meera@gmail.com", age: 23, city: "Chennai" },
    Yuvraj: { email: "yuvraj@gmail.com", age: 26, city: "Hyderabad" },
    "Ananya Sharma": { email: "ananya290@gmail.com", age: 22, city: "Kolkata" },
    Kabir: { email: "kabir@gmail.com", age: 27, city: "Jaipur" },
    Tanya: { email: "tanya@gmail.com", age: 20, city: "Ahmedabad" },
    Dev: { email: "dev@gmail.com", age: 28, city: "Goa" },
    Anurag: { email: "anurag123@gmail.com", age: 23, city: "Lucknow" },
};

export default function ProfilePage() {
    const [user, setUser] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Get user from cookie
        const match = document.cookie.match(/user=([^;]+)/);
        const username = match ? decodeURIComponent(match[1]) : null;
        setUser(username);

        if (!username) {
            router.replace("/login");
        }
    }, [router]);

    if (!user) {
        return null;
    }

    const details = dummyDetails[user] || {
        email: "unknown@example.com",
        age: "N/A",
        city: "Unknown",
    };

    function handleLogout() {
        document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        router.replace("/login");
    }
    const goBack = () => {
        router.back();
    }
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <header>
                <h1 className="text-3xl font-extrabold mb-6 text-gray-900">Profile</h1>
            </header>

            <section className="bg-white p-8 rounded-lg shadow-lg w-80 max-w-full text-gray-800">
                <p className="text-xl mb-4">
                    Welcome, <span className="font-semibold">{user}</span>!
                </p>

                {/* Navigation */}
                <button
                    type="button"
                    onClick={goBack}
                    className="text-blue-600 hover:text-blue-800 underline mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                    aria-label="Go back to previous page"
                >
                    &larr; Go Back
                </button>

                {/* User Info */}
                <dl className="mb-6 space-y-2">
                    <div>
                        <dt className="font-semibold">Email:</dt>
                        <dd>{details.email}</dd>
                    </div>
                    <div>
                        <dt className="font-semibold">Age:</dt>
                        <dd>{details.age}</dd>
                    </div>
                    <div>
                        <dt className="font-semibold">City:</dt>
                        <dd>{details.city}</dd>
                    </div>
                </dl>

                {/* Logout */}
                <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                    Logout
                </button>
            </section>
        </main>
    );
}
