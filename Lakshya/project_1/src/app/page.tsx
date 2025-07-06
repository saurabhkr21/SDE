//@ts-nocheck
import Image from "next/image";
import ImageLink from "./components/ImageLink";
let imageArr = [];
export default function Home({ searchParams }) {
    let name = searchParams.name;
    let url = searchParams.url;
    if (name && url) {
        let obj = {
            name: name,
            url: url
        }
        imageArr.push(obj)
    }

    return (
        <div>
            <form action="/" method="GET">
                <input type="text" name="url" placeholder="Enter image Url" />
                <input type="text " name="name" placeholder="Enter image name" />
                <button type="submit">Add</button>
            </form>
            {
                imageArr.map(function ( item,index) {
                    return (
                        <div key={index} className="bg-amber-600 w-[200px]">
                            <ImageLink item={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}