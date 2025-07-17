const form = document.getElementById("formTodo");
const inputTodo = document.getElementById("inputTodo");
const submitTodo = document.getElementById("submitTodo");
const todoContainer = document.getElementById("todoContainer");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const todoText = inputTodo.value.trim();
    if (todoText) {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.innerHTML = `
            <div class="todo-text">${todoText}</div>
            <button class="todo-edit">Edit</button>
            <button class="todo-delete">Delete</button>
        `;
        todoContainer.appendChild(todoItem);
        inputTodo.value = "";
        todoItem.querySelector(".todo-edit").addEventListener("click", function () {
            const currentText = todoItem.querySelector(".todo-text").textContent;
            const newText = prompt("Edit your todo:", currentText);
            if (newText.length > 0) {
                todoItem.querySelector(".todo-text").textContent = newText.trim();
            }
        });
        todoItem.querySelector(".todo-delete").addEventListener("click", function () {
            todoContainer.removeChild(todoItem);
        });
    }
});
