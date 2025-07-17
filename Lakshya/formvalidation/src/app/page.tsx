//@ts-nocheck


import { handleSubmit } from "../../action"

export default function page() {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Form Validation</h1>
            <form action={handleSubmit}
                className="flex flex-col gap-2 w-96 p-4 border border-gray-300 rounded-lg shadow-md">

                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="name"/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email"/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />
                <input type="hidden" name="redirect" value="/formvalidation" />
                <button>
                    Submit</button>
            </form>
        </div>
    )
}
