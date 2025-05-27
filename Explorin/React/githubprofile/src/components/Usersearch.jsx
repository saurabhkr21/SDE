import React, {  useEffect, useState } from "react";

export default function UserSearch({ handleSubmit = () => { } }) {

    const [input, setInput] = useState("");

    function submitFn(e = null) {
        e?.preventDefault();
        if (input) handleSubmit(e, input);
    }

    // useEffect(() => {
    //     let timer = setTimeout(submitFn, 850);
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [input]);

    return (
        <form
            onSubmit={submitFn}
            className="w-full flex  sm:flex-row gap-4 p-4 bg-slate-200 rounded-md shadow-md m-auto"
        >
            <input
                type="search"
                placeholder="Enter Github Username ..."
                className="border-gray-400 w-2.5 rounded-md px-4 py-2 border-2 flex-1"
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                onClick={submitFn}
                className="bg-green-500  text-white font-semibold px-4 py-2 rounded-md"
            >
                Search
            </button>
        </form>
    );
}