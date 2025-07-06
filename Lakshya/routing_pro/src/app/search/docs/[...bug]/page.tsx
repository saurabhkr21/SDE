export default function DocPages({params}:{params:{bug?:string[]}}){
    return(
        <div>
            <h1>Catch-all</h1>
            <p>segment:</p>
            <pre>{JSON.stringify(params.bug)}</pre>
        </div>
    );
}