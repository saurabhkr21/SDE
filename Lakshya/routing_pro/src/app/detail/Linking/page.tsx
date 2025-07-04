export default function Linking() {
    return (
        <div className="flex bg-slate-600 h-screen p-3">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1 bg-slate-500 rounded-xl p-3">
                <p>Menu</p>
                <p>App Router</p>
                <p>Getting Started</p>
                <p>Linking and Navigating</p>
            </div>
            <div className="flex flex-col gap-1 bg-slate-500 rounded-xl p-3">
                <p>Linking and Navigating</p>
                <span>In Next.js, routes are rendered on the server by default.
                    This often means the client has to wait for a server response before a new route can be shown.
                    Next.js comes with built-in prefetching, streaming, and client-side transitions ensuring navigation stays fast and responsive.
                </span>
                <span>
                    This guide explains how navigation works in Next.js and how you can optimize it for dynamic routes and slow networks.
                </span>
            </div >
            <div className="flex flex-col gap-1 bg-slate-500 rounded-xl p-3">
                <p>How navigation works</p>
                <span>To understand how navigation works in Next.js, it helps to be familiar with the following concepts:
                </span>
                <ol>
                    <li>Server Rendering</li>
                    <li>Prefetching</li>
                    <li>Streaming</li>
                    <li>Client-side transitions</li>
                    <li>Server Rendering</li>
                </ol>
            </div>
            </div>
        </div>
    );
}