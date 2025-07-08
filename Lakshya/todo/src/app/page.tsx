//@ts-nocheck
"use client"

import { useEffect, useState } from "react";
import Header from "./components/Header";
import NewTodos from "./components/NewTodos"
import Todo from "./components/Todo"
import Crousel from "./components/Crousel";


export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const [todos, setTodos] = useState(() => {
        try {
            const saved = localStorage.getItem("todoData");
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error("Error loading todos:", e);
            return [];
        }
    });

    // const [todos,setTodos]=useState(()=>{
    //     const saved=localStorage.getItem("todoData");
    //     return saved ? JSON.parse(saved):[];
    // })
    // useEffect(()=>{
    //     localStorage.setItem("todoData",JSON.stringify(todos));
    // },[todos]);


    function handleOpen() {
        setIsOpen(true);
    }
    function handleClose() {
        setIsOpen(false)
    }

    useEffect(() => {
        try {
            const serialized = JSON.stringify(todos);
            localStorage.setItem("todoData", serialized);
        } catch (e) {
            console.error("Error saving todos:", e);
        }
    }, [todos]);

    function handleSubmit(todo) {
        setTodos((prev) => [...prev, todo]);
        handleClose();
    }

    function handleDelete(indexDelete) {
        setTodos((prev) => prev.filter((_, index) => index !== indexDelete));
    }


    return (
        <div className="flex flex-col w-full">
            <Header
                handleOpen={handleOpen} />

            <main className='flex flex-col items-center justify-center w-full h-full max-w-full bg-slate-200'>
                <div className='w-full  object-cover flex items-center justify-center '>
                    <Crousel />
                </div>
                <section className='flex h-screen flex-col  items-center  w-full max-w-full bg-slate-200 gap-[8px] p-3 border-2'>
                    <h2 className='text-lg '>TodoList</h2>
                    <div className="flex flex-wrap w-full justify-center gap-2 ">
                        {
                            todos.map(({ title, description }, index) => (
                                <Todo
                                    key={index}
                                    index={index}
                                    title={title}
                                    description={description}
                                    handleDelete={handleDelete} />
                            ))
                        }
                    </div>
                </section>
                {
                    isOpen ?
                        <NewTodos
                            handleClose={handleClose}
                            handleSubmit={handleSubmit}
                            handleDelete={handleDelete} /> : " "
                }
            </main>

        </div>
    )
}