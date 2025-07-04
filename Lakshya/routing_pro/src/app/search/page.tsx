//@ts-ignore
export default function Home({ searchParams }) {
    const term = searchParams.term;
    const mail = searchParams.mail;
    const mob = searchParams.mob;
    return (
        <div className="flex flex-col gap-2 p-6 ">
            <h1>Search Page :-</h1><br />
            <p>search:- {term}</p>
            <span>{mail}</span>
            <span>{mob}</span>
        </div>
    )
}