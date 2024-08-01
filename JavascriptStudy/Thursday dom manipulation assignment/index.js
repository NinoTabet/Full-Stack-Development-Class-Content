const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const todoText = input.value.trim();
    if (todoText === '') return; // Do nothing if input is empty

    // Create a new to-do item
    const todoItem = document.createElement('li');
    todoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    todoItem.innerHTML = `${todoText}<button class="btn btn-sm btn-danger ms-2">Delete</button>`;

    // Add click listener for "Delete" button
    todoItem.querySelector('.btn-danger').addEventListener('click', () => {
        todoItem.remove();
    });

    // Add click listener to mark item as done
    todoItem.addEventListener('click', () => {
        todoItem.classList.toggle('list-group-item-success');
    });

    // Append new item to the list
    todoList.appendChild(todoItem);

    // Clear the input field
    input.value = '';
});