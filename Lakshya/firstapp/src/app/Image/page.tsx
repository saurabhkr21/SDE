import Image from "next/image";
import GoBackBtn from "../component/GoBackBtn";
//@ts-ignore
export default function Home({searchParams}){
    const url=searchParams.url;
    return(
        <div>
            <GoBackBtn/>
            <Image src={url} alt="image" width={150} height={200}/>
        </div>
    )
}