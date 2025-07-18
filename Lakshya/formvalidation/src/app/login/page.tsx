'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { handleSubmitServer } from '../../../action';

export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const validate = () => {
        const errObj: { [key: string]: string } = {};
        if (name.trim().length < 3) errObj.name = 'Name must be at least 3 characters';
        if (!email.includes('@')) errObj.email = 'Email must be valid';
        if (password.length < 5) errObj.password = 'Password must be at least 5 characters';
        return errObj;
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError({});
        setLoading(true);

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            setLoading(false);
            return;
        }

        const res = await handleSubmitServer({ name, email, password });

        if (res.success) {
            document.cookie = `user=${name}; path=/; max-age=3600`; // Set cookie for 1 hour
            router.push('/');
        } else {
            setError({ msg: res.message });
        }

        setLoading(false);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                    <p className="text-gray-600">Join us today and get started</p>
                </div>

                <div className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-700 block"
                        >
                            Full Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${error.name
                                        ? 'border-red-300 bg-red-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            />
                            {error.name && (
                                <div className="absolute -bottom-5 left-0">
                                    <p className="text-red-500 text-xs font-medium">{error.name}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700 block"
                        >
                            Email Address
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${error.email
                                        ? 'border-red-300 bg-red-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            />
                            {error.email && (
                                <div className="absolute -bottom-5 left-0">
                                    <p className="text-red-500 text-xs font-medium">{error.email}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-700 block"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Create a secure password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${error.password
                                        ? 'border-red-300 bg-red-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            />
                            {error.password && (
                                <div className="absolute -bottom-5 left-0">
                                    <p className="text-red-500 text-xs font-medium">{error.password}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        onClick={handleSubmit}
                        className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-200 transform ${loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                            } focus:outline-none focus:ring-4 focus:ring-blue-200`}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Creating Account...
                            </div>
                        ) : (
                            'Create Account'
                        )}
                    </button>

                    {/* General Error Message */}
                    {error.msg && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                            <p className="text-red-700 text-sm font-medium text-center">{error.msg}</p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?
                        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
