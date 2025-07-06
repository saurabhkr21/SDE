import Link from "next/link";

//@ts-ignore
export default function ImageLink({item}){
    let hrefRef="/Image?url=" + item.url;
    let name= item.name;
    return(
        <div>
            
            <Link href={hrefRef}>{name}</Link>
        </div>
    )
}