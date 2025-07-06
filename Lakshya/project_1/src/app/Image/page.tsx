import Image from "next/image";
import GoBackBtn from "../components/Gobackbtn";

//@ts-ignore
export default function Home({searchParams}){
    const url=searchParams.url;
    return(
        <div className="flex">
            <GoBackBtn />
            <Image src={url} alt="image" width={400} height={200} />
        </div>
    )
}