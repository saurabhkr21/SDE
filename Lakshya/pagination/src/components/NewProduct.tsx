//@ts-ignore
export default function NewProduct({item}) {
    const newDate=new Date(item.meta.createdAt).toLocaleDateString();
    return (
        <div key={item.id} className=" border-2 p-4 rounded-xl bg-amber-10 w-[300px]">
            <img src={item.thumbnail} alt="" width={200} height={200} />
            <div className="flex flex-col rounded-xl bg-amber-50 p-1 gap-2">
                <div className="flex justify-between">
                    <h1 className="text-xl">{item.title}</h1>
                    <p
                    className="font-bold w-15 h-6 rounded-sm flex items-center gap-1 justify-center-safe bg-green-600 text-white">
                        {item.rating}
                        <img  src="https://img.icons8.com/material-rounded/ffffff/star--v1.png" alt="star--v1"
                        className="h-[16px] w-[15px] "/></p>
                    {/* <p>{newDate}</p> */}
                </div>
                
                <p className="text-sm line-clamp-3">{item.description}</p>
                <p className="font-bold text-black">$ {item.price}</p>
            </div>
        </div>
    )
}