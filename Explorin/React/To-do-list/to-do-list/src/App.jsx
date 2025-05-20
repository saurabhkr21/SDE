
import React, { useState, useEffect } from "react";

export default function App() {
  const savedData = JSON.parse(localStorage.getItem("todo-data")) || [];

  const [isOpen, setIsOpen] = useState(false);

  // const todoData = [];
  const [todoData, setTodoData] = useState([]); // [{t,d}, {t,d}, {t,d}]

  function setSavedData() {
    console.log("Using Data from Local Storage ...");
    setTodoData(savedData);
  }
  // setSavedData();

  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
    // Array()
    // const ob1 = {a: 1, b: 2, c: 3};
    // const newO = new Object(ob1);
    // const ar = Object.values(ob1);
    // ar = [
    //   ["a", 1],
    //   ["b", 2],
    //   ["c", 3]
    // ];
    // Array.isArray()
  }

  function handleSubmit(newTodo) {
    // todoData.push(newTodo);
    // setTodoData([...todoData, newTodo]);
    setTodoData((prev) => [...prev, newTodo]);
    console.log("Submit Called !");
    console.log("Data Passed For Submitting : ", newTodo);
    console.log("Current Data Array : ", todoData);
    handleClose();
  }

  function timerFn() {
    console.log("useEffect Running!");
    var x = 0;
    const timer = setInterval(() => {
      console.log("Running TImer", x++);
    }, 1000);
    return () => clearInterval(timer);
  }

  useEffect(timerFn, [todoData]);

  return (
    <div className="App flex flex-col">
      <header className="p-4 max-w-full w-full flex items-center relative bg-[#e9e9e9]">
        <img
          className="w-10 h-10"
          src="https://img.icons8.com/fluency/144/microsoft-todo-2019.png"
          alt="todo-logo"
        />
        <h1 className="w-full max-w-full text-2xl font-semibold text-center absolute left-0">
          Todo
        </h1>
      </header>
      <main>
        <div className="w-full aspect-6/1 h-auto bg-[#f8f8f8] flex items-center justify-center">
          Carousel
        </div>

        <section className="flex flex-col items-center justify-center w-full max-w-full bg-[#e3e3e3] p-4 gap-4 overflow-hidden border-8">
          <h2 className="text-xl">TodoList</h2>
          <button
            onClick={handleOpen}
            className="py-1 px-3 border-2 rounded-md cursor-pointer"
          >
            Add Item
          </button>
          <ul className=" flex flex-wrap justify-center gap-4 w-full max-w-full bg-amber-50 overflow-auto">
            {todoData.map(({ title, description }, index) => (
              <li
                // key={"Item-" + index}
                className="TodoCard flex flex-col min-w-[30%] max-w-1/3 flex-1 gap-4 p-4 border-2 rounded-sm bg-violet-50"
              >
                <div className="flex justify-between items-center w-full">
                  <span className="text-lg">{title} </span>
                  <input type="checkbox" />
                </div>
                <textarea
                  className="p-4 border-2 rounded-sm"
                  rows="4"
                  disabled
                >
                  {description}
                </textarea>
              </li>
            ))}
          </ul>
        </section>

        {isOpen ? (
          <NewTodoDialogue
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />
        ) : null}
      </main>
    </div>
  );
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
              console.log("Submitting ...");
              const title = document.getElementById("titleInput").value;
              const description =
                document.getElementById("descriptionInput").value;
              handleSubmit({
                title,
                description,
              });
            }}
          >
            Add
          </Button>
        </span>
      </div>
    </div>
  );
}

// const val1 = handleSubmit(123)
// const val2 = () => handleSubmit(123)
// val2();

// const ofbj = {
//   onClick: handleSubmit(123),
// }

// const prop = {
//   title: "CLick to Add a new TODO",
//   className: " bg-blue-600 text-white ",
//   type: "submit",
//   onClick: () => console.log("Submit Called !"),
// };

// const {title, className, ...rest} = prop;

// const rest = {
//   type: "submit",
//   onClick: () => console.log("Submit Called !"),
// }

export function Button({ className, children, ...props }) {
  return (
    <button
      {...props}
      // title={title}
      className={` ${className} px-4 py-1 border rounded-lg shadow active:inset-shadow `}
    >
      {children}
    </button>
  );
}
