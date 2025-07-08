//@ts-nocheck

export default function Header({ handleOpen }) {
    return (
        <div className="flex gap-6 text-blue-700 italic  w-full h-14 bg-amber-300 items-center justify-center">

            <img width="54" height="54" src="https://img.icons8.com/wired/64/todoist.png" alt="todoist" /><div className="flex  text-3xl" >

                Todos Task </div>
            <div>
                <button
                    onClick={handleOpen}
                    className="flex items-end ">
                        <img width="40" height="18" src="https://img.icons8.com/ios/B52838/add-property.png" alt="add-property"/>
                    </button>
            </div>
        </div>
    )
}