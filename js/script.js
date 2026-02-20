const { act, useLayoutEffect } = require("react");

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');
   
    if (todoInput.value.trim() === '' || todoDate.value === '') {
        alert("Please enter both a todo item and a due date.");
        return;
    }

    const todoList = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${todoInput.value} - Due: ${todoDate.value}`;
    todoList.appendChild(listItem);

    // Clear input fields
    todoInput.value = '';
    todoDate.value = '';
}
function clearTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
}