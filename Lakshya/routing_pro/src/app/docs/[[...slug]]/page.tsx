'use client';

import Link from "next/link";

export default function DocsPage({ params }: { params: { slug?: string[] } }) {
    const slugArray = params.slug || [];

    // Build breadcrumbs
    const breadcrumbs = slugArray.map((segment, index) => {
        const href = `/docs/${slugArray.slice(0, index + 1).join("/")}`;
        const label = decodeURIComponent(segment.charAt(0).toUpperCase() + segment.slice(1));
        return (
            <span key={index}>
                <Link href={href} className="text-blue-600 underline hover:text-blue-800">{label}</Link>
                {index < slugArray.length - 1 ? " / " : ""}
            </span>
        );
    });

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Documentation Page</h1>
            <div className="my-4 text-gray-700">
                <strong>Path:</strong> {slugArray.length === 0 ? "Home" : breadcrumbs}
            </div>

            <div className="mt-4 border p-4 rounded bg-gray-50">
                <p>This is the content for:</p>
                <code className="text-sm bg-gray-200 p-1 rounded">
                    /docs/{slugArray.join("/")}
                </code>
            </div>
        </div>
    );
}
