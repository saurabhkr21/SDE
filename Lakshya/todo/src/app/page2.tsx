//@ts-nocheck
"use client"

import { title } from "process";
import { useState } from "react";

const initialitem = [
  "do launday",
  "Eat Healthy"
]
const compltedTask = [1];

export default function Home() {
  const [todos, setTodos] = useState(initialitem);
  const [completedTodo, setCompletedTodo] = useState(compltedTask);
  const [inputValue, setInputValue] = useState();
  const [isCompleted,setIsCompleted]=useState(false);
  function handleInputValue(event) {
    setInputValue(event.target.value)
  }

  function addTask() {
    if (inputValue.length == 0) return;
    let updateTodos = [...todos];
    let obj = {
      title:inputValue,
      isCompleted:false
    }
    updateTodos.push(obj)
    setTodos(updateTodos);
    setInputValue("");
  }
  function markcompleted(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].iscompleted = true;
    setTodos(updatedTodos);
  }

  function delTask(index) {
    let updatedTodos = [...todos]
    updatedTodos.splice[index, 1];
    setTodos(updatedTodos);
  }

  return (
    <div>

      <div>
        <input type="text" name="name" value={inputValue}
          onChange={handleInputValue}
          placeholder="Enter task name..." />
        <button onClick={addTask}>Add Task</button>
      </div>
      {
        todos.map(function (item, index) {
          const iscompleted = completedTodo.includes(index);
          return (
            <div key={index}>
              <h2>{item}</h2>
            </div>
          )
        })
      }
    </div>
  )
}