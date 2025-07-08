//@ts-nocheck
import Button from "@/app/components/Button"
export default function NewTodoDialogue({handleClose,handleSubmit}) {
    return (
        <div
            onClick={handleClose}
            className="w-screen h-screen fixed top-0 left-0 bg-[#00000084]  flex justify-center items-center"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="min-w-40 w-1/3 min-h-32 h-3/5 p-4 flex flex-col gap-4 text-black bg-white shadow border-2"
            >
                <h2 className="w-full text-center text-xl p-4 pb-0">Add A New ToDo</h2>
                <label htmlFor="titleInput">
                    Title
                    <input
                        id="titleInput"
                        type="text"
                        placeholder="Enter the Title"
                        className="w-full h-10 p-2 border-2 rounded-md"
                    />
                </label>
                <label htmlFor="descriptionInput" className="flex-1 flex flex-col">
                    Description
                    <textarea
                        id="descriptionInput"
                        placeholder="Enter the Description"
                        className="flex-1 w-full h-10 p-2 border-2 rounded-md"
                    ></textarea>
                </label>
                <span className="flex justify-end gap-4">
                    <Button
                        className="bg-red-50"
                        children={"Cancel"}
                        onClick={handleClose}
                    />
                    <Button
                        title="CLick to Add a new TODO"
                        className=" bg-blue-600 text-white "
                        type="submit"
                        onClick={(e) => {
                            const title = document.getElementById("titleInput").value;
                            const description = document.getElementById("descriptionInput").value;
                            handleSubmit({ title, description });
                        }}
                    >
                        Add
                    </Button>
                </span>
            </div>
        </div>
    );
}