//@ts-nocheck

export default function page() {
    async function handleSubmit(formData) {
        'use server';
        console.log('Form submitted');
        const name = formData.get("name");
        console.log(name);
        const email = formData.get("email");
        console.log(email);
        const password = formData.get("password");
        console.log(password);
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1>Form Validation(server side)</h1>
            <form action={handleSubmit}
                className="flex flex-col gap-2 w-96 p-4 border border-gray-300 rounded-lg shadow-md">

                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="name" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" />

                <button >Submit</button>
            </form>
        </div>
    )
}
