import { notFound } from "next/navigation";

export default async function User({ params, }: {
    params: { username: string };
}) {
    const { username } = params;
    const userExists = username === "Saurabh"; // example check

    if (!userExists) {
        return <h1>User "{username}" not found.</h1>;
    }
    return (

        <h1>Profile:{username}</h1>
    )
}
