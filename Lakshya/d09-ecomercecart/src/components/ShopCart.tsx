//@ts-nocheck

export default function ShopCart({ item, index, handleRemove }) {

    return (
        <div key={item.id} className="flex rounded-md  w-full">
            <div className="flex shadow-amber-100 shadow-2xl ">
                <div className="w-80 ">
                    <img src={item.thumbnail} alt="product Image" />
                </div>
                <div className="flex w-140 flex-col gap-5 bg-blue-50 mt-3 rounded-sm  p-2">
                    <div className="flex  justify-between">
                        <p>{item.title}</p>
                        <button
                            onClick={() => handleRemove(index)}
                            className="flex z-50 h-[17px] mt-2 mr-2">
                            <img width="20" src="https://img.icons8.com/material-outlined/24/filled-trash.png"
                                alt="multiply--v1" />
                        </button>
                    </div>
                    <p>{item.description}</p>
                    <p>$ {item.price}</p>
                    <div className="flex justify-between">
                        <p>Rating {item.rating}</p>
                    </div>
                </div>
            </div>
        </div>


    )
}
