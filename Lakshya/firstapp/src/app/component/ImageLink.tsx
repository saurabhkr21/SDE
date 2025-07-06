import Link from "next/link";

//@ts-ignore
export default function ImageLink({item}){
    let hrefRef="/image?url=" + item.url;
    return(
        <div>
            <Link href={hrefRef}>{item.name}</Link>
        </div>
    )
}