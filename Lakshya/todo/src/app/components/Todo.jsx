export default function Todo({ title, description, index, handleDelete }) {
    return (
        <li className="TodoCard flex h-auto flex-col min-w-[30%] max-w-1/3 flex-1 gap-4 p-4 border-2 rounded-sm bg-violet-50">
            <div className="flex justify-between items-center w-full">
                <span className="text-lg">{title}</span>
                <div className="flex gap-2">
                    <button
                        onClick={() => handleDelete(index)}>
                        <img width="15" height="20" src="https://img.icons8.com/material-outlined/24/filled-trash.png" alt="filled-trash" />
                    </button>
                    <input type="checkbox" />
                </div>
            </div>
            <textarea
                className="p-2 border-2 rounded-sm" rows="3" disabled >
                {description}
            </textarea>
        </li>
    )
}