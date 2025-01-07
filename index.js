// seleção de elemento
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editCancelBtn = document.querySelector("#cancelar");


//funcções
const saveTodo = (text) =>{

    const todo = document.createElement("div");
    todo.classList.add("todo")


    const todoTitle = document.createElement("h3");

    todoTitle.innerText = text;
    todo.appendChild(todoTitle);
    
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finalizado-check")
    doneBtn.innerHTML = '👍🏽';
    todo.appendChild(doneBtn);
    
    const editBtn = document.createElement("button");
    editBtn.classList.add("finalizado-edit")
    editBtn.innerHTML = '✏️';
    todo.appendChild(editBtn);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("finalizado-delete")
    deleteBtn.innerHTML = '↩️';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();
}

//eventos
todoForm.addEventListener("submit", (e) =>{
e.preventDefault();

const inputValue = todoInput.value;


if(inputValue) {
    saveTodo(inputValue);
};
});

document.addEventListener("click", (e) =>{
    const targetEL = e.target;
    const parentEL = targetEL.closest("div")

    if(targetEL.classList.contains("finalizado-check")){
        parentEL.classList.toggle("done");
    }
});