import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    total: 0,
}

function addTodoFn(state, action) {
    console.log("AddTodoFn Called : ", state, action)
    // const newItem = {
    //     id: "1234",
    //     title: "title",
    //     description: "description",
    //     completed: false,
    //     createdAt: new Date().toISOString(),
    // }
    state.todos.push(action.payload);
    return state;
}

function removeTodoFn(state, action) {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: addTodoFn,
        removeTodo: removeTodoFn,
    }
})

console.log("todoSlice", todoSlice)

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions;

// export default function todoSlice(state = initialState, action) {
export default todoSlice.reducer;