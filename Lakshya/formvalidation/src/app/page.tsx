// 'use client';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// import { useState } from 'react';

// import { useRouter } from 'next/navigation';
// import { handleSubmitServer } from '../../action';

// export default function Home() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState<{ [key: string]: string }>({});
//     const [loading, setLoading] = useState(false);

//     const router = useRouter();

//     const validate = () => {
//         const errObj: { [key: string]: string } = {};
//         if (name.trim().length < 3) errObj.name = 'Name must be at least 3 characters';
//         if (!email.includes('@')) errObj.email = 'Email must be valid';
//         if (password.length < 5) errObj.password = 'Password must be at least 5 characters';
//         return errObj;
//     };

//     async function handleSubmit(e: React.FormEvent) {
//         e.preventDefault();
//         setError({});
//         setLoading(true);

//         const validationErrors = validate();
//         if (Object.keys(validationErrors).length > 0) {
//             setError(validationErrors);
//             setLoading(false);
//             return;
//         }

//         const res = await handleSubmitServer({ name, email, password });

//         if (res.success) {
//             document.cookie = `user=${name}; path=/; max-age=3600`; // Set cookie for 1 hour
//             router.push('/profile');
//         } else {
//             setError({ msg: res.message });
//         }

//         setLoading(false);
//     }

//     return (
//         <div className="flex flex-col items-center justify-center h-screen">
//             <h1 className="text-xl font-bold mb-4">Form Validation</h1>

//             <form
//                 onSubmit={handleSubmit}
//                 className="flex flex-col gap-2 w-96 p-4 border border-gray-300 rounded-lg shadow-md"
//             >
//                 <label htmlFor="name">Name</label>
//                 <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
//                 {error.name && <p className="text-red-600 text-sm">{error.name}</p>}

//                 <label htmlFor="email">Email</label>
//                 <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//                 {error.email && <p className="text-red-600 text-sm">{error.email}</p>}

//                 <label htmlFor="password">Password</label>
//                 <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//                 {error.password && <p className="text-red-600 text-sm">{error.password}</p>}

//                 <button
//                     type="submit"
//                     disabled={loading}
//                     className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//                 >
//                     {loading ? 'Loading...' : 'Submit'}
//                 </button>

//                 {error.msg && <p className="text-red-700 text-sm mt-2">{error.msg}</p>}
//             </form>
//         </div>
//     );
// }
// app/page.js (Next.js App Router) or pages/index.js (Pages Router)
export default async function Home() {
    const cookieStore = cookies();
        const user = (await cookieStore).get("user")?.value;
    
        if (!user) {
            redirect("/login");
        }
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex flex-col">
            <nav className="flex items-center justify-between px-8 py-6 bg-white shadow">
                <div className="flex items-center space-x-2">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V6M5 12h14" />
                    </svg>
                    <span className="text-xl font-bold text-indigo-700">Cloudify</span>
                </div>
                <div>
                    <a href="#features" className="text-gray-700 hover:text-indigo-600 mx-4 font-medium">Features</a>
                    <a href="#pricing" className="text-gray-700 hover:text-indigo-600 mx-4 font-medium">Pricing</a>
                    <a href="#about" className="text-gray-700 hover:text-indigo-600 mx-4 font-medium">About</a>
                    
                    <a href="/profile" className="ml-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">Welcome {user}</a>
                </div>
            </nav>
            <section className="flex flex-col items-center justify-center flex-1 text-center py-20 px-4">
                <h1 className="text-5xl font-extrabold text-indigo-800 mb-4">Empower Your Workflow with Cloudify</h1>
                <p className="text-lg text-gray-700 max-w-2xl mb-8">Cloudify is your all-in-one productivity platform. Collaborate, organize, and automate tasks securely in the cloud. Trusted by teams of all sizes to move faster and smarter.</p>
                <div>
                    <a href="/signup" className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded shadow hover:bg-indigo-700 mr-4 transition">Get Started Free</a>
                    <a href="#features" className="inline-block px-8 py-3 bg-white text-indigo-700 border border-indigo-600 font-semibold rounded hover:bg-indigo-50 transition">Learn More</a>
                </div>
            </section>

            <section id="features" className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Features</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-indigo-50 p-6 rounded shadow">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Real-time Collaboration</h3>
                            <p className="text-gray-600">Work together with your team and clients in real-time. Share documents and manage workflows effortlessly.</p>
                        </div>
                        <div className="bg-indigo-50 p-6 rounded shadow">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Secure Cloud Storage</h3>
                            <p className="text-gray-600">All your files are securely stored and encrypted in the cloud, accessible from anywhere, anytime.</p>
                        </div>
                        <div className="bg-indigo-50 p-6 rounded shadow">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Automated Task Management</h3>
                            <p className="text-gray-600">Stay on top of tasks with intelligent reminders, automations, and seamless integration with your favorite tools.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="py-16 bg-gradient-to-r from-indigo-50 via-white to-blue-50">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Pricing</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <div className="bg-white border border-indigo-200 p-8 rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold mb-2">Starter</h3>
                            <span className="block text-3xl font-bold mb-4">$0</span>
                            <ul className="text-indigo-700">
                                <li>Basic Collaboration</li>
                                <li>1GB Storage</li>
                                <li>Email Support</li>
                            </ul>
                            <a href="/signup" className="mt-6 inline-block px-6 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">Get Started</a>
                        </div>
                        <div className="bg-indigo-600 p-8 rounded-lg shadow text-center text-white border-4 border-indigo-800">
                            <h3 className="text-xl font-semibold mb-2">Pro</h3>
                            <span className="block text-3xl font-bold mb-4">$9 <span className="text-base font-normal">/mo</span></span>
                            <ul>
                                <li>All Starter Features</li>
                                <li>Unlimited Storage</li>
                                <li>Priority Support</li>
                                <li>Advanced Automations</li>
                            </ul>
                            <a href="/signup" className="mt-6 inline-block px-6 py-2 bg-white text-indigo-700 rounded hover:bg-indigo-100">Try Pro</a>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="about" className="bg-white py-8 border-t mt-8 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Cloudify &mdash; Cloud Productivity Solutions. Made with ♥ by Cloudify Team.
            </footer>
        </main>
    );
}

