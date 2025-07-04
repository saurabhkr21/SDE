export default function Layouts() {
    return (
        <div className="flex flex-col bg-slate-600 h-screen gap-7 p-4">
            <div className="flex flex-col gap-5 bg-slate-500 rounded-xl p-4">
                <h1>Layouts and Pages</h1>
                <span>
                    Next.js uses file-system based routing,
                    meaning you can use folders and files to define
                    routes. This page will guide you through how to create layouts and pages, and link between them.
                </span>
            </div>
            <div className="flex flex-col gap-5 bg-slate-500 rounded-xl p-4">
                <p>Creating a page</p>
                <span>
                    A page is UI that is rendered on a
                    specific route. To create a page, add a page
                    file inside the app directory and default export a
                    React component. For example, to create an index page (/):
                </span>
            </div>
            <div className="flex flex-col gap-5 bg-slate-500 rounded-xl p-4">
                <p>Creating a layout</p>
                <span>
                    A layout is UI that is shared between multiple pages. On navigation,
                    layouts preserve state, remain interactive, and do not rerender.
                </span>
                <span>
                    You can define a layout by default exporting a React component from a layout file.
                    The component should accept a children prop which can be a page or another layout.
                </span>
                <span>
                    For example, to create a layout that accepts your index page as child, add a layout file inside the app directory:
                </span>


            </div>
        </div>
    );
}