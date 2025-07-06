'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface ImageItem {
    name: string;
    url: string;
}

export default function ImageGallery() {
    const [imageArr, setImageArr] = useState<ImageItem[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [nickname, setNickname] = useState("");
    const [imageError, setImageError] = useState<string | null>(null);

    const searchParams = useSearchParams();
    const imageLink = searchParams.get("url");

    function handleAddImage() {
        if (!imageUrl.trim() || !nickname.trim()) {
            alert("Please fill in both fields");
            return;
        }

        const obj: ImageItem = {
            name: nickname.trim(),
            url: imageUrl.trim()
        };

        setImageArr(prev => [...prev, obj]);
        setImageUrl("");
        setNickname("");
        setShowForm(false);
    }

    function handleImageError() {
        setImageError("Failed to load image. Please check the URL.");
    }

    function handleImageLoad() {
        setImageError(null);
    }

    return (
        <div className="p-4">
            <div className="mb-4 space-x-2">
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="border-2 bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded transition-colors"
                >
                    {showForm ? "Cancel" : "Add Image"}
                </button>
                <Link
                    href="/"
                    className="border-2 border-gray-300 hover:bg-gray-100 px-4 py-2 rounded transition-colors inline-block"
                >
                    Reset
                </Link>
            </div>

            {showForm && (
                <div className="mb-4 p-4 border rounded-lg bg-gray-50">
                    <div className="space-y-2">
                        <input
                            type="url"
                            placeholder="Enter image URL"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Enter image name"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            className="w-full p-2 border rounded"
                        />
                        <button
                            onClick={handleAddImage}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
                        >
                            Add Image
                        </button>
                    </div>
                </div>
            )}

            {imageArr.length > 0 && (
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Image Gallery:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {imageArr.map((value, index) => {
                            const hrefUrl = "/?url=" + encodeURIComponent(value.url);
                            return (
                                <div key={index} className="border p-2 rounded hover:bg-gray-50">
                                    <Link href={hrefUrl} className="text-blue-600 hover:underline">
                                        {value.name}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {imageLink && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Preview:</h3>
                    {imageError && (
                        <div className="text-red-600 mb-2">{imageError}</div>
                    )}
                    <img
                        src={imageLink}
                        alt="Preview"
                        width="200"
                        height="200"
                        onError={handleImageError}
                        onLoad={handleImageLoad}
                        className="border rounded shadow-sm"
                    />
                </div>
            )}
        </div>
    );
}
