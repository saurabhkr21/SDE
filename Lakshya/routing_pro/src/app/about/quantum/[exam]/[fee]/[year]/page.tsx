export default function Home(
    {params}:{params:
    {exam:string ,fee:string, year:string}}){
    const {exam ,fee,year}=params;
    return(
        <p>Search {exam} Fee :{fee} Year:{year} </p>
    )
}