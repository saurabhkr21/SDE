import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { decrement, increment } from "../features/todo/counterSlice";
import { addTodo } from "../features/todo/Slice";

export default function Auth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);
    const todoState = useSelector((state) => state.todo.todos);
    console.log("todoState", todoState);
    return (
        <div>
            <div onClick={() => navigate("/")}>EXPLORAZON</div>Sign in <br />
            mreshanktyagi@gmail.com <br />
            Change Password <br />
            Forgot password?
            <button
                className="border rounded p-4"
                onClick={() => {
                    dispatch(
                        addTodo({
                            id: "abc" + count,
                            title: "title",
                            description: "description",
                            completed: false,
                            createdAt: new Date().toISOString(),
                        })
                    );
                }}
            >
                Add Todo
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <span>{count}</span>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
        </div>
    );
}