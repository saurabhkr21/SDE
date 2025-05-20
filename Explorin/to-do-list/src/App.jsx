import React, { useEffect, useState } from 'react'
export default function App() {

  const savedData = JSON.parse(localStorage.getItem("datatodo-")) || [];
  const [isOpen, setIsOpen] = useState(false);
  const [todoData, setTodoData] = useState([]); // [{t,d}, {t,d}, {t,d}]
  
  function setSavedData() {
    console.log("Using Data from Local Storage ...");
    setTodoData(savedData);
  }
  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }
  function handleSubmit(newTodo) {
    setTodoData((prev) => [...prev, newTodo]);
    handleClose();
  }
  function timerFn() {
    var x = 0;
    const timer = setInterval(() => {
      console.log("Running Timer", x++);
    }, 1000);
    return () => clearInterval(timer);
  }
  useEffect(timerFn, [todoData]);
  // const arf = [1, 2, 3, 4, 5];
  // const arg = arf.map((element, index) => (
  // ));
  return (

    <div className='App flex flex-col  '>
      <header className="p-4 max-w-full w-full flex items-center relative bg-[#e9e9e9]">
        <img src="https://static-00.iconduck.com/assets.00/todo-icon-2048x2048-m7wp6prw.png" className='w-9 h-9' alt="todo-logo" />
        <h1 className="w-full max-w-full text-2xl font-semibold text-center absolute left-0">  
          Todo
        </h1>
      </header>
      <main className='flex flex-col items-center justify-center w-full h-full max-w-full bg-slate-200'>
        <div className='w-full bg-amber-200 aspect-4/1 flex items-center justify-center '>
          <p>Coursel</p>
        </div>
        <section className='flex flex-col items-center justify-center w-full max-w-full bg-slate-300 gap-[8px] border-4'>
          <h2 className='text-lg '>TodoList</h2>
          <button onClick={handleOpen} className=' border-1 rounded-xl  p-1 cursor-pointer' >Add items</button>
          <div className='w-full  '>
            <ul className=" flex flex-wrap justify-center gap-2 w-full max-w-full bg-amber-50 overflow-auto ">
              
              {
                todoData.map(({ title, description }, index) => (<li className="TodoCard flex flex-col min-w-[30%] max-w-1/3 flex-1 gap-4 p-4 border-2 rounded-sm bg-violet-50">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-lg">{title}</span>
                    <input type="checkbox" />
                  </div>
                  <textarea
                    className="p-2 border-2 rounded-sm" rows="3" disabled >
                    {description}
                  </textarea>
                </li>
                ))
              }
            </ul>
          </div>
        </section>
        {isOpen ? (
          <NewTodoDialogue
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />
        ) : null}
      </main>
    </div>
  )
}
export function NewTodoDialogue({ handleClose, handleSubmit, ...props }) {
  return (
    <div
      onClick={handleClose}
      className="w-screen h-screen fixed top-0 left-0 bg-[#00000080]  flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onSubmit={() => console.log("Submit Called !")}
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
            rows="4"
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
            // onClick={handleSubmit}
            // onClick={handleSubmit(123)}
            onClick={(e) => {
              // console.log("Submitting ...");
              const title = document.getElementById("titleInput").value;
              const description = document.getElementById("descriptionInput").value;
              handleSubmit({title, description});
            }}
          >
            Add
          </Button>
        </span>
      </div>
    </div>
  );
}

export function Button({ className, children, ...props }) {
  return (
    <button
      {...props}
      className={` ${className} px-4 py-1 border rounded-lg shadow active:inset-shadow `}>
      {children}
    </button>
  );
}