export default function about() {
    return (
        <div className="flex flex-col p-2">
            <div className="flex flex-col">
                <p className="bg-amber-100 rounded-xl p-2">
                    <h2>Core Component of Next.js</h2>
                    <dl className="flex flex-col bg-amber-50 rounded-xl p-1 gap-1.5">
                        <dt>File-based Routing</dt>
                        <dd>Create pages just by adding files inside the /pages or /app directory.</dd>
                        
                        <dt>Server Side Rendering (SSR)</dt>
                        <dd>Render content on the server before sending it to the browser for better SEO and performance.</dd>
                        
                        <dt>Static Site Generation (SSG)</dt>
                        <dd>Pre-render pages at build time—great for blogs or marketing sites.</dd>
                        
                        <dt>Cdtent-Side Rendering (CSR)</dt>
                        <dd>Load pages dynamically in the browser, like a standard React app.</dd>
                        
                        <dt>API Routes</dt>
                        <dd>Build backend endpoints directly inside your project (/pages/api).</dd>
                        
                        <dt>Image Optimization</dt>
                        <dd>Built-in "<image />" component for responsive, lazy-loaded images.</dd>
                        
                        <dt>App Router </dt>
                        <dd>Uses app/ folder for routing, with better layouts, loading UI, and React Server Components.</dd>
                    </dl>
                </p>

            </div>
        </div>
    );
}